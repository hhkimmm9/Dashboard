<template>
    <Head title="Block Six" />

    <AuthenticatedLayout class="relative">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full bg-violet-100 py-10">
            <div class="flex justify-center">
                <div class="flex flex-col font-bold text-3xl text-purple-800 cursor-default text-center font-noto-sans-korean-900">
                    <span>시간을 선택하는 기술</span>
                    <span>블럭식스</span>
                </div>
            </div>

            <div class="mt-8">
                <form @submit.prevent="tasks.post('/modules/blocksix', tasks);">
                    <div class="flex justify-center text-center">
                        <div class="bg-white border shadow w-2/3 p-10 flex flex-col space-y-4 rounded-lg">
                            <div class="border-2 p-3 rounded-lg shadow">
                                <div class="text-xl font-bold cursor-default my-2">Morning 🕘</div>
                                <InputField v-model="tasks.slot1" />
                                <InputField v-model="tasks.slot2" />
                            </div>
                            <div class="border-2 p-3 rounded-lg shadow">
                                <div class="text-xl font-bold cursor-default my-2">Aternoon 🕛</div>
                                <InputField v-model="tasks.slot3" />
                                <InputField v-model="tasks.slot4" />
                            </div>
                            <div class="border-2 p-3 rounded-lg shadow">
                                <div class="text-xl font-bold cursor-default my-2">Evening 🕕</div>
                                <InputField v-model="tasks.slot5" />
                                <InputField v-model="tasks.slot6" />
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center mt-10">
                        <button type="submit"
                            class="bg-yellow-200 hover:bg-yellow-300 px-4 py-2 rounded-lg text-violet-700 font-bold shadow-md text-xl"
                        > Set </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- TODO: transition -->
        <div class="
            absolute right-4 bottom-4 w-52 cursor-pointer invisible
            hover:w-60
            lg:visible
        ">
            <a href="http://www.yes24.com/Product/Goods/104868817" target="_blank">
                <img src="https://image.yes24.com/goods/104868817/XL" alt="">
            </a>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import InputField from '@/Components/BlockSix/InputField.vue'
import { useForm } from '@inertiajs/vue3';

const tasks = useForm({
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null,
    slot5: null,
    slot6: null,
});

</script>