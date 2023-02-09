import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layoutStore', {
    state: () => ({
        showDock: true,
    })
});