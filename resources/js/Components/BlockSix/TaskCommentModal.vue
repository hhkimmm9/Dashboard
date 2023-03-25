<template>
    <Modal :show="layoutStore.open_comment_modal">
        <div class="space-y-3 p-5">
            <div class="flex space-x-2">
                <div class="bg-yellow-200 px-2 text-violet-500 font-bold rounded-md">Keyword</div>
                <div>Short Description</div>
            </div>
            <div class="flex flex-row space-x-3">
                <input type="text" class="w-full rounded">
                <button class="border border-blue-200 bg-blue-400 text-white font-bold px-2 py-1 rounded hover:bg-blue-500">Submit</button>
            </div>
            <div class="border border-gray-100 bg-gray-50 px-5 py-5 rounded space-y-5 h-72 overflow-y-auto">
                <!-- TODO: layout -->
                <div class="flex flex-row space-x-4 items-center">
                    <div>
                        <div class="flex flex-row space-x-4">
                            <div class="flex flex-row items-center space-x-1">
                                <span class="material-symbols-outlined cursor-pointer">push_pin</span>
                                <span class="material-symbols-outlined opacity-50 hover:opacity-80 cursor-pointer">cancel</span>
                            </div>
                            <div class="border bg-white p-3 rounded w-full">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident molestiae facilis eligendi impedit, molestias, non quos excepturi minus obcaecati dolor iusto officia assumenda culpa quasi ea labore! Aut accusamus minus necessitatibus provident ducimus quia magni dolorum ut, nesciunt saepe architecto, nisi est neque dicta similique amet quidem cupiditate inventore.
                            </div>
                        </div>
                        <div class="text-end text-xs text-gray-500 mt-1">2023-03-05 어쩌고 저쩌고</div>
                    </div>
                </div>
                <div class="flex flex-row space-x-4 items-center">
                    <div>
                        <div class="flex flex-row space-x-4">
                            <div class="flex flex-row items-center space-x-1">
                                <span class="material-symbols-outlined cursor-pointer">push_pin</span>
                                <span class="material-symbols-outlined opacity-50 hover:opacity-80 cursor-pointer">cancel</span>
                            </div>
                            <div class="border bg-white p-3 rounded w-full">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident molestiae facilis eligendi impedit, molestias, non quos excepturi minus obcaecati dolor iusto officia assumenda culpa quasi ea labore! Aut accusamus minus necessitatibus provident ducimus quia magni dolorum ut, nesciunt saepe architecto, nisi est neque dicta similique amet quidem cupiditate inventore.
                            </div>
                        </div>
                        <div class="text-end text-xs text-gray-500 mt-1">2023-03-05 어쩌고 저쩌고</div>
                    </div>
                </div>
                
            </div>
            <div class="flex justify-end">
                <button @click="onCloseModal"
                    class="border border-gray-200 bg-gray-50 hover:bg-gray-200 px-2 py-1 rounded"
                > Close </button>
            </div>
        </div>
    </Modal>
</template>

<script setup>
import Modal from '@/Components/Modal.vue'
import { useGeneralStore, useLayoutStore, } from '@/Stores/index'

const layoutStore = useLayoutStore();
const generalStore = useGeneralStore();

const onCloseModal = () => {
    layoutStore.open_comment_modal = false;
    generalStore.modal_target_container = null;
};

</script>

<style lang="scss" scoped>

</style>