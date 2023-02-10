<script setup>
import { Link } from '@inertiajs/vue3';
import { useLayoutStore } from '../../Stores/LayoutStore';

const layoutStore = useLayoutStore()

var apps = [
    {
        id: 1,
        name: "Dashboard",
        icon: "dashboard",
    },
    {
        id: 2,
        name: "BlockSix",
        icon: "grid_view",
    },
    {
        id: 3,
        name: "Calendar",
        icon: "calendar_month",
    },
    {
        id: 4,
        name: "Tetris",
        icon: "sports_esports",
    },
]
</script>

<template>

    <div class="relative" :class="[layoutStore.showDock ? 'hidden' : '']">
        <!-- modules -->
        <div class="w-full rounded-xl shadow-lg bg-zinc-300 p-4 flex flex-row justify-around">
            <span v-for="item in apps" :key="item.id"
                class="px-2 hover:shadow-2xl hover:bg-zinc-400 cursor-pointer py-1 space-y-1"
            >
                <Link href="#" :class="[route().current('dashboard') ? '' : '', 'flex flex-col']">
                    <span class="material-icons mx-auto text-3xl">{{ item.icon }}</span>
                    <div class="text-center"> {{ item.name }} </div>
                </Link >
            </span>
        </div>

        <div class="absolute bottom-1 w-full flex justify-center">
            <button @click="layoutStore.showDock = !layoutStore.showDock"
                class="material-icons opacity-90 cursor-pointer"
            > keyboard_double_arrow_down </button>
        </div>
    </div>
</template>