<script setup>
import Dock from '../../Components/Custom/Dock.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import SettingsLayout from '@/Layouts/SettingsLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from '@vue/reactivity';

const expanded = ref(true);

function toggleWidth() {
    expanded.value = false;
}
</script>

<script>
export default {
    layout: AuthenticatedLayout,
}
</script>


<template>
    <Head title="Dashboard" />

    <!-- <AuthenticatedLayout> -->
        <div class="relative">
            <div class="flex flex-row h-screen">
                <!-- transition -->
                <SettingsLayout @toggleWidth="toggleWidth" :expanded="expanded" :class="[expanded ? 'w-60' : 'w-20']"/>

                <!-- main -->
                <div class="bg-gray-200 p-6 flex-grow">
                    <div class="text-2xl font-bold">App Settings</div>

                    <div class="grid grid-cols-2 mt-8 gap-4">
                        <div class="border border-black rounded-lg p-3">
                            modules
                        </div>
                        <div class="border border-black rounded-lg p-3">
                            option #1
                        </div>
                        <div class="border border-black rounded-lg p-3">
                            option #2
                        </div>
                        <div class="border border-black rounded-lg p-3">
                            option #3
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    <!-- </AuthenticatedLayout> -->
</template>