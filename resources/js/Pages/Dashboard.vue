<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TextInput from '@/Components/TextInput.vue';
import Dock from '../Components/Custom/Dock.vue';
import { Head } from '@inertiajs/vue3';

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="py-12 relative h-screen">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="text-3xl font-bold uppercase">
                    dashboard
                </div>

                <div class="mt-10 grid grid-cols-2 gap-3">
                    <div v-for="item in 4" :key="item"
                        class="border-2 border-black rounded p-2 h-64"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
            
            <div class="absolute bottom-28 mx-auto left-0 right-0 px-20">
                <Dock />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
