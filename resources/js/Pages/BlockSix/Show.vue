<template>
    <div>
        <Head title="BlockSix (show)" />

        <AuthenticatedLayout class="relative">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full py-10 flex flex-row">
                <div class="relative bg-white border border-gray-200 shadow w-2/3 mx-auto p-6 space-y-4 rounded-lg">
                    <div class="flex flex-row items-center space-x-2 border rounded-full px-2 py-1 w-min">
                        <span class="material-symbols-outlined">keyboard_backspace</span>
                        <span class="text-sm whitespace-nowrap">Go Back</span>
                    </div>
                    <div>
                        <div class="flex">
                            <input type="checkbox">
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
])

</script>

<style lang="scss" scoped>

</style>