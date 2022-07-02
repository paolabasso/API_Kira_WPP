import { Router } from "express";
import { registerController } from "./controllers/registerControllers.js";
import { calendarController } from "./controllers/calendarFertilityControllers.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({"message":"to funcionando"})
})

router.post("/register_calendar", registerController)
router.post("/calendar_fertility", calendarController)


export default router