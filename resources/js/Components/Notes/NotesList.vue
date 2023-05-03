<template>
    <div class="h-60 md:h-60 lg:h-full">
        <div class="bg-gray-400 p-2 text-center">
            <p class="font-bold text-2xl"> Notes </p>
        </div>
        <div class="h-full overflow-y-auto">
            <ul v-if="!showCreateButton" class="mt-2 space-y-2">
                
                    <li v-for="(item, index) in notesFilteredByFolder" :key="index">
                        <NoteItem :note="item" />
                    </li>
            </ul>
            <div v-else class="flex justify-center mt-5">
                <Link href="notes/create" as="button"
                    class="py-2 rounded w-full mx-5 bg-gray-50 shadow hover:bg-gray-100"
                >
                    <p class="font-medium">Create a new note</p>
                </Link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { useGeneralStore } from '@/Stores/index'
import { ref, watchEffect } from 'vue';

import NoteItem from '@/Components/Notes/NoteItem.vue'

const generalStore = useGeneralStore()

const showCreateButton = ref(true)
var notesFilteredByFolder = ref([])

watchEffect(() => {
    // all folders
    if (generalStore.selectedFolderId == 0) {
        notesFilteredByFolder.value = generalStore.notes.filter(item => item.deleted_at == null)
    }
    // deleted folders
    else if (generalStore.selectedFolderId == -1) {
        notesFilteredByFolder.value = generalStore.notes.filter(item => item.deleted_at != null)
    }
    // general folders
    else {
        notesFilteredByFolder.value = generalStore.notes.filter(item => item.folder_id == generalStore.selectedFolderId )
    }
})

watchEffect(() => {
    showCreateButton.value = notesFilteredByFolder.value == 0 ? true : false
})
</script>

<style lang="scss" scoped>

</style>