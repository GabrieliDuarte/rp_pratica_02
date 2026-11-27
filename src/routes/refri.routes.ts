import { Router } from "express";
import { controller}

export const refriRouter = Router()

refriRouter.get("/",Controller.getAll)

