<template>
    <div class="flex justify-between items-center hover:bg-gray-100 px-3">
        <Link :href="route('notes.show', { id: note.id })" class="cursor-pointer truncate mr-5"> {{ note.label }} </Link>
        <Dropdown>
            <template v-slot:trigger>
                <span class="material-symbols-outlined text-lg cursor-pointer"> more_horiz </span>
            </template>
            <template v-slot:content>
                <div class="flex flex-col px-3 py-1">
                    <ul>
                        <Link
                            :href="route('notes.edit', { id: note.id })"
                            as="li"
                            class="
                                flex items-center gap-2 cursor-pointer
                                hover:bg-gray-50
                            "
                        >
                            <span class="material-symbols-outlined text-lg"> edit </span>
                            <span> Edit </span>
                        </Link>
                        <Link
                            :href="route('notes.destroy', { id: note.id })"
                            method="DELETE"
                            as="li"
                            class="
                                flex items-center gap-2 cursor-pointer
                                hover:bg-gray-50
                            "
                        >
                            <span class="material-symbols-outlined text-lg"> delete </span>
                            <span> Delete </span>
                        </Link>
                    </ul>
                </div>
            </template>
        </Dropdown>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue'

const props = defineProps(['note'])

</script>

<style lang="scss" scoped>

</style>