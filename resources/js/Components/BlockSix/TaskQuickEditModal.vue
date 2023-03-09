<template>
    <Modal :show="layoutStore.open_quick_edit_modal">
        <div class="space-y-4 p-5">
            <div class="flex flex-col space-y-2 border border-gray-200 rounded px-4 py-5 bg-gray-100">
                <label for="keyword"> Keyword </label>
                <input type="text" :value="generalStore.modal_target_container.keyword" class="border-none focus:ring-blue-500 focus:ring-2">
            </div>
            <div class="flex flex-col space-y-2 border border-gray-200 rounded px-4 py-5 bg-gray-100">
                <label for="description"> Short Description </label>
                <input type="text" :value="generalStore.modal_target_container.description" class="border-none focus:ring-blue-500 focus:ring-2">
            </div>

            <div class="flex justify-end space-x-3">
                <button @click="onCloseModal" class="border border-gray-200 px-3 py-2 rounded font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 capitalize">
                    cancel
                </button>
                <button @click="updateTask" class="bg-blue-400 border border-blue-300 px-3 py-2 rounded text-white font-bold hover:bg-blue-500 capitalize">
                    update
                </button>
            </div>
        </div>
        
    </Modal>
</template>

<script setup>
import Modal from '@/Components/Modal.vue'
import { useGeneralStore, useLayoutStore, } from '@/Stores/index'

const layoutStore = useLayoutStore();
const generalStore = useGeneralStore();

const updateTask = () => {
    console.log('update task clicked!');
};

const onCloseModal = () => {
    layoutStore.open_quick_edit_modal = false;
    generalStore.modal_target_container = null;
};

</script>

<style lang="scss" scoped>

</style>