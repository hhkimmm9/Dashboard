<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="text-3xl font-bold uppercase">
                dashboard
            </div>

            <div class="mt-10 grid grid-cols-2 gap-3">
                <TodaysTasks :todays_tasks="todays_tasks" />
            </div>
        </div>
        
        <div class="absolute bottom-28 mx-auto left-0 right-0 px-20">
            <Dock />
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import TextInput from '@/Components/TextInput.vue';
import { Head } from '@inertiajs/vue3';
import TodaysTasks from '@/Components/Dashboard/TodaysTask.vue'

</script>