<script setup>
import { Head, Link } from '@inertiajs/vue3';
</script>

<template>
    <Head title="About This Website" />

    <div class="p-6">
        <div class="text-center font-bold">
            <h1 class="text-3xl">Wireframe Design Sketch</h1>
            <div class="mt-8 flex flex-col gap-7">
                <div class="border p-5 rounded">
                    <h2 class="text-2xl mb-3"> Sitemap </h2>
                    <img src="/storage/img/wireframe.png" alt="" class="mx-auto">
                </div>
                <div class="border p-5 rounded">
                    <h2 class="text-2xl mb-3"> Dashboard </h2>
                    <img src="/storage/img/dashboard_home.png" alt="" class="mx-auto">
                </div>
                <div class="border p-5 rounded">
                    <h2 class="text-2xl mb-3"> Block Six </h2>
                    <img src="/storage/img/blocksix.png" alt="" class="mx-auto">
                </div>
                <div class="border p-5 rounded">
                    <h2 class="text-2xl mb-3"> Notes </h2>
                    <img src="/storage/img/notes_layout.png" alt="" class="mx-auto">
                </div>
            </div>
        </div>
        <div class="text-center font-bold mt-10">
            <h1 class="text-3xl">Figma Design Sketch</h1>
            <div class="mt-8 flex flex-col gap-7">
                <div class="border p-5 rounded">
                    <h2 class="text-2xl mb-3"> Dashboard </h2>
                    <img src="/storage/img/dashboard_home_figma.png" alt="" class="mx-auto">
                </div>
                <div class="border p-5 rounded">
                    <h2 class="text-2xl mb-3"> Block Six </h2>
                    <img src="/storage/img/blocksix_figma.png" alt="" class="mx-auto">
                </div>
                <div class="border p-5 rounded">
                    <h2 class="text-2xl mb-3"> Notes </h2>
                    <img src="/storage/img/notes_figma.png" alt="" class="mx-auto">
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>