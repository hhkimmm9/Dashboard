<template>
    <div>
        <Head title="Note (index)" />
        <AuthenticatedLayout class="relative">
            <NotesLayout>
                <div class="h-full p-3 flex flex-col">
                    <input v-model="form.label" type="text"
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mb-4"
                    >
                    <QuillEditor v-model:content="form.content" :content="form.content" contentType="text" theme="snow"
                        @textChange="(text) => textChange(text)"
                    />
                </div>
            </NotesLayout>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import { Head, Link, useForm } from '@inertiajs/vue3';
import NotesLayout from '@/Layouts/NotesLayout.vue'
import { useGeneralStore } from '@/Stores';
import { storeToRefs } from 'pinia'
import { watch } from 'vue';

const generalStore = useGeneralStore()
const { save } = storeToRefs(generalStore)

const form = useForm({
    label: props.note.label,
    content: props.note.content
})

const props = defineProps([
    'note'
])

function textChange(text) {
    // 
}

watch(save, () => {
    form.patch(`/notes/${props.note.id}`, {
        onSuccess: () => {
            generalStore.reset()
        },
    })
})
</script>

<style lang="scss" scoped>

</style>