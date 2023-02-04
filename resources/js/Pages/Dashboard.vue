<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TextInput from '@/Components/TextInput.vue';
import BlockSix from '@/Pages/BlockSix/BlockSix.vue';
import Calendar from '@/Pages/Calendar/Calendar.vue';
import Tetris from '@/Pages/Tetris/Tetris.vue';
import SettingsSideBar from '@/Components/Custom/SettingsSidebar.vue';
import { Head } from '@inertiajs/vue3';

let showDock = true;
let showSidebar = true;
let selectedModule = 'blocksix';


</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <!-- <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template> -->

        <div class="py-12 relative">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <BlockSix v-if="selectedModule == 'blocksix'" />
                <Calendar v-else-if="selectedModule == 'calendar'" />
                <Tetris v-else-if="selectedModule == 'tetris'" />

                <div v-if="showDock"
                    class="rounded-xl shadow-lg bg-blue-100 p-4 flex flex-row justify-around mt-10"
                >
                    <span v-for="(item,index) in 5" :key="index"
                        class="border shadow px-2 hover:shadow-lg cursor-pointer"
                    >{{ item }}</span>
                </div>
            </div>

            <SettingsSideBar v-if="showSidebar" />
        </div>


    </AuthenticatedLayout>
</template>
