export interface TrainerBasicInfo {
    name: string;
    surname: string;
    dni: string;
}

export interface TrainerPokemon {
    assignedPokemon?: number;
}

export interface TrainerContact {
    email: string;
}

export interface Trainer {
    id: number;
    basicInfo: TrainerBasicInfo;
    contact: TrainerContact;
    pokemon?: TrainerPokemon;
}