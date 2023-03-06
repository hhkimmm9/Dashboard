<template>
    <Head title="BlockSix (index)" />

    <AuthenticatedLayout class="relative">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full py-10 flex flex-row">

            <div class="relative bg-white border border-gray-200 shadow w-2/3 mx-auto p-6 flex flex-col space-y-4 rounded-lg">
                <div class="font-bold text-2xl"> {{ date }} </div>
                <div>
                    <div class="space-y-2">
                        <div class="text-xl">Morning</div>
                        <div class="space-y-2">
                            <div class="flex flex-row items-center space-x-2">
                                <Link :href="`blocksix/${tasks.data[0].id}`" method="PATCH" :data="{ is_completed: !tasks.data[0].is_completed }">
                                    <input type="checkbox" :checked="tasks.data[0].is_completed">
                                </Link>
                                <div class="w-full flex flex-row justify-between items-center">
                                    <div class="flex flex-row space-x-1">
                                        <div class="bg-yellow-200 text-violet-500 px-1"> {{ tasks.data[0].keyword }} </div>
                                        <div :class="tasks.data[0].is_completed ? 'line-through' : ''">{{ tasks.data[0].description }}</div>
                                    </div>
                                    <div class="flex flex-row space-x-2 opacity-80 cursor-pointer">
                                        <span class="material-symbols-outlined text-xl">edit</span>
                                        <span class="material-symbols-outlined text-xl">add_comment</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row items-center space-x-2">
                                <Link :href="`blocksix/${tasks.data[1].id}`" method="PATCH" :data="{ is_completed: !tasks.data[1].is_completed }">
                                    <input type="checkbox" :checked="tasks.data[1].is_completed">
                                </Link>
                                <div class="flex flex-row space-x-1">
                                    <div class="bg-yellow-200 text-violet-500 px-1"> {{ tasks.data[1].keyword }} </div>
                                    <div :class="tasks.data[1].is_completed ? 'line-through' : ''">{{ tasks.data[1].description }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <hr class="my-4">

                    <div class="space-y-2">
                        <div class="text-xl">Afternoon</div>
                        <div class="space-y-2">
                            <div class="flex flex-row items-center space-x-2">
                                <Link :href="`blocksix/${tasks.data[2].id}`" method="PATCH" :data="{ is_completed: !tasks.data[2].is_completed }">
                                    <input type="checkbox" :checked="tasks.data[2].is_completed">
                                </Link>
                                <div class="flex flex-row space-x-1">
                                    <div class="bg-yellow-200 text-violet-500 px-1"> {{ tasks.data[2].keyword }} </div>
                                    <div :class="tasks.data[2].is_completed ? 'line-through' : ''">{{ tasks.data[2].description }}</div>
                                </div>
                            </div>
                            <div class="flex flex-row items-center space-x-2">
                                <Link :href="`blocksix/${tasks.data[3].id}`" method="PATCH" :data="{ is_completed: !tasks.data[3].is_completed }">
                                    <input type="checkbox" :checked="tasks.data[3].is_completed">
                                </Link>
                                <div class="flex flex-row space-x-1">
                                    <div class="bg-yellow-200 text-violet-500 px-1"> {{ tasks.data[3].keyword }} </div>
                                    <div :class="tasks.data[3].is_completed ? 'line-through' : ''">{{ tasks.data[3].description }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="my-4">

                    <div class="space-y-2">
                        <div class="text-xl">Evening</div>
                        <div class="space-y-2">
                            <div class="flex flex-row items-center space-x-2">
                                <Link :href="`blocksix/${tasks.data[4].id}`" method="PATCH" :data="{ is_completed: !tasks.data[4].is_completed }">
                                    <input type="checkbox" :checked="tasks.data[4].is_completed">
                                </Link>
                                <div class="flex flex-row space-x-1">
                                    <div class="bg-yellow-200 text-violet-500 px-1"> {{ tasks.data[4].keyword }} </div>
                                    <div :class="tasks.data[4].is_completed ? 'line-through' : ''">{{ tasks.data[4].description }}</div>
                                </div>
                            </div>
                            <div class="flex flex-row items-center space-x-2">
                                <Link :href="`blocksix/${tasks.data[5].id}`" method="PATCH" :data="{ is_completed: !tasks.data[5].is_completed }">
                                    <input type="checkbox" :checked="tasks.data[5].is_completed">
                                </Link>
                                <div class="flex flex-row space-x-1">
                                    <div class="bg-yellow-200 text-violet-500 px-1"> {{ tasks.data[5].keyword }} </div>
                                    <div :class="tasks.data[5].is_completed ? 'line-through' : ''">{{ tasks.data[5].description }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Link :href="tasks.next_page_url" :class="['absolute -left-10 top-48', tasks.next_page_url ? 'visible' : 'hidden']">
                    <button class="">
                        <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
                    </button>
                </Link>

                <Link :href="tasks.prev_page_url" :class="['absolute -right-10 top-48', tasks.prev_page_url ? 'visible' : 'hidden']">
                    <button class="">
                        <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
                    </button>
                </Link>
            </div>

        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { Carousel, initCarousels, } from 'flowbite';
import { computed, onMounted } from 'vue';

const props = defineProps(['tasks']);

const date = computed(() => {
    const date = new Date(props.tasks.data[0].created_at);
    return date.toUTCString();
});

onMounted(() => {
    initCarousels();
})
</script>

<style lang="scss" scoped>

</style>