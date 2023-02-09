<script setup>
import Dock from '../../Components/Custom/Dock.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import SettingsLayout from '@/Layouts/SettingsLayout.vue';
import { Head } from '@inertiajs/vue3';

defineProps([
    // 'history'
])

let history = [
    {
        id: 1,
        description: "Kim created something"
    },
    {
        id: 2,
        description: "Shelly read a bood"
    },
    {
        id: 3,
        description: "Eddie udpated his profile"
    },
    {
        id: 4,
        description: "Admin User deleted a file"
    },
]

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="relative">
            <div class="grid grid-cols-4">
                <SettingsLayout />

                <!-- main -->
                <div class="col-span-3 bg-gray-200 p-6">
                    <div class="text-2xl font-bold">History</div>

                    <div class="mt-8">
                        <ul>
                            <li v-for="item in history" :key="item.id"
                                class="mt-2 flex flex-row justify-between border border-black p-2 items-baseline"
                            >
                                <span class="text-lg">
                                    {{ item.description }}
                                </span>
                                <span class="text-sm">
                                    at 12:32 PM, Thursday, Feb 20, 2023
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>