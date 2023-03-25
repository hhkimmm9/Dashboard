<template>
    <div>
        <div class="bg-gray-300 p-2 text-center">
            <p class="font-bold text-2xl"> Folders </p>
        </div>
        <div class="md:h-60 overflow-y-auto">
            <ul>
                <li v-for="(item, index) in folders" :key="index" class="flex justify-between items-center hover:bg-gray-200 p-2">
                    <span class="cursor-pointer"> {{ item.name }} </span>
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

var folders = [
    {
        id: 1,
        name: 'Folder 1'
    },
    {
        id: 2,
        name: 'Folder 2'
    },
    {
        id: 3,
        name: 'Folder 3'
    },
    {
        id: 4,
        name: 'Folder 4'
    },
]

</script>

<style lang="scss" scoped>

</style>