<template>
    <div>
        <Head title="Note (index)" />
        <AuthenticatedLayout class="relative">
            <NotesLayout>
                <!-- hide the side panels -->
                <div v-if="layoutStore.showSidePanels == true" @click="layoutStore.showSidePanels = false"
                    class="bg-gray-300 p-2 flex gap-2 items-center cursor-pointer"
                >
                    <span v-if="wideScreen" class="material-symbols-outlined text-2xl"> keyboard_arrow_left </span>
                    <span v-else class="material-symbols-outlined text-2xl"> keyboard_arrow_up </span>
                    <p class="text-lg"> Hide </p>
                </div>
                <!-- expand -->
                <div v-else @click="layoutStore.showSidePanels = true"
                    class="bg-gray-300 p-2 flex gap-2 items-center cursor-pointer"
                >
                    <span v-if="wideScreen" class="material-symbols-outlined text-2xl"> keyboard_arrow_right </span>
                    <span v-else class="material-symbols-outlined text-2xl"> keyboard_arrow_down </span>
                    <p class="text-lg"> Expand </p>
                </div>

                <div class="h-full p-3 flex flex-col gap-6">
                    <div class="container">
                        <p> title </p>
                        <div class="flex justify-between">
                            <p> 2023-03-23 </p>
                            <div>
                                icons
                            </div>
                            
                        </div>
                    </div>
                    <div class="container">
                        <div>
                            tags
                        </div>
                        <div>
                            content
                        </div>
                    </div>
                </div>
            </NotesLayout>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import NotesLayout from '@/Layouts/NotesLayout.vue'
import { useLayoutStore } from '@/Stores/index'
import { computed } from 'vue';

const layoutStore = useLayoutStore()

const wideScreen = computed(() => {
    return window.innerWidth > 820 ? true : false
})
</script>

<style lang="scss" scoped>

</style>