<template>
    <div :class="['max-w-7xl flex flex-col mx-auto', layoutStore.showDock ? 'hidden' : '']">
        <!-- modules -->
        <div class="w-full rounded-xl shadow-lg bg-gray-50 p-4 flex flex-row justify-around">
            <span v-for="(item, index) in modules" :key="index"
                class="
                    px-2 cursor-pointer py-1 space-y-1 h-16 rounded
                    hover:border hover:shadow-sm hover:bg-gray-100
                "
            >
                <Link :href="item.url" class="flex flex-col w-20">
                    <span class="material-icons mx-auto text-3xl">{{ item.icon }}</span>
                    <div class="text-center"> {{ item.name }} </div>
                </Link >
            </span>
        </div>

        <!-- down arrow -->
        <div class="w-full flex justify-center mt-2">
            <button @click="layoutStore.showDock = !layoutStore.showDock"
                class="material-icons opacity-90 cursor-pointer"
            > keyboard_double_arrow_down </button>
        </div>
    </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { useGeneralStore, useLayoutStore, } from '@/Stores/index'
import { computed, onMounted } from 'vue';

const layoutStore = useLayoutStore();
const generalStore = useGeneralStore();

const isTodaysTasksCreated = computed(() => {
    return generalStore.isTodaysTasksCreated ? '/blocksix' : '/blocksix/create';
});

var modules = [
    {
        name: 'Dashboard',
        icon: 'dashboard',
        url: '/dashboard',
    },
    {
        name: 'Block Six',
        icon: 'grid_view',
        url: isTodaysTasksCreated.value,
    },
    {
        name: 'Notes',
        icon: 'note_alt',
        url: '/notes',
    },
]

onMounted(() => {
    // console.log(route().current('dashboard'))
    
})

</script>