<template>
    <div class="max-w-7xl mx-auto h-full flex flex-row">
        <div class="grid grid-cols-12 w-full">
            <div class="col-span-3 h-screen bg-gray-100">
                <FoldersList />
            </div>
            <div class="col-span-4 h-screen bg-gray-200">
                <NotesList />
            </div>
            <div class="col-span-5 h-screen bg-gray-100">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import FoldersList from '@/Components/Notes/FoldersList.vue'
import NotesList from '@/Components/Notes/NotesList.vue'

</script>

<style lang="scss" scoped>

</style>