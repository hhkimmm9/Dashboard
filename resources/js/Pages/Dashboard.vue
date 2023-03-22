<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                <TodaysTasks :todays_tasks="todays_tasks.data" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import TextInput from '@/Components/TextInput.vue';
import { Head } from '@inertiajs/vue3';
import TodaysTasks from '@/Components/Dashboard/TodaysTask.vue'
import { useGeneralStore } from '@/Stores/index';
import { onMounted } from 'vue';


const props = defineProps(['todays_tasks']);

const generalStore = useGeneralStore();

onMounted(() => {
    if (props.todays_tasks.data.length > 0) generalStore.is_todays_tasks_created = true;
    else generalStore.is_todays_tasks_created = false;
})

</script>