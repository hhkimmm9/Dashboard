<script setup>
import Dock from '../../Components/Custom/Dock.vue'
import Toggle from '../../Components/Custom/Toggle.vue'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import SettingsLayout from '@/Layouts/SettingsLayout.vue';
import { Head } from '@inertiajs/vue3';

let languages = [
    {
        id: 1,
        slug: 'en',
        label: 'English',
    },
    {
        id: 1,
        slug: 'kr',
        label: 'Korean',
    },
    {
        id: 1,
        slug: 'fr',
        label: 'French',
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
                    <div class="text-2xl font-bold">Language</div>

                    <div class="mt-8">
                        <ul>
                            <li v-for="item in languages" :key="item.id"
                                class=""
                            >
                                <Toggle :label="item.label" />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>