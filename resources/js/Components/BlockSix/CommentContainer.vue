<template>
    <div>
        <p v-if="!showEditComment" class="w-full break-words"> {{ comment.content }} </p>
        <form v-else @submit.prevent="updateComment" class="flex gap-2 my-2 items-center">
            <TextInput v-model="updatedCommentForm.updatedContent" class="w-full py-1 px-2" />
            <button @click="showEditComment = false" class="border p-1 rounded"> cancel </button>
            <button type="submit" class="border p-1 rounded"> Submit </button>
        </form>
        <hr class="my-2">
        <div class="flex justify-between items-center">
            <div class="text-xs text-gray-500"> {{ createdAt }} </div>
            <div class="space-x-2">
                <!-- TODO: tooltip -->
                <span @click="showEditComment = true" class="material-symbols-outlined text-lg cursor-pointer"> edit </span>
                <span @click="deleteComment" class="material-symbols-outlined text-lg cursor-pointer"> delete </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import TextInput from '@/Components/TextInput.vue'
import { router, useForm } from "@inertiajs/vue3";

const props = defineProps([
    'comment',
]);

const updatedCommentForm = useForm({
    updatedContent: props.comment.content,
});

const updateComment = () => {
    updatedCommentForm.patch(`/comment/${props.comment.id}`, {
        onSuccess: () => updatedCommentForm.reset('updatedContent'),
    });

    showEditComment.value = false;
};

const deleteComment = () => {
    router.delete(`/comment/${props.comment.id}`);
};

const createdAt = computed(() => {
    let createdAt = new Date(props.comment.created_at);
    return createdAt.toUTCString();
});

const showEditComment = ref(false);
</script>

<style lang="scss" scoped>

</style>