import { defineStore } from 'pinia';

const useGeneralStore = defineStore('generalStore', {
    state: () => {
        return {
            is_todays_tasks_created: Boolean,
            modal_target_container: Object,
            notification: {
                icon_type: 'pass',
                message: null,
            },
            save: false,
        }
    },

    getters: {
        
    },

    actions: {
        reset() {

        },
    }
});

export default useGeneralStore;