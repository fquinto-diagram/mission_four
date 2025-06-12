import { defineStore } from "pinia";
import type { Trainer } from '../interface/trainer'

export const useTrainerStore = defineStore("trainer", {
    state: () => ({
        trainers: JSON.parse(localStorage.getItem('trainers') || '[]') as Trainer[],
    }),
    
    actions: {
        addTrainer(trainer: Trainer) {
            this.trainers.push(trainer);
            this.saveToLocalStorage();
        },
        removeTrainer(trainerId: number) {
            this.trainers = this.trainers.filter(t => t.id !== trainerId);
            this.saveToLocalStorage();
        },
        updateTrainer(upTrainer: Trainer) {
            const index = this.trainers.findIndex(t => t.id === upTrainer.id);
            if (index !== -1) {
                this.trainers[index] = upTrainer;
                this.saveToLocalStorage();
            }
        },
        saveToLocalStorage() {
            localStorage.setItem('trainers', JSON.stringify(this.trainers));
        }
    },

    getters: {
        getTrainerById: (state) => {
            return (trainerId: number) => state.trainers.find(t => t.id === trainerId);
        },
        getAllTrainers: (state) => state.trainers,

        // Getters computats per a la info del Pokémon
        namePoke: (state) => (trainerId: number) =>
            state.trainers.find(t => t.id === trainerId)?.pokemon?.forms?.[0]?.name ?? '',

        imgPoke: (state) => (trainerId: number, shinyMap: Record<number, boolean>) => {
            const trainer = state.trainers.find(t => t.id === trainerId);
            if (!trainer?.pokemon) return '';
            return shinyMap[trainerId]
                ? trainer.pokemon.sprites.front_shiny
                : trainer.pokemon.sprites.front_default;
        },

        typePoke: (state) => (trainerId: number) =>
            state.trainers.find(t => t.id === trainerId)?.pokemon?.types ?? [],
    }
});