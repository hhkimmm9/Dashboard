<template>
    <!--  @close="onCloseModal" -->
    <Modal :show="layoutStore.open_quick_edit_modal">
        <div class="space-y-4 p-5">
            <!-- input fields -->
            <div class="flex flex-col space-y-2 border border-gray-200 rounded px-4 py-5 bg-gray-100">
                <label for="keyword"> Keyword </label>
                <input @input="event => update_task.keyword = event.target.value" :value="generalStore.modal_target_container.keyword" type="text"
                    class="border-none focus:ring-blue-500 focus:ring-2"
                >
            </div>
            <div class="flex flex-col space-y-2 border border-gray-200 rounded px-4 py-5 bg-gray-100">
                <label for="description"> Short Description </label>
                <input @input="event => update_task.description = event.target.value" :value="generalStore.modal_target_container.description" type="text"
                    class="border-none focus:ring-blue-500 focus:ring-2"
                >
            </div>

            <!-- cancel and update -->
            <div class="flex justify-end space-x-3">
                <button @click="onUpdate" class="bg-blue-400 border border-blue-300 px-3 py-2 rounded text-white font-bold hover:bg-blue-500 capitalize">
                    update
                </button>
                <button @click="onClose" class="border border-gray-200 px-3 py-2 rounded font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 capitalize">
                    cancel
                </button>
            </div>
        </div>
        
    </Modal>
</template>

<script setup>
import Modal from '@/Components/Modal.vue'
import { useGeneralStore, useLayoutStore, } from '@/Stores/index'
import { Link, useForm, } from '@inertiajs/vue3';
import { computed } from 'vue';

const generalStore = useGeneralStore();
const layoutStore = useLayoutStore();

const update_task = useForm({
    keyword: String,
    description: String,
});

const onUpdate = async () => {
    var res = await update_task.patch(`blocksix/${generalStore.modal_target_container.id}`);
    onClose();
};

const onClose = () => {
    generalStore.modal_target_container = null;

    layoutStore.open_quick_edit_modal = false;
};

</script>

<style lang="scss" scoped>

</style>