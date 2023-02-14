import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema({
    unite: { type: String, required: true },
    incidentType: { type: String, required: true },
    region: { type: String, required: true },
    province: { type: String, required: true },
    ville: { type: String, required: true },
    location: { type: String, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    victimfds: { type: Number, required: true },
    victimcivil: { type: Number, required: true },
    victimhani: { type: Number, required: true },
    totalami: { type: Number, required: true },
    blessefds: { type: Number, required: true },
    blessecivil: { type: Number, required: true },
    equipementperdu: { type: String, required: true },
    equipementrecup: { type: String, required: true },
    commentaire: { type: String, required: true },
    date: { type: Date, required: true },
    heure: { type: Date, required: true },
    photo: { type: String, required: true },


    //unite,
    //date,
    //heure,
    //incidentType,
    //location,
    //region,
    //province,
    //ville,
    //victimfds,
    //victimcivil,
    //victimhani,
    //totalami,
    //blessefds,
    //blessecivil,
    //equipementperdu,
    //equipementrecup,
    //commentaire,

    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const incidentModel = mongoose.model("Incident", IncidentSchema);

export default incidentModel;