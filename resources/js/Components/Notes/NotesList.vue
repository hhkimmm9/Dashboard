<template>
    <div class="h-60 md:h-60 lg:h-full">
        <div class="bg-gray-400 p-2 text-center">
            <p class="font-bold text-2xl"> Notes </p>
        </div>
        <div class="h-full overflow-y-auto">
            <ul v-if="notesFilteredByFolder.length > 0" class="mt-2 space-y-2">
                
                    <li v-for="(item, index) in notesFilteredByFolder" :key="index">
                        <Link :href="`/notes/${item.id}`">
                            <NoteItem :note="item" />
                        </Link>
                    </li>
            </ul>
            <div v-else class="text-center mt-2">
                <p>Empty</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { useGeneralStore } from '@/Stores/index'
import { computed } from 'vue';

import NoteItem from '@/Components/Notes/NoteItem.vue'

const generalStore = useGeneralStore()

const notesFilteredByFolder = computed(() => {
    if (generalStore.selectedFolderId == 0) {
        return generalStore.notes
    }
    else {
        return generalStore.notes.filter(item => item.folder_id == generalStore.selectedFolderId )
    }
})
</script>

<style lang="scss" scoped>

</style>