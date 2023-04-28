<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Modal from '@/Components/Modal.vue'
</script>

<template>
    <Head title="About This Website" />

    <div class="p-6">
        <div>
            <p class="text-3xl text-center"> This website is built with </p>

            <div class="flex flex-row gap-10 justify-center mt-5">
                <img src="/storage/img/build-stack-logos/laravel-logo.png" alt="" class="h-20">
                <img src="/storage/img/build-stack-logos/vue-logo.png" alt="" class="h-20">
                <img src="/storage/img/build-stack-logos/inertiajs-logo.png" alt="" class="h-20">
                <img src="/storage/img/build-stack-logos/pinia-logo.svg" alt="" class="h-20">
            </div>
        </div>

        <div class="text-center font-bold mt-20">
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

        <Modal :show="false" filepath="">
            
        </Modal>
    </div>

</template>

<style>

</style>