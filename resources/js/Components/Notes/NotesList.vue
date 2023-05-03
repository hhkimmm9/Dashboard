<template>
    <div class="h-60 md:h-60 lg:h-full">
        <div class="bg-gray-400 p-2 text-center">
            <p class="font-bold text-2xl"> Notes </p>
        </div>
        <div class="h-full overflow-y-auto">
            <ul v-if="notesFilteredByFolder.lenght > 0" class="mt-2 space-y-2">
                <li v-for="(item, index) in notesFilteredByFolder" :key="index" class="flex justify-between items-center hover:bg-gray-100 px-2">
                    <Link :href="route('notes.show', { id: item.id })" class="cursor-pointer truncate mr-5"> {{ item.label }} </Link>
                    <Dropdown>
                        <template v-slot:trigger>
                            <span class="material-symbols-outlined text-lg cursor-pointer"> more_horiz </span>
                        </template>
                        <template v-slot:content>
                            <div class="flex flex-col px-3 py-1">
                                <ul>
                                    <Link
                                        :href="route('notes.edit', { id: item.id })"
                                        as="li"
                                        class="
                                            flex items-center gap-2 cursor-pointer
                                            hover:bg-gray-50
                                        "
                                    >
                                        <span class="material-symbols-outlined text-lg"> edit </span>
                                        <span> Edit </span>
                                    </Link>
                                    <Link
                                        :href="route('notes.destroy', { id: item.id })"
                                        method="DELETE"
                                        as="li"
                                        class="
                                            flex items-center gap-2 cursor-pointer
                                            hover:bg-gray-50
                                        "
                                    >
                                        <span class="material-symbols-outlined text-lg"> delete </span>
                                        <span> Delete </span>
                                    </Link>
                                </ul>
                            </div>
                        </template>
                    </Dropdown>
                </li>
            </ul>
            <div v-else class="text-center mt-2">
                <p>Empty</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Dropdown from '@/Components/Dropdown.vue'
import { useGeneralStore } from '@/Stores/index'
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

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