<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="max-w-7xl mx-auto px-3 lg:px-8">
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                <TodaysTasks :todays_tasks="todays_tasks.data" />
                <RecentlyUpdatedNotes :notes="recently_updated_notes" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import TodaysTasks from '@/Components/Dashboard/TodaysTask.vue'
import { useGeneralStore } from '@/Stores/index';
import { onMounted } from 'vue';
import RecentlyUpdatedNotes from '@/Components/Dashboard/RecentlyUpdatedNotes.vue'

const props = defineProps([
    'todays_tasks',
    'recently_updated_notes'
]);

const generalStore = useGeneralStore();

onMounted(() => {
    if (props.todays_tasks.data.length > 0) generalStore.isTodaysTasksCreated = true;
    else generalStore.isTodaysTasksCreated = false;
})

</script>