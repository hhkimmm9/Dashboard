import { defineStore } from 'pinia';

const useGeneralStore = defineStore('generalStore', {
    state: () => {
        return {
            isTodaysTasksCreated: Boolean,
            modalTargetContainer: Object,
            
            save: false,

            notes: Array,
            folders: Array,
            selectedFolderId: 0,

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