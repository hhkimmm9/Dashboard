import { defineStore } from 'pinia';

const useLayoutStore = defineStore('layoutStore', {
    state: () => ({
        showDock: true,
        show_notification: true,
        open_comment_modal: false,
        open_quick_edit_modal: false,
    }),

    getters: {
        // 
    },

    actions: {
        // 
    }
});

export default useLayoutStore;