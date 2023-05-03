<template>
    <div v-if="notes.length > 0" class="container border shadow p-6 rounded-lg">
        <div>
            <h3 class="text-xl border-b-2 border-gray-300 font-bold text-gray-700">Recently Updated Notes</h3>
            <ul class="mt-1">
                <li v-for="item in notes" :key="item.id">
                    <div class="flex flex-row justify-between cursor-pointer p-1 items-center
                        hover:bg-gray-50 hover:rounded
                    ">
                        <p class="text-lg">{{ item.label }}</p>
                        <p class="text-xs text-gray-500">{{ calculateDate(item.updated_at) }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps(['notes'])

function calculateDate(date) {
    // a day ago, 2 days ago, a few days ago, a week ago, ...
    return date
}

</script>

<style lang="scss" scoped>

</style>