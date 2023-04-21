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

            notes: Array,
            folders: Array,
            selectedFolderId: null,

            guestMode: false,
        }
    },

    getters: {
        
    },

    actions: {
        reset() {
            // console.log('generalStore.reset() is called')
            this.save = false
        },
    }
});

export default useGeneralStore;