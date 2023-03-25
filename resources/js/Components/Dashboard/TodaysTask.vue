<template>
    <div class="container border shadow p-6 rounded-lg">
        <div v-if="todays_tasks.length > 0">
            <Link :href="route('blocksix.index')" as="p"
                class="
                    text-xl font-bold cursor-pointer
                    hover:underline
                "
            > Today's tasks </Link>

            <div class="mt-2 truncate">
                <ul class="space-y-2 ml-1">
                    <li v-for="task in todays_tasks" :key="task.id"
                        class="flex flex-row gap-2 items-center"
                    >
                        <Checkbox value="" :checked="task.is_completed == 1 ? true : false" @update:checked="(val) => updateTask(val, task.id)" />
                        <Link :href="`/blocksix/${task.id}`" as="div" class="flex flex-row gap-2">
                            <p class="bg-yellow-200 px-1"> {{ task.keyword }}</p>

                            <p :class="['truncate  hover:underline cursor-pointer', task.is_completed ? 'line-through' : '']"> {{ task.description }} </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        <!-- when a user hasn't created a list of todays tasks yet -->
        <div v-else class="flex justify-center h-full items-center">
            <Link :href="route('blocksix.create')">
                <p class="text-xl font-bold hover:text-2xl ease-in duration-100 h-10 flex items-center"> Let's plan for today 📝</p>
            </Link>
        </div>
    </div>
</template>

<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue';

defineProps(['todays_tasks']);

const checkboxForm = useForm({
    is_completed: null,
})

const updateTask = (val, taskId) => {
    checkboxForm.is_completed = val;
    checkboxForm.patch(`/blocksix/${taskId}`);
};

</script>

<style lang="scss" scoped>

</style>