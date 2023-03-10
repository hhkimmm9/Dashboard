<template>
    <div>
        <Head title="BlockSix (show)" />

        <AuthenticatedLayout class="relative">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full py-10 flex flex-row">
                <div class="relative bg-white border border-gray-200 shadow w-2/3 mx-auto p-6 space-y-4 rounded-lg">
                    <div class="flex flex-row items-center space-x-2 border rounded-full px-2 py-1 w-min">
                        <span class="material-symbols-outlined">keyboard_backspace</span>
                        <Link href="/blocksix" as="span" class="text-sm whitespace-nowrap cursor-pointer"> Go Back </Link>
                    </div>
                    <div class="space-y-5">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <input type="checkbox" :checked="target_task.is_completed">
                                <span class="bg-yellow-200 px-2">{{ target_task.keyword }}</span>
                                <span :class="target_task.is_completed ? 'line-through' : ''">{{ target_task.description }}</span>
                            </div>
                            <div class="space-x-2">
                                <!-- TODO: tooltip & update notification list -->
                                <Link href="#" as="span">
                                    <span v-if="1" class="material-symbols-outlined text-lg cursor-pointer">alarm_off</span>
                                    <span v-else class="material-symbols-outlined text-lg cursor-pointer">alarm_on</span>
                                </Link>
                                <span class="material-symbols-outlined text-lg cursor-pointer">edit</span>
                            </div>
                        </div>
                        <div class="border border-gray-200 rounded p-4 h-60">
                            subtask tree
                        </div>
                        <div class="border border-gray-200 rounded p-4">
                            <h3 class="font-bold text-xl mb-3">Comments</h3>
                            <div class="space-y-4 h-60 overflow-y-auto">
                                <div v-for="(item, index) in comments" :key="index" class="border p-3 rounded">
                                    {{ item.content }}
                                    <hr class="my-2">
                                    <div class="flex justify-between items-center">
                                        <div class="text-xs text-gray-500"> {{ item.created_at }} </div>
                                        <div class="space-x-2">
                                            <!-- TODO: tooltip -->
                                            <span class="material-symbols-outlined text-lg cursor-pointer">edit</span>
                                            <span class="material-symbols-outlined text-lg cursor-pointer">delete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';


const props = defineProps([
    'target_task',
    'comments',
])

</script>

<style lang="scss" scoped>

</style>