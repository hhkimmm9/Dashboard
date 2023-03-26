<template>
    <div>
        <Head title="Note (index)" />
        <AuthenticatedLayout class="relative">
            <NotesLayout>
                <div class="h-full p-3">
                    Welcome to Notes
                </div>
            </NotesLayout>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import NotesLayout from '@/Layouts/NotesLayout.vue'
import { useGeneralStore } from '@/Stores/index'
import { onMounted } from 'vue';

const props = defineProps([
    'notes',
    'folders'
])

const generalStore = useGeneralStore()

onMounted(() => {
    generalStore.notes = props.notes
    generalStore.folders = props.folders
})

</script>

<style lang="scss" scoped>

</style>