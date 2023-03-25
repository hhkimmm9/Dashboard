<template>
    <Head title="Block Six" />

    <AuthenticatedLayout class="relative">
        <div class="
            min-w-fit max-w-7xl mx-auto h-full bg-violet-100 py-10
            sm:px-6 lg:px-32
        ">
            <div class="flex justify-center">
                <div class="flex flex-col cursor-default text-center">
                    <!-- Import Google Font and utilize it within Tailwind -->
                    <p class="font-noto-sans-korean font-bold text-3xl text-purple-800">
                        시간을 선택하는 기술<br>블럭식스
                    </p>
                </div>
            </div>

            <div class="mt-8">
                <form @submit.prevent="createTasks">
                    <div class="flex justify-center text-center">
                        <div class="
                            bg-white border shadow rounded-lg flex flex-col
                            p-3 space-y-3 w-full mx-2
                            sm:w-2/3 sm:p-6 sm:mx-0
                        ">
                            <div class="border-2 p-3 rounded-lg shadow">
                                <div class="text-xl font-bold cursor-default my-2 text-violet-800">Morning 🕘</div>
                                <InputField v-model="tasks.slot1" />
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
                        <span :ref="isDisabled ? tippySubmitButton : ''">
                            <button type="submit" :disabled="isDisabled"
                                :class="[
                                    'px-4 py-2 rounded-lg text-violet-700 font-bold shadow-md text-xl',
                                    isDisabled ? 'bg-gray-200' : 'hover:text-2xl hover:bg-yellow-300 bg-yellow-200'
                                ]"
                            > Submit </button>
                        </span>
                    </div>
                </form>
            </div>
        </div>

        <!-- TODO: transition -->
        <div ref="tippyPurchaseBook"
            class="
                fixed right-4 bottom-4 w-52 cursor-pointer invisible
                hover:w-60
                lg:visible
            "
        >
            <a href="http://www.yes24.com/Product/Goods/104868817" target="_blank">
                <img src="/storage/img/blocksix_bookcover.jpeg" alt="">
            </a>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import InputField from '@/Components/BlockSix/InputField.vue'
import { useForm } from '@inertiajs/vue3';
import { computed, ref, watchEffect } from 'vue';
import { useTippy }from 'vue-tippy'

const isDisabled = ref(true);

const tasks = useForm({
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null,
    slot5: null,
    slot6: null,
    type: 'task'
});

function createTasks() {
    tasks.post('/blocksix', {
        onSuccess: () => tasks.reset(),
    });
};

watchEffect(() => {
    if (
        tasks.slot1 &&
        tasks.slot2 &&
        tasks.slot3 &&
        tasks.slot4 &&
        tasks.slot5 &&
        tasks.slot6
    ) {
        isDisabled.value = false;
    }
    
    else isDisabled.value = true;
});

// Tippy
const tippySubmitButton = ref()
useTippy(tippySubmitButton, {
    content: "Please fill the form above first 🙂",
})

const tippyPurchaseBook = ref()
useTippy(tippyPurchaseBook, {
    content: "Click to buy the book!",
    placement: 'top',
    animation: 'shift-away',
    theme: 'light',
    interactive: true,
    duration: 0,
})

</script>