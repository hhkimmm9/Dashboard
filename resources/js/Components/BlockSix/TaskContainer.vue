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
                        <span class="bg-yellow-200 text-violet-500 px-1"> {{ first_task.keyword }} </span>
                        <span :class="first_task.is_completed ? 'line-through' : ''">{{ first_task.description }}</span>
                    </Link>
                    <div class="flex gap-4 text-gray-600">
                        <div class="flex gap-1 items-center">
                            <span class="material-symbols-outlined"> exclamation </span>
                            {{ first_task_subtasks ? first_task_subtasks.length : 0 }}
                        </div>
                        <div class="flex gap-1 items-center">
                            <span class="material-symbols-outlined text-lg"> chat_bubble </span>
                            {{ first_task_comments ? first_task_comments.length : 0 }}
                        </div>
                    </div>
                </div>
            </div>
            <!-- second task -->
            <div class="flex flex-row items-center space-x-2">
                <Link :href="`blocksix/${second_task.id}`" method="PATCH" :data="{ is_completed: !second_task.is_completed }"
                    as="input" type="checkbox" :checked="second_task.is_completed"
                />
                <div class="w-full flex flex-row justify-between items-center">
                    <Link :href="`blocksix/${second_task.id}`" method="GET" as="div" class="flex flex-row space-x-1 cursor-pointer">
                        <div class="bg-yellow-200 text-violet-500 px-1"> {{ second_task.keyword }} </div>
                        <div :class="second_task.is_completed ? 'line-through' : ''">{{ second_task.description }}</div>
                    </Link>
                    <div class="flex gap-4 text-gray-600">
                        <div class="flex gap-1 items-center">
                            <span class="material-symbols-outlined"> exclamation </span>
                            {{ second_task_subtasks ? second_task_subtasks.length : 0 }}
                        </div>
                        <div class="flex gap-1 items-center">
                            <span class="material-symbols-outlined text-lg"> chat_bubble </span>
                            {{ second_task_comments ? second_task_comments.length : 0 }}
                        </div>
                    </div>
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
    'first_task', 'first_task_comments', 'first_task_subtasks',
    'second_task', 'second_task_comments', 'second_task_subtasks'
]);
</script>

<style lang="scss" scoped>

</style>