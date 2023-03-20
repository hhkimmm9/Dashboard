<template>
    <div class="space-y-2">
        <span class="text-xl">{{ label }}</span>
        <div class="space-y-2">
            <!-- first task -->
            <div class="flex flex-row items-center space-x-2">
                <Link :href="`blocksix/${first_task.id}`" method="PATCH" :data="{ is_completed: !first_task.is_completed }"
                    as="input" type="checkbox" :checked="first_task.is_completed"
                />
                <div class="w-full flex flex-row justify-between items-center">
                    <Link :href="`blocksix/${first_task.id}`" method="GET" as="div" class="flex flex-row space-x-1 cursor-pointer">
                        <div class="bg-yellow-200 text-violet-500 px-1"> {{ first_task.keyword }} </div>
                        <div :class="first_task.is_completed ? 'line-through' : ''">{{ first_task.description }}</div>
                    </Link>
                    <!-- <div class="flex flex-row space-x-2 cursor-pointer">
                        <span @click="prepareOpenQuickEditModal(first_task)" class="material-symbols-outlined text-xl opacity-50 hover:opacity-80">edit</span>
                        <span @click="prepareOpenCommentModal(first_task)" class="material-symbols-outlined text-xl opacity-50 hover:opacity-80">add_comment</span>
                    </div> -->
                </div>
            </div>
            <!-- second task -->
            <div class="flex flex-row items-center space-x-2">
                <Link :href="`blocksix/${second_task.id}`" method="PATCH" :data="{ is_completed: !second_task.is_completed }"
                    as="input" type="checkbox" :checked="second_task.is_completed"
                />
                <div class="w-full flex flex-row justify-between items-center">
                    <Link :href="`blocksix/${first_task.id}`" method="GET" as="div" class="flex flex-row space-x-1 cursor-pointer">
                        <div class="bg-yellow-200 text-violet-500 px-1"> {{ second_task.keyword }} </div>
                        <div :class="second_task.is_completed ? 'line-through' : ''">{{ second_task.description }}</div>
                    </Link>
                    <!-- <div class="flex flex-row space-x-2 cursor-pointer">
                        <span @click="prepareOpenQuickEditModal(second_task)" class="material-symbols-outlined text-xl opacity-50 hover:opacity-80">edit</span>
                        <span @click="prepareOpenCommentModal(second_task)" class="material-symbols-outlined text-xl opacity-50 hover:opacity-80">add_comment</span>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGeneralStore, useLayoutStore, } from '@/Stores/index'
import { Link } from '@inertiajs/vue3';

const layoutStore = useLayoutStore();
const generalStore = useGeneralStore();

const props = defineProps([
    'label',
    'first_task',
    'second_task'
]);

// const prepareOpenQuickEditModal = (task) => {
//     generalStore.modal_target_container = task;
//     layoutStore.open_quick_edit_modal = true
// };

// const prepareOpenCommentModal = (task) => {
//     generalStore.modal_target_container = task;
//     layoutStore.open_comment_modal = true
// };
</script>

<style lang="scss" scoped>

</style>