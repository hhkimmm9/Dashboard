import { defineStore } from 'pinia';

const useLayoutStore = defineStore('layoutStore', {
    state: () => ({
        showDock: true,
        openCommentModal: false,
        openQuickEditModal: false,

        // Notifications
        showNotification: false,
        notification: {
            type: 'success',
            message: null,
        },

        // Notes
        showSidePanels: true,
    }),

    getters: {
        // 
    },

    actions: {
        // 
    }
});

export default useLayoutStore;