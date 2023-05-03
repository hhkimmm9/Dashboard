<template>
    <div>
        <Head title="Note (index)" />
        <AuthenticatedLayout class="relative">
            <NotesLayout>
                <div class="h-full mt-2 text-center">
                    Welcome to Notes
                </div>
            </NotesLayout>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import NProgress from 'nprogress'
import { Head, Link, router } from '@inertiajs/vue3';
import NotesLayout from '@/Layouts/NotesLayout.vue'
import { useGeneralStore } from '@/Stores/index'
import { watchEffect } from 'vue';

const props = defineProps([
    'notes',
    'folders'
])

router.on('start', () => NProgress.start())
router.on('finish', () => NProgress.done())

const generalStore = useGeneralStore()

watchEffect(() => {
    generalStore.selectedFolderId = 0
    generalStore.notes = props.notes
    generalStore.folders = props.folders   
})


</script>

<style lang="scss" scoped>

</style>