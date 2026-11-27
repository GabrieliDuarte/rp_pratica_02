import { Router } from "express";
import { refriControllers } from "../controllers/refri.controller.js";

export const refriRouter = Router()

refriRouter.post("/", refriControllers.create)
