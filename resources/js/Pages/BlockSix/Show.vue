<template>
    <div>
        <Head title="BlockSix (show)" />

        <AuthenticatedLayout class="relative">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full py-10 flex flex-row">
                <div class="relative bg-white border border-gray-200 shadow w-2/3 mx-auto p-6 space-y-4 rounded-lg">

                    <!-- go back -->
                    <div>
                        <button @click="goBack" type="button"
                            class="text-sm whitespace-nowrap cursor-pointer items-center flex gap-2 border rounded-full px-3 w-min
                                hover:bg-gray-50
                            "
                        >
                            <span class="material-symbols-outlined text-lg">keyboard_backspace</span>
                            <span class="">Go Back</span>
                        </button>
                    </div>

                    <!-- task, subtasks, comments -->
                    <div class="space-y-5">
                        <!-- task -->
                        <div v-if="!showTaskEditor" class="flex flex-row items-center justify-between">

                            <div class="basis-11/12 flex flex-row items-center gap-2 truncate">
                                <Checkbox :value="target_task.id" @update:checked="(val) => updateTaskStatus(val)"
                                    :checked="target_task.is_completed == 1 ? true : false"
                                />

                                <p class="bg-yellow-200 px-2"> {{ target_task.keyword }} </p>
                                <p :class="[target_task.is_completed ? 'line-through' : '', 'truncate']"> {{ target_task.description }} </p>
                            </div>

                            <!-- icons -->
                            <div class="basis-1/12 flex gap-2 whitespace-nowrap justify-end">
                                <!-- TODO: tooltip & update notification list -->
                                <!-- <Link href="#" as="div">
                                    <span v-if="1" class="material-symbols-outlined text-lg cursor-pointer">alarm_off</span>
                                    <span v-else class="material-symbols-outlined text-lg cursor-pointer">alarm_on</span>
                                </Link> -->
                                <span @click="showTaskEditor = true" class="material-symbols-outlined text-lg cursor-pointer"> edit </span>
                            </div>
                        </div>

                        <form v-else @submit.prevent="updateTask" class="space-y-1">
                            <div class="flex flex-col w-full gap-2 items-center h-full">
                                <InputLabel value="Keyword" />
                                <TextInput v-model="taskForm.keyword" class="w-full p-1" />
                                <InputLabel value="Description" />
                                <TextInput v-model="taskForm.description" class="w-full p-1" />
                            </div>
                            <div class="flex w-full">
                                <button @click="showTaskEditor = false" class="text-sm border p-1.5 hover:bg-gray-50 basis-1/2"> Cancel </button>
                                <button type="submit" class="text-sm border p-1.5 hover:bg-gray-50 basis-1/2"> Submit </button>
                            </div>
                        </form>


                        <!-- subtasks -->
                        <div class="border border-gray-200 rounded p-4 h-60 flex flex-col gap-2 overflow-y-auto">
                            <div class="flex justify-between">
                                <h3 class="font-bold text-xl"> Subtask </h3>
                                <span v-if="!showAddSubtask" @click="showAddSubtask = true" class="material-symbols-outlined mr-1 cursor-pointer"> add_circle </span>
                                <span v-else @click="showAddSubtask = false; newSubtask.reset();" class="material-symbols-outlined mr-1 cursor-pointer"> cancel </span>
                            </div>
                            <form @submit.prevent="addSubtask" v-if="showAddSubtask" class="border p-3 w-full rounded">
                                <div class="flex gap-2 mt-2">
                                    <TextInput v-model="newSubtask.description" class="w-full pl-2" />
                                    <button type="submit" class="border p-1 rounded hover:bg-gray-50 hover:shadow-sm"> Submit </button>
                                </div>
                                <p v-if="errors" class="text-sm text-red-500 mt-2 ml-2"> {{ errors.description }} </p>
                            </form>
                            <SubtaskContainer v-for="item in subtasks" :key="item" :subtask="item" />
                        </div>

                        <!-- comments -->
                        <div class="border border-gray-200 rounded p-4 space-y-4">
                            <div class="flex justify-between">
                                <h3 class="font-bold text-xl">Comments</h3>
                                <span v-if="!showAddComment" @click="showAddComment = true" class="material-symbols-outlined mr-1 cursor-pointer"> add_circle </span>
                                <span v-else @click="showAddComment = false; newComment.reset();" class="material-symbols-outlined mr-1 cursor-pointer"> cancel </span>
                            </div>
                            <!-- showAddComment -->
                            <form @submit.prevent="addComment" v-if="showAddComment" class="border p-3 w-full rounded">
                                <div class="flex gap-2 mt-2">
                                    <TextInput v-model="newComment.content" class="w-full pl-2" />
                                    <button type="submit" class="border p-1 rounded hover:bg-gray-50 hover:shadow-sm"> Submit </button>
                                </div>
                                <p v-if="errors" class="text-sm text-red-500 mt-2 ml-2"> {{ errors.content }} </p>
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
import InputLabel from '@/Components/InputLabel.vue'

const props = defineProps([
    'target_task',
    'subtasks',
    'comments',
    'errors',
])

const showTaskEditor = ref(false);
const showAddSubtask = ref(false);
const showAddComment = ref(false);

const form = useForm({
    is_completed: null,
});

const taskForm = useForm({
    keyword: props.target_task.keyword,
    description: props.target_task.description,
})

const newSubtask = useForm({
    description: null,
    type: 'subtask',
    parent_id: props.target_task.id,
})

const newComment = useForm({
    task_id: props.target_task.id,
    content: "",
});

function updateTask() {
    taskForm.patch(`${props.target_task.id}`, {
        onSuccess: () => {
            showTaskEditor.value = false;
        },
    });
};

const addSubtask = () => {
    newSubtask.post('/blocksix', {
        onSuccess: () => newSubtask.reset('description'),
    });
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

function goBack() {
    history.back();
};

</script>

<style lang="scss" scoped>

</style>