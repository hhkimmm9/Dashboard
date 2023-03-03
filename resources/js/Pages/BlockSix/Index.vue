<template>
    <Head title="BlockSix (index)" />

    <AuthenticatedLayout class="relative">
        <div id="default-carousel" class="relative" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div v-for="(item, index) in 3" :key="index"
                    :id="`carousel-item-${index+1}`" class="hidden duration-700 ease-in-out" data-carousel-item="active"
                >
                    <!-- TODO: -->
                    <!-- <img src="https://dimg.donga.com/wps/NEWS/IMAGE/2021/07/06/107821577.2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> -->
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full bg-violet-100 py-10 flex justify-center">
                        <div class="bg-white border shadow w-2/3 p-10 flex flex-col space-y-4 rounded-lg">
                            <div>
                                <span class="text-2xl font-bold">Today</span>
                            </div>
                            <div>
                                <!-- morning -->
                                <div class="space-y-2">

                                    <!-- title container -->
                                    <div>
                                        <span class="text-lg">Morning</span>
                                    </div>

                                    <!-- checkbox container -->
                                    <div>
                                        <!-- v-for -->
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input type="checkbox" :checked="true">
                                            <p class="line-through">우동 먹고 싶다</p>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input type="checkbox" :checked="true">
                                            <p class="line-through">우동 먹고 싶다</p>
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-4">

                                <!-- afternoon -->
                                <div>
                                    <!-- title container -->
                                    <div>
                                        <span class="text-lg">Aternoon</span>
                                    </div>

                                    <!-- checkbox container -->
                                    <div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input type="checkbox" :checked="true">
                                            <p class="line-through">우동 먹고 싶다</p>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input type="checkbox" :checked="true">
                                            <p class="line-through">우동 먹고 싶다</p>
                                        </div>
                                    </div>
                                </div>

                                <hr class="my-4">

                                <!-- evening -->
                                <div>
                                    <!-- title container -->
                                    <div>
                                        <span class="text-lg">Evening</span>
                                    </div>

                                    <!-- checkbox container -->
                                    <div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input type="checkbox" :checked="true">
                                            <p class="line-through">우동 먹고 싶다</p>
                                        </div>
                                        <div class="flex flex-row space-x-2 items-center">
                                            <input type="checkbox" :checked="true">
                                            <p class="line-through">우동 먹고 싶다</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slider indicators -->
            <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button v-for="(item, index) in 3" :key="index"
                    :id="`carousel-indicator-${index+1}`" type="button" class="w-3 h-3 rounded-full" aria-current="true" :aria-label="`Slide ${index+1}`" :data-carousel-slide-to="index+1"
                ></button>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { Carousel, initCarousels, } from 'flowbite';
import { onMounted } from 'vue';

const props = defineProps(['tasks']);

onMounted(() => {
    initCarousels();
    console.log(props.tasks);
})
</script>

<style lang="scss" scoped>

</style>