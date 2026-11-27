import type { Request, Response } from "express";
import type { CriarRefri, Refri } from "../types/types.js";
import { refriServices } from "../service/refri.servise.js";

class RefriControllers {
    async create(req: Request<{}, {}, CriarRefri>, res: Response<Refri | { error: string } | { message: string }>): Promise<Response> {
        try {
            const dados = req.body
            const refri = await refriServices.create(dados)

            if (!refri) {
                return res.status(400).json({ error: "Erro ao inserir refri" })
            }

            return res.status(201).json({ message: "Refri Inserido!" })
        } catch (error) {
            return res.status(400).json({ error: "Erro no banco de dados" })
        }
    }
   
}

export const refriControllers = new RefriControllers()