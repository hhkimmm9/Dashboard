<template>
    <div>
        <div class="bg-gray-300 p-2 text-center">
            <p class="font-bold text-2xl"> Folders </p>
        </div>
        <div class="h-48 md:h-60 overflow-y-auto">
            <ul>
                <li v-for="(item, index) in generalStore.folders" :key="index" class="mb-2">
                    <div v-if="!showEditor" class="flex justify-between  items-center hover:bg-gray-200 px-2">
                        <p class="cursor-pointer"> {{ item.label }} </p>
                        <Dropdown>
                            <template v-slot:trigger>
                                <span class="material-symbols-outlined text-lg cursor-pointer"> more_horiz </span>
                            </template>
                            <template v-slot:content>
                                <div class="flex flex-col px-3 py-1">
                                    <ul>
                                        <li 
                                            @click="showEditor=true"
                                            class="
                                                flex items-center gap-2 cursor-pointer
                                                hover:bg-gray-50
                                            "
                                        >
                                            <span class="material-symbols-outlined text-lg"> edit </span>
                                            <span> Edit </span>
                                        </li>
                                        <Link
                                            :href="route('notes.destroy', { id: item.id })"
                                            method="delete"
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
                    </div>
                    <div v-else class="flex justify-between ">
                        <TextInput @update:modelValue="$event => form.folderName=$event" :value="item.label" class="pl-2 w-full rounded-sm" />
                        <div class="flex items-center">
                            <span @click="updateFolderName(item.id)" class="material-symbols-outlined cursor-pointer hover:shadow hover:bg-gray-200"> done </span>
                            <span @click="showEditor = false" class="material-symbols-outlined cursor-pointer hover:shadow hover:bg-gray-200"> close </span> 
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue'
import { useGeneralStore } from '@/Stores/index'
import { ref } from 'vue';
import TextInput from '@/Components/TextInput.vue'

const generalStore = useGeneralStore()

const showEditor = ref(false)

const form = useForm({
    folderName: '',
})

function updateFolderName(id) {
    form.patch(route('notes.update', { id }), {
        onSuccess:() => {
            showEditor.value = false
        }
    })
}

</script>

<style lang="scss" scoped>

</style>