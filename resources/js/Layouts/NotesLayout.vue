<template>
    <div class="max-w-7xl mx-auto h-full flex flex-row">
        <div class="grid grid-cols-12 w-full">
            <div v-if="layoutStore.showSidePanels"
                class="
                    bg-gray-100 col-span-12
                    md:col-span-5
                    lg:col-span-3 lg:h-screen
                "
            >
                <FoldersList />
            </div>
            <div v-if="layoutStore.showSidePanels"
                class="
                    bg-gray-200 col-span-12
                    md:col-span-7
                    lg:col-span-4 lg:h-screen
                "
            >
                <NotesList />
            </div>
            <div :class="[
                'h-screen bg-gray-100 col-span-12',
                layoutStore.showSidePanels
                ? 'lg:col-span-5'
                : 'lg:col-span-12'
            ]">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import FoldersList from '@/Components/Notes/FoldersList.vue'
import NotesList from '@/Components/Notes/NotesList.vue'
import { useLayoutStore } from '@/Stores'

const layoutStore = useLayoutStore()

</script>

<style lang="scss" scoped>

</style>