import { Router } from "express";
import { CarControllers } from "../controllers/CarControllers";

const router = Router();

const controllers = new CarControllers();

router.get("/cars", (req, res) => controllers.getAll(req, res));
router.get("/car/:id", (req, res) => controllers.getById(req, res));
router.post("/car", (req, res) => controllers.create(req, res));
router.put("/car", (req, res) => controllers.update(req, res));
router.get("/car", (req, res) => controllers.delete(req, res));

export { router as carRoutes };
