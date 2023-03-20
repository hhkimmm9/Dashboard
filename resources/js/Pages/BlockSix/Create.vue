<template>
    <Head title="Block Six" />

    <AuthenticatedLayout class="relative">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-full bg-violet-100 py-10">
            <div class="flex justify-center">
                <div class="flex flex-col cursor-default text-center">
                    <!-- Import Google Font and utilize it within Tailwind -->
                    <p class="font-noto-sans-korean font-bold text-3xl text-purple-800">
                        시간을 선택하는 기술<br>블럭식스
                    </p>
                </div>
            </div>

            <div class="mt-8">
                <form @submit.prevent="tasks.post('/modules/blocksix', tasks);">
                    <div class="flex justify-center text-center">
                        <div class="bg-white border shadow w-2/3 p-6 flex flex-col space-y-4 rounded-lg">
                            <div class="border-2 p-3 rounded-lg shadow">
                                <div class="text-xl font-bold cursor-default my-2 text-violet-800">Morning 🕘</div>
                                <InputField @update:modelValue="(keyword_and_description) => buildInput('slot1', keyword_and_description)" />
                                <InputField v-model="tasks.slot2" />
                            </div>
                            <div class="border-2 p-3 rounded-lg shadow">
                                <div class="text-xl font-bold cursor-default my-2 text-violet-800">Aternoon 🕛</div>
                                <InputField v-model="tasks.slot3" />
                                <InputField v-model="tasks.slot4" />
                            </div>
                            <div class="border-2 p-3 rounded-lg shadow">
                                <div class="text-xl font-bold cursor-default my-2 text-violet-800">Evening 🕕</div>
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
        <div ref="purchase_book" class="
            absolute right-4 bottom-4 w-52 cursor-pointer invisible
            hover:w-60
            lg:visible
        ">
            <a href="http://www.yes24.com/Product/Goods/104868817" target="_blank">
                <img src="/storage/img/blocksix_bookcover.jpeg" alt="">
            </a>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import InputField from '@/Components/BlockSix/InputField.vue'
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useTippy }from 'vue-tippy'

const tasks = useForm({
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null,
    slot5: null,
    slot6: null,
});

const buildInput = (whichSlot, keyword_and_description) => {
    // TODO
    if (whichSlot == 'slot1') tasks.slot1 = keyword_and_description;
    else if (whichSlot == 'slot2') tasks.slot2 = keyword_and_description;
    else if (whichSlot == 'slot3') tasks.slot3 = keyword_and_description;
    else if (whichSlot == 'slot4') tasks.slot4 = keyword_and_description;
    else if (whichSlot == 'slot5') tasks.slot5 = keyword_and_description;
    else if (whichSlot == 'slot6') tasks.slot6 = keyword_and_description;
}

// Tippy
const purchase_book = ref();
useTippy(purchase_book, {
    content: "Click to buy the book!",
    placement: 'top',
    animation: 'shift-away',
    theme: 'light',
    interactive: true,
    duration: 0,
})

</script>