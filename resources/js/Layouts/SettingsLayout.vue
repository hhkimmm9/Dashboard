<script setup>
import { Link, useRemember, router } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';

const props = defineProps([
    'expanded',
]);

const emit = defineEmits([
    'toggleWith'
]);

const toggleWidth = () => {
    props.expanded = false;

    // emit
    emit('toggleWidth', props.expanded);
};

onMounted(() => {
    

    const form = useRemember({
        first_name: "Harrison",
        last_name: "Kim",
    })


    console.log(router);
    router.remember({
        firstName: "Sol",
        lastName: "Chang",
    }, 'wife-name');
    console.log(router)
    console.log(router.restore('wife-name'))

    console.log(history);
    form.first_name = "Haesoo";
    console.log(history);
});

</script>

<template>
    <!-- sidebar -->
    <div class="flex flex-col">
        <div class="px-6 py-2">
            <span @click="toggleWidth"
                class="cursor-pointer"
            >Shrink</span>
            
        </div>

        <div class="flex-grow bg-gray-300 p-6">
            <ul class="space-y-3">
                <li class="cursor-pointer hover:underline hover:font-bold">
                    <Link :href="route('settings.index')"> App Settings </Link>
                </li>
                <li class="cursor-pointer hover:underline hover:font-bold">
                    <Link :href="route('settings.history')"> History </Link>
                </li>
                <li class="cursor-pointer hover:underline hover:font-bold">
                    <Link :href="route('settings.language')"> Language </Link>
                </li>
            </ul>
        </div>
    </div>
    

</template>