

import Incident from "../mongodb/models/incident.js";
import User from "../mongodb/models/user.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllIncidents = async (req, res) => {
    const {
        _end,
        _order,
        _start,
        _sort,
        title_like = "",
        incidentType = "",
    } = req.query;

    const query = {};

    if (incidentType !== "") {
        query.incidentType = incidentType;
    }

    if (title_like) {
        query.title = { $regex: title_like, $options: "i" };
    }

    try {
        const count = await Incident.countDocuments({ query });

        const incidents = await Incident.find(query)
            .limit(_end)
            .skip(_start)
            .sort({ [_sort]: _order });

        res.header("x-total-count", count);
        res.header("Access-Control-Expose-Headers", "x-total-count");

        res.status(200).json(incidents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getIncidentDetail = async (req, res) => {
    const { id } = req.params;
    const incidentExists = await Incident.findOne({ _id: id }).populate(
        "creator",
    );

    if (incidentExists) {
        res.status(200).json(incidentExists);
    } else {
        res.status(404).json({ message: "Incident not found" });
    }
};

const createIncident = async (req, res) => {
    try {
        const {
            unite,
            date,
            heure,
            incidentType,
            location,
            longitude,
            latitude,
            region,
            province,
            ville,
            victimfds,
            victimcivil,
            victimhani,
            totalami,
            blessefds,
            blessecivil,
            equipementperdu,
            equipementrecup,
            commentaire,
            photo,
            email,
        } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);

        if (!user) throw new Error("User not found");

        const photoUrl = await cloudinary.uploader.upload(photo);

        const newIncident = await Incident.create({
            unite,
            date,
            heure,
            incidentType,
            location,
            longitude,
            latitude,
            region,
            province,
            ville,
            victimfds,
            victimcivil,
            victimhani,
            totalami,
            blessefds,
            blessecivil,
            equipementperdu,
            equipementrecup,
            commentaire,
            photo: photoUrl.url,
            creator: user._id,
        });

        user.allIncidents.push(newIncident._id);
        await user.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Incident created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateIncident = async (req, res) => {
    try {
        const { id } = req.params;
        const { unite,date,heure,incidentType,location,longitude,latitude, region,province,ville, victimfds, victimcivil, victimhani, totalami, blessefds, blessecivil, equipementperdu, equipementrecup, commentaire, photo } =
            req.body;

        const photoUrl = await cloudinary.uploader.upload(photo);

        await Incident.findByIdAndUpdate(
            { _id: id },
            {
                unite,
                date,
                heure,
                incidentType,
                location,
                longitude,
                latitude,
                region,
                province,
                ville,
                victimfds,
                victimcivil,
                victimhani,
                totalami,
                blessefds,
                blessecivil,
                equipementperdu,
                equipementrecup,
                commentaire,

                photo: photoUrl.url || photo,
            },
        );

        res.status(200).json({ message: "Incident updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteIncident = async (req, res) => {
    try {
        const { id } = req.params;

        const incidentToDelete = await Incident.findById({ _id: id }).populate(
            "creator",
        );

        if (!incidentToDelete) throw new Error("Incident not found");

        const session = await mongoose.startSession();
        session.startTransaction();

        incidentToDelete.remove({ session });
        incidentToDelete.creator.allIncidents.pull(incidentToDelete);

        await incidentToDelete.creator.save({ session });
        await session.commitTransaction();

        res.status(200).json({ message: "Incident deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllIncidents,
    getIncidentDetail,
    createIncident,
    updateIncident,
    deleteIncident,
};