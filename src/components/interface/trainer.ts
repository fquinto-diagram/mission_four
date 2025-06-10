import type { Pokemon } from "./pokemon";

export interface TrainerBasicInfo {
    name: string;
    surname: string;
    dni: string;
}

export interface TrainerContact {
    email: string;
}

export interface Trainer {
    id: number;
    basicInfo: TrainerBasicInfo;
    contact: TrainerContact;
    pokemon?: Pokemon;
}