<template>
    <div>
        <Head title="BlockSix (show)" />

        <AuthenticatedLayout class="relative">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full py-10 flex flex-row">
                <div class="relative bg-white border border-gray-200 shadow w-2/3 mx-auto p-6 space-y-4 rounded-lg">

                    <!-- go back -->
                    <div>
                        <Link href="/blocksix" as="button"
                            class="text-sm whitespace-nowrap cursor-pointer items-center flex gap-2 border rounded-full px-2 py-1 w-min shadow-sm
                                hover:shadow-lg hover:bg-gray-50
                            "
                        >
                            <span class="material-symbols-outlined">keyboard_backspace</span>
                            <span class="">Go Back</span>
                        </Link>
                    </div>

                    <div class="space-y-5">
                        <!-- task -->
                        <div class="flex flex-row items-center justify-between">
                            <div class="basis-11/12 flex flex-row items-center gap-2 truncate">
                                <Checkbox :value="target_task.id" @update:checked="(val) => updateTaskStatus(val)"
                                    :checked="target_task.is_completed == 1 ? true : false"
                                />
                                <span class="bg-yellow-200 px-2"> {{ target_task.keyword }} </span>
                                <p :class="[target_task.is_completed ? 'line-through' : '', 'truncate']"> {{ target_task.description }} </p>
                            </div>

                            <!-- icons -->
                            <div class="basis-1/12 flex gap-2 whitespace-nowrap justify-end">
                                <!-- TODO: tooltip & update notification list -->
                                <Link href="#" as="div">
                                    <span v-if="1" class="material-symbols-outlined text-lg cursor-pointer">alarm_off</span>
                                    <span v-else class="material-symbols-outlined text-lg cursor-pointer">alarm_on</span>
                                </Link>
                                <Link :href="`${target_task.id}/edit`" as="div" class="material-symbols-outlined text-lg cursor-pointer">
                                    edit
                                </Link>
                            </div>
                        </div>

                        <!-- subtasks -->
                        <div class="border border-gray-200 rounded p-4 h-60 flex flex-col gap-2 overflow-y-auto">
                            <p class="font-bold text-xl">Subtask</p>
                            <SubtaskContainer v-for="item in subtasks" :key="item" :subtask="item" />

                            <!-- Add a new subtask section -->
                            <div class="border text-center py-1 rounded my-4">
                                <!-- TODO: modal -->
                                <span v-if="!addNewSubtask" @click="addNewSubtask = true" class="material-symbols-outlined pt-1 text-gray-400 hover:scale-125 hover:text-gray-600"> add_circle </span>
                                <form v-else @submit.prevent="createNewSubtask" class="flex gap-2 p-3 w-full">

                                    <TextInput v-model="newSubtask.description" class="p-2 w-full" />
                                    <button class="border p-1 rounded">Submit</button>
                                </form>
                            </div>
                        </div>

                        <!-- comments -->
                        <div class="border border-gray-200 rounded p-4 space-y-4">
                            <div class="flex justify-between">
                                <h3 class="font-bold text-xl">Comments</h3>
                                <span v-if="!showAddComment" @click="showAddComment = true" class="material-symbols-outlined mr-1 cursor-pointer"> add_circle </span>
                                <span v-else @click="showAddComment = false; newComment.reset();" class="material-symbols-outlined mr-1 cursor-pointer"> cancel </span>
                            </div>
                            <!-- showAddComment -->
                            <form @submit.prevent="addComment" v-if="showAddComment" class="border p-3 w-full flex gap-2">
                                <TextInput v-model="newComment.content" class="w-full pl-2" />
                                <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
                                <button type="submit" class="border p-1 rounded hover:bg-gray-50 hover:shadow-sm"> Submit </button>
                            </form>
                            <div class="space-y-4 h-60 overflow-y-auto">
                                <Comment v-for="(item, index) in comments" :key="index" class="border p-3 rounded" :comment="item" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue'
import SubtaskContainer from '@/Components/BlockSix/SubtaskContainer.vue';
import { ref } from 'vue';
import TextInput from '@/Components/TextInput.vue'
import Comment from '@/Components/BlockSix/CommentContainer.vue'

const props = defineProps([
    'target_task',
    'subtasks',
    'comments',
])

const addNewSubtask = ref(false);
const showAddComment = ref(false);

const form = useForm({
    is_completed: null,
});

const newSubtask = useForm({
    description: null,
    type: 'subtask',
    parent_id: props.target_task.id,
})

const newComment = useForm({
    task_id: props.target_task.id,
    content: "",
});

const createNewSubtask = () => {
    newSubtask.post('/blocksix', {
        onSuccess: () => newSubtask.reset('description'),
    });

    // addNewSubtask.value = false;
};

const updateTaskStatus = (val) => {
    form.is_completed = val;
    // form.is_completed = props.target_task.is_completed
    form.patch(`${props.target_task.id}`)
};

const addComment = () => {
    newComment.post('/comment', {
        onSuccess: () => newComment.reset('content'),
    });
};

</script>

<style lang="scss" scoped>

</style>