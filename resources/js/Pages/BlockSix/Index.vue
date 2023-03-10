<template>
    <div>
        <Head title="BlockSix (index)" />

        <AuthenticatedLayout class="relative">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full py-10 flex flex-row">

                <div class="relative bg-white border border-gray-200 shadow w-2/3 mx-auto p-6 flex flex-col space-y-4 rounded-lg">
                    <div class="font-bold text-2xl"> {{ date }} </div>
                    <div>
                        <TaskContainer label="Morning" :first_task="tasks.data[0]" :second_task="tasks.data[1]" />
                        <hr class="my-4">
                        <TaskContainer label="Afternoon" :first_task="tasks.data[2]" :second_task="tasks.data[3]" />
                        <hr class="my-4">
                        <TaskContainer label="Evening" :first_task="tasks.data[4]" :second_task="tasks.data[5]" />
                    </div>

                    <Link :href="tasks.next_page_url" :class="['absolute -left-10 top-48', tasks.next_page_url ? 'visible' : 'hidden']">
                        <button class="">
                            <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
                        </button>
                    </Link>

                    <Link :href="tasks.prev_page_url" :class="['absolute -right-10 top-48', tasks.prev_page_url ? 'visible' : 'hidden']">
                        <button class="">
                            <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
                        </button>
                    </Link>
                </div>
            </div>
        </AuthenticatedLayout>

        <TaskComment />
        <TaskQuickEdit />
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import { useTippy } from 'vue-tippy';
import TaskContainer from '@/Components/BlockSix/TaskContainer.vue';
import TaskComment from '@/Components/BlockSix/TaskCommentModal.vue'
import TaskQuickEdit from '@/Components/BlockSix/TaskQuickEditModal.vue'

const props = defineProps(['tasks']);

const date = computed(() => {
    const date = new Date(props.tasks.data[0].created_at);
    return date.toUTCString();
});

// Tippy
const edit = ref();
useTippy(edit, {
    content: "Edit the task",
    duration: 0
});

const add_comment = ref();
useTippy(add_comment, {
    content: "Leave a comment",
    duration: 0
})
</script>

<style lang="scss" scoped>

</style>