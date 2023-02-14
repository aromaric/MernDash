

import express from "express";

import {
    createIncident,
    deleteIncident,
    getAllIncidents,
    getIncidentDetail,
    updateIncident,
} from "../controllers/incident.controller.js";

const router = express.Router();

router.route("/").get(getAllIncidents);
router.route("/:id").get(getIncidentDetail);
router.route("/").post(createIncident);
router.route("/:id").patch(updateIncident);
router.route("/:id").delete(deleteIncident);

export default router;