<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Modal from '@/Components/Modal.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import { ref } from 'vue'

var viewSelector = ref('sketch')

</script>

<template>
    <Head title="About This Website" />

    <div class="p-6">
        <div>
            <p class="text-3xl text-center"> This website is built with </p>

            <div class="flex flex-row gap-10 justify-center mt-5 h-20">
                <img src="/storage/img/build-stack-logos/laravel-logo.png" alt="">
                <img src="/storage/img/build-stack-logos/vue-logo.png" alt="">
                <img src="/storage/img/build-stack-logos/inertiajs-logo.png" alt="">
                <img src="/storage/img/build-stack-logos/pinia-logo.svg" alt="">
            </div>
        </div>

        <div class="flex flex-col mx-auto max-w-6xl text-center mt-20">
            <p class="text-3xl"> How this website is built </p>
            <div class="flex gap-5 justify-center my-5">
                <SecondaryButton class="hover:bg-gray-100 hover:shadow-md" @click="viewSelector='sketch'"> Sketch </SecondaryButton>
                <SecondaryButton class="hover:bg-gray-100 hover:shadow-md" @click="viewSelector='figma'"> Figma </SecondaryButton>
            </div>

            <div v-if="viewSelector == 'sketch'">
                <div class="mt-8 flex flex-col gap-7">
                    <div class="border p-5 rounded-lg shadow-lg">
                        <h2 class="text-2xl mb-3"> Sitemap </h2>
                        <img src="/storage/img/wireframe.png" alt="" class="mx-auto">
                    </div>
                    <div class="border p-5 rounded-lg shadow-lg">
                        <h2 class="text-2xl mb-3"> Dashboard </h2>
                        <img src="/storage/img/dashboard_home.png" alt="" class="mx-auto">
                    </div>
                    <div class="border p-5 rounded-lg shadow-lg">
                        <h2 class="text-2xl mb-3"> Block Six </h2>
                        <img src="/storage/img/blocksix.png" alt="" class="mx-auto">
                    </div>
                    <div class="border p-5 rounded-lg shadow-lg">
                        <h2 class="text-2xl mb-3"> Notes </h2>
                        <img src="/storage/img/notes_layout.png" alt="" class="mx-auto">
                    </div>
                </div>
            </div>
            <div v-else-if="viewSelector == 'figma'">
                <div class="mt-8 flex flex-col gap-7">
                    <div class="border p-5 rounded-lg shadow-lg">
                        <h2 class="text-2xl mb-3"> Dashboard </h2>
                        <img src="/storage/img/dashboard_home_figma.png" alt="" class="mx-auto">
                    </div>
                    <div class="border p-5 rounded-lg shadow-lg">
                        <h2 class="text-2xl mb-3"> Block Six </h2>
                        <img src="/storage/img/blocksix_figma.png" alt="" class="mx-auto">
                    </div>
                    <div class="border p-5 rounded-lg shadow-lg">
                        <h2 class="text-2xl mb-3"> Notes </h2>
                        <img src="/storage/img/notes_figma.png" alt="" class="mx-auto">
                    </div>
                </div>
            </div>
        </div>

        <Modal :show="false" filepath="">
            
        </Modal>
    </div>

</template>

<style>

</style>