<template>
    <div class="h-48 md:h-60 lg:h-full">
        <div class="bg-gray-300 p-2 text-center">
            <p class="font-bold text-2xl"> Folders </p>
        </div>
        <div class="h-full overflow-y-auto">
            <ul class="mt-2 px-2 space-y-2">
                <!-- all folders -->
                <li @click="generalStore.selectedFolderId=0"
                    class="hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                >
                    <span v-if="generalStore.selectedFolderId == 0"
                        class="material-symbols-outlined text-lg"
                    > folder_open </span>
                    <span v-else
                        class="material-symbols-outlined text-lg"
                    > folder </span>
                    <span> All folders </span>
                </li>

                <!-- general folders -->
                <li v-for="item in generalStore.folders" :key="item.id"
                    @click="generalStore.selectedFolderId=item.id"
                > <FolderItem :folder="item" /> </li>

                <!-- createa a new folder -->
                <div @click="showModal=true"
                    class="hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                >
                    <span class="material-symbols-outlined text-lg"> create_new_folder </span>
                    Create a new folder
                </div>

                <!-- deleted folders -->
                <li @click="generalStore.selectedFolderId=-1"
                    class="hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                >
                    <span class="material-symbols-outlined text-lg"> delete </span>
                    Deleted folders
                </li>
            </ul>
        </div>

        <Modal :show="showModal" @close="showModal=false">
            <div class="p-10">
                <h2 class="text-center text-2xl font-bold">Create a new folder</h2>
                <form @submit.prevent="createFolder" class="mt-5">
                    <div>
                        <InputLabel value="Folder Name" class="" />
                        <TextInput v-model="form.label" class="w-full mt-2 p-2 border" />
                    </div>
                    <div class="mt-10 flex justify-end gap-5">
                        <SecondaryButton @click="showModal=false">Cancel</SecondaryButton>
                        <PrimaryButton>Create</PrimaryButton>
                    </div>
                </form>
            </div>
        </Modal>
    </div>
</template>

<script setup>
import { useGeneralStore } from '@/Stores/index'
import FolderItem from '@/Components/Notes/FolderItem.vue'
import Modal from '@/Components/Modal.vue'
import TextInput from '@/Components/TextInput.vue'
import { useForm } from "@inertiajs/vue3";
import InputLabel from '@/Components/InputLabel.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import { ref } from 'vue';

const generalStore = useGeneralStore()
const showModal = ref(false)

const form = useForm({
    is_folder: true,
    label: ""
})

function createFolder() {
    form.post('/notes', {
        onSuccess: () => {
            showModal.value = false
        }
    })
}

</script>

<style lang="scss" scoped>

</style>