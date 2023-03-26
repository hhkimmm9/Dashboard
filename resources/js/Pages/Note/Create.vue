<template>
    <div>
        <Head title="Note (Create)" />
        <AuthenticatedLayout class="relative">
            <NotesLayout>
                <div class="h-full p-3 flex flex-col gap-6">
                    create
                </div>
            </NotesLayout>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import NotesLayout from '@/Layouts/NotesLayout.vue'

</script>

<style lang="scss" scoped>

</style>