<template>
    <div>
        <Head title="Note (Create)" />
        <AuthenticatedLayout class="relative">
            <NotesLayout>
                <div class="h-full p-3 flex flex-col">
                    <input v-model="form.title" type="text"
                        placeholder="Title..."
                        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mb-4"
                    >
                    <QuillEditor v-model:content="form.content" theme="snow"
                        @textChange="(text) => textChange(text)"
                        placeholder="Content..."
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
import { watch } from 'vue';

const generalStore = useGeneralStore()

const form = useForm({
    title: null,
    content: null
})

// https://vueup.github.io/vue-quill/api/events.html
function textChange(text) {
    // console.log(text)
}

</script>

<style lang="scss" scoped>

</style>