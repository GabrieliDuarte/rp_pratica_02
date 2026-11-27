import { db } from "../database/knex.js";
import type { CriarRefri, Refri } from "../types/types.js";

class RefriRepository {
    async create(dados: CriarRefri): Promise<Refri>{
        const [refriCriado] = await db("refri").insert(dados).returning("*")
        return refriCriado
    } 
}

export const refriRepository = new RefriRepository()