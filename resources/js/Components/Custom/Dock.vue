<script setup>
import { Link } from '@inertiajs/vue3';

var apps = [
    {
        id: 1,
        name: "Dashboard",
        url: ""
    },
    {
        id: 2,
        name: "BlockSix",
    },
    {
        id: 3,
        name: "Calendar",
    },
    {
        id: 4,
        name: "Tetris",
    },
]
</script>

<template>
    <div class="w-full rounded-xl shadow-lg bg-zinc-300 p-4 flex flex-row justify-around">
        <div v-for="item in apps" :key="item.id"
            class="px-2 hover:shadow-2xl hover:bg-zinc-400 cursor-pointer py-1 space-y-1"
        >
            <Link href="#" :class="[route().current('dashboard') ? '' : '']">
                <img src="https://images.squarespace-cdn.com/content/v1/5ab26f4ef2e6b166c6b17a79/f1e4d05b-da9b-453b-a53a-7254e96c7ecd/logo2.png" alt=""
                    class="w-10 mx-auto"
                >
                <div class="text-center"> {{ item.name }} </div>
            </Link >
        </div>
    </div>
</template>