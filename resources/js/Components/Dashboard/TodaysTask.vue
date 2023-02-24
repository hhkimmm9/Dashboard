<template>
    <div class="border shadow p-6 h-60">
        <div v-if="todays_tasks.length > 0">
            <p class="text-xl font-bold"> Today's tasks </p>
            <div class="mt-2">
                <ul>
                    <li v-for="task in todays_tasks" :key="task.id"
                        class="flex flex-row space-x-2 items-center"
                    >
                        <span>
                            <input type="checkbox" :checked="task.is_completed" @click="updateTasks"
                                :class="['w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
                                    task.is_completed ? 'line-through' : ''
                                ]"
                            >
                        </span>

                        <span>
                            {{ task.description }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- when a user hasn't created a list of todays tasks yet -->
        <div v-else class="flex justify-center h-full items-center">
            <Link :href="route('blocksix.create')">
                <p class="text-xl font-bold hover:text-2xl"> Let's plan for today 📝</p>
            </Link>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

defineProps(['todays_tasks']);

const updateTasks = () => {
    // 
};

</script>

<style lang="scss" scoped>

</style>