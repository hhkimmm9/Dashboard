import { defineStore } from 'pinia';

export const useGeneralStore = defineStore('generalStore', {
    state: () => {
        return {
            is_todays_tasks_created: false,

        }
    },

    getters: {
        
    },

    actions: {

    }
});