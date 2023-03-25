<template>
    <div>
        <Head title="Note (index)" />
        <AuthenticatedLayout class="relative">
            <NotesLayout>
                <div class="bg-gray-300 p-2 text-center flex gap-2 items-center">
                    <span class="material-symbols-outlined text-2xl"> keyboard_arrow_left </span>
                    <p v-if="1" class="text-lg"> Expand </p>
                    <p></p>
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

const layoutStore = useLayoutStore()

</script>

<style lang="scss" scoped>

</style>