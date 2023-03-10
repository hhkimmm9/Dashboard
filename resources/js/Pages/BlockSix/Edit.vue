<template>
    <div>
        <Head title="BlockSix (show)" />

        <AuthenticatedLayout class="relative">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full py-10 flex flex-row">
                <div class="relative bg-white border border-gray-200 shadow w-2/3 mx-auto p-6 space-y-8 rounded-lg">
                    <!-- keyword and desc -->
                    <div class="space-y-6">
                        <div class="flex flex-col space-y-1">
                            <label for="keyword"><span class="bg-yellow-200 px-1">Keyword</span></label>
                            <input v-model="form.keyword" type="text" name="keyword">
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label for="keyword">Description</label>
                            <input v-model="form.description" type="text" name="description">
                        </div>
                    </div>
                    <!-- subtasks -->
                    <div>
                        <h3 class="text-xl font-semibold">Subtasks</h3>
                        <div class="border border-gray-200 p-4">
                            Tree
                        </div>
                    </div>

                    <div class="flex justify-center space-x-6">
                        <button class="border border-gray-200 p-3 rounded shadow-sm">Discard</button>
                        <button class="border border-blue-200 bg-blue-500 text-white font-bold p-3 rounded shadow-sm">Submit</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps([
    'target_task',
]);

const form = useForm({
    keyword: props.target_task.keyword,
    description: props.target_task.description,
});

</script>

<style lang="scss" scoped>

</style>