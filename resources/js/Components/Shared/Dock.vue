<template>
    <div :class="['max-w-7xl flex flex-col mx-auto', layoutStore.showDock ? 'hidden' : '']">
        <!-- modules -->
        <div class="w-full rounded-xl shadow-lg bg-slate-50 p-4 flex flex-row justify-around">
            <span v-for="item in modules" :key="item.id"
                class="px-2 hover:shadow-2xl hover:bg-slate-200 cursor-pointer py-1 space-y-1"
            >
                <Link :href="route(item.url)" :class="[route().current('dashboard') ? '' : '', 'flex flex-col w-20']">
                    <span class="material-icons mx-auto text-3xl">{{ item.icon }}</span>
                    <div class="text-center"> {{ item.name }} </div>
                </Link >
            </span>
        </div>

        <div class="w-full flex justify-center mt-2">
            <button @click="layoutStore.showDock = !layoutStore.showDock"
                class="material-icons opacity-90 cursor-pointer"
            > keyboard_double_arrow_down </button>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { useLayoutStore } from '../../Stores/LayoutStore';
import { useGeneralStore } from '../../Stores/GeneralStore';
import { onMounted } from 'vue';

const layoutStore = useLayoutStore();
const generalStore = useGeneralStore();

var modules = [
    {
        id: 1,
        name: "Dashboard",
        icon: "dashboard",
        url: "dashboard",
    },
    {
        id: 2,
        name: "BlockSix",
        icon: "grid_view",
        url: generalStore.is_todays_tasks_created ? 'blocksix.index' : 'blocksix.create',
    },
    {
        id: 2,
        name: "Note",
        icon: "grid_view",
        url: 'note.index',
    },
]
</script>