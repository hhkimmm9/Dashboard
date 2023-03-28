<template>
    <div v-if="!showEditor" @click="generalStore.selectedFolderId=folder.id"
        class="flex justify-between items-center hover:bg-gray-200"
    >
        <div class="flex items-center gap-2 cursor-pointer truncate">
            <span v-if="generalStore.selectedFolderId==folder.id" class="material-symbols-outlined text-lg"> folder_open </span>
            <span v-else class="material-symbols-outlined text-lg"> folder </span>
            <p class="cursor-pointer truncate mr-5"> {{ folder.label }} </p>
        </div>
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
                            :href="route('notes.destroy', { id: folder.id })"
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
    <div v-else class="flex justify-between gap-2">
        <TextInput @update:modelValue="$event => form.folderName=$event" :value="folder.label" class="pl-2 py-1 w-full rounded-sm" />
        <div class="flex items-center">
            <span @click="updateFolderName(folder.id)" class="material-symbols-outlined cursor-pointer hover:shadow hover:bg-gray-200"> done </span>
            <span @click="showEditor = false" class="material-symbols-outlined cursor-pointer hover:shadow hover:bg-gray-200"> close </span> 
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue'
import TextInput from '@/Components/TextInput.vue'
import { useGeneralStore } from '@/Stores/index'

const props = defineProps(['folder'])

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