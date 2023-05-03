<template>
    <div class="container max-w-7xl mx-auto h-full flex flex-row">
        <div class="grid grid-cols-12 w-full">

            <!-- Folders -->
            <div v-if="layoutStore.showSidePanels"
                class="
                    bg-gray-100 col-span-12
                    md:col-span-5
                    lg:col-span-3 lg:h-screen
                "
            >
                <FoldersList />
            </div>

            <!-- Notes -->
            <div v-if="layoutStore.showSidePanels"
                class="
                    bg-gray-200 col-span-12
                    md:col-span-7
                    lg:col-span-4 lg:h-screen
                "
            >
                <NotesList />
            </div>

            <!-- Top navbar of Notes -->
            <div :class="[
                'h-screen bg-gray-100 col-span-12',
                layoutStore.showSidePanels
                ? 'lg:col-span-5'
                : 'lg:col-span-12'
            ]">
                <div class="flex justify-between bg-gray-300 items-center p-2">
                    <!-- hide the side panels -->
                    <div v-if="layoutStore.showSidePanels == true" @click="layoutStore.showSidePanels = false"
                        class="flex gap-2 cursor-pointer items-center"
                    >
                        <span v-if="wideScreen" class="material-symbols-outlined text-2xl"> keyboard_arrow_left </span>
                        <span v-else class="material-symbols-outlined text-2xl"> keyboard_arrow_up </span>
                        <p class="text-lg"> Hide </p>
                    </div>
                    <!-- expand -->
                    <div v-else @click="layoutStore.showSidePanels = true"
                        class="flex gap-2 cursor-pointer items-center"
                    >
                        <span v-if="wideScreen" class="material-symbols-outlined text-2xl"> keyboard_arrow_right </span>
                        <span v-else class="material-symbols-outlined text-2xl"> keyboard_arrow_down </span>
                        <p class="text-lg"> Expand </p>
                    </div>

                    <Link v-if="!showEditor" href="notes/create" class="material-symbols-outlined cursor-pointer mr-1"> note_alt </Link>
                    <div v-else class="flex gap-2 mr-1">
                        <span @click="save" class="material-symbols-outlined cursor-pointer"> done </span>
                        <Link  href="/notes" class="material-symbols-outlined cursor-pointer"> close </Link>
                    </div>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link, router } from '@inertiajs/vue3';
import FoldersList from '@/Components/Notes/FoldersList.vue'
import NotesList from '@/Components/Notes/NotesList.vue'
import { useLayoutStore, useGeneralStore } from '@/Stores'
import { ref, computed, watchEffect } from 'vue';

const layoutStore = useLayoutStore()
const generalStore = useGeneralStore()

const wideScreen = computed(() => {
    return window.innerWidth > 820 ? true : false
})

// TODO: tippyCreateNote

var showEditor = ref(false);

watchEffect(() => {
    var componentName = router.page.component

    switch (componentName) {
        case 'Note/Create':
            showEditor.value = true
            break
        case 'Note/Edit':
            showEditor.value = true
            break
        case 'Note/Show':
            showEditor.value = false
            break
    }
})

function save() {
    generalStore.save = true
}

</script>

<style lang="scss" scoped>

</style>