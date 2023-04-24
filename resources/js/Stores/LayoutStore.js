import { defineStore } from 'pinia';

const useLayoutStore = defineStore('layoutStore', {
    state: () => ({
        showDock: true,
        openCommentModal: false,
        openQuickEditModal: false,

        // Notifications
        show_notification: true,
        notification: {
            icon_type: 'pass',
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