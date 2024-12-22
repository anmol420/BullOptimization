import { Router } from "express";
import verifyToken from "../middlewares/auth.middleware.js";
import { createTournaments } from "../controllers/tournament.controller.js";

const router = Router();

//admin controlled routes
router.route("/createTournament").post(createTournaments)

//user accessed routes
