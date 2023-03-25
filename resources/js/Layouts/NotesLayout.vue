<template>
    <div class="max-w-7xl mx-auto h-full flex flex-row">
        <div class="grid grid-cols-12 w-full">
            <div v-if="layoutStore.showSidePanels" class="col-span-3 h-screen bg-gray-100">
                <FoldersList />
            </div>
            <div v-if="layoutStore.showSidePanels" class="col-span-4 h-screen bg-gray-200">
                <NotesList />
            </div>
            <div :class="['h-screen bg-gray-100', layoutStore.showSidePanels ? 'col-span-5' : 'col-span-12']">
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