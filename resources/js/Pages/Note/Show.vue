<template>
    <div>
        <Head title="Note (index)" />
        <AuthenticatedLayout class="relative">
            <NotesLayout>
                <div class="h-full p-3">
                    <div v-if="note" class="flex flex-col gap-4">
                        <div>
                            <h3 class="text-2xl font-bold"> {{ note.label }} </h3>
                            <div class="flex justify-between">
                                <p> {{ dateFormat }} </p>
                                <div class="flex gap-2">
                                    <Link :href="`/notes/${note.id}/edit`" class="material-symbols-outlined text-lg cursor-pointer"> edit </Link>
                                    <Link :href="`/notes/${note.id}`" method="DELETE" class="material-symbols-outlined text-lg cursor-pointer"> delete </Link>
                                </div>
                                
                            </div>
                        </div>

                        <hr class="border-t-2" />

                        <div class="">
                            <p> {{ note.content }} </p>
                        </div>
                    </div>

                    <div v-else class="">
                        <p class="text-3xl font-bold text-center mt-20"> Welcome to Notes </p>
                    </div>
                </div>
            </NotesLayout>
        </AuthenticatedLayout>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import NotesLayout from '@/Layouts/NotesLayout.vue'
import { computed } from 'vue';

const props = defineProps([
    'note'
])

const dateFormat = computed(() => {
    let createdAt = new Date(props.note.created_at);
    return createdAt.toUTCString();
})
</script>

<style lang="scss" scoped>

</style>

