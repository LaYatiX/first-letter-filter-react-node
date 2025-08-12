import express from "express";
import { filterWeather } from "../controllers/weather.controller";

const router = express.Router();

router.get("/filter", filterWeather);

export default router;
