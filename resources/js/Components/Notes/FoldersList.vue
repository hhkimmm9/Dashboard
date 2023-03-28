<template>
    <div class="h-48 md:h-60 lg:h-full">
        <div class="bg-gray-300 p-2 text-center">
            <p class="font-bold text-2xl"> Folders </p>
        </div>
        <div class="h-full overflow-y-auto">
            <ul class="mt-2 px-2 space-y-2">
                <li @click="generalStore.selectedFolderId=0" class="hover:bg-gray-200 cursor-pointer flex items-center gap-2">
                    <span v-if="generalStore.selectedFolderId == 0" class="material-symbols-outlined text-lg"> folder_open </span>
                    <span v-else class="material-symbols-outlined text-lg"> folder </span>
                    <span> All folders </span>
                </li>
                <li v-for="(item, index) in generalStore.folders" :key="index">
                    <FolderItem :folder="item" />
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useGeneralStore } from '@/Stores/index'
import FolderItem from '@/Components/Notes/FolderItem.vue'

const generalStore = useGeneralStore()

</script>

<style lang="scss" scoped>

</style>