<template>
    <div>
        <div class="bg-gray-300 p-2 text-center">
            <p class="font-bold text-2xl"> Folders </p>
        </div>
        <div class="h-48 md:h-60 overflow-y-auto">
            <ul>
                <li v-for="(item, index) in generalStore.folders" :key="index" class="flex justify-between items-center hover:bg-gray-200 p-2">
                    <span class="cursor-pointer"> {{ item.label }} </span>
                    <Dropdown>
                        <template v-slot:trigger>
                            <span class="material-symbols-outlined text-lg cursor-pointer"> more_horiz </span>
                        </template>
                        <template v-slot:content>
                            <div class="flex flex-col px-3 py-1">
                                <ul>
                                    <li class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-lg"> edit </span>
                                        <span> Edit </span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <span class="material-symbols-outlined text-lg"> delete </span>
                                        <span> Delete </span>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </Dropdown>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import Dropdown from '@/Components/Dropdown.vue'
import { useGeneralStore } from '@/Stores/index'

const generalStore = useGeneralStore()

</script>

<style lang="scss" scoped>

</style>