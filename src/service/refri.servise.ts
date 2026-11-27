import { refriRepository } from "../repositories/refri.repositorie.js";
import type { CriarRefri, Refri } from "../types/types.js";

class RefriServices {
    async create(dados: CriarRefri): Promise<Refri>{
        return await refriRepository.create(dados)
    }

}

export const refriServices = new RefriServices()