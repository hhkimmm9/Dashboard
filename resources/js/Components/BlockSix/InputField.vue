<template>
    <div>
        <div :class="[
            'flex flex-row items-center p-2',
            (isKeywordOnFocus | isDescriptionOnFocus) ? 'bg-violet-300 rounded-md' : ''
        ]">
            <div class="flex flex-col w-full">
                <!-- input for keyword -->
                <div v-if="isKeywordEntered == false" :class="'w-full flex space-x-2 justify-center rounded'">
                    <input
                        v-model="keyword" type="text"
                        @focus="isKeywordOnFocus = true" @blur="isKeywordOnFocus = false"
                        @keydown.enter="isKeywordEntered = true"
                        placeholder="Please enter a keyword 😙"
                        class="
                            block w-full border-none text-violet-700 font-bold rounded
                            placeholder:opacity-50 placeholder:text-violet-700 placeholder:text-center
                            focus:ring-0
                            sm:placeholder:text-left
                        "
                    >
                    <button @click="isKeywordEntered = true" ref="tippyNext"
                        :class="[
                            'text-violet-700 rounded px-3 py-2 font-bold bg-yellow-200',
                            keyword.length > 0 ? 'visible' : 'hidden'
                        ]"
                    > Next </button>
                </div>

                <!-- after an user enters keyword -->
                <div v-else>
                    <div class="flex flex-row items-center space-x-2">
                        <!-- keyword in a yellow background box -->
                        <span @click="switchBlockType"
                            class="
                                border p-2 bg-yellow-200 rounded border-none cursor-default text-violet-600 font-bold w-1/4 truncate transition ease-out duration-200
                                hover:w-full
                            "
                        > {{ keyword }} </span>
                        <!-- input for description -->
                        <input
                            v-model="description" type="text"
                            @focus="isDescriptionOnFocus = true" @blur="buildInput()"
                            @keydown.enter="buildInput()"
                            placeholder="Please add a short description 📝"
                            class="
                                block w-full border-none text-violet-700 font-bold rounded bg-pink-50
                                placeholder:opacity-50 placeholder:text-violet-700
                                focus:ring-0
                            "
                            autofocus
                        />
                    </div>
                </div>
                <div v-show="showFeedback && !isDescriptionOnFocus" class="mt-1">
                    <p class="text-red-500 text-sm text-left">Oops, it looks like you forgot to put some description 😅</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { computed, onMounted, onUpdated, watch } from 'vue';
import { useTippy } from 'vue-tippy';

const emit = defineEmits(['update:modelValue']);

const isKeywordOnFocus = ref(false);
const isDescriptionOnFocus = ref(false);
const keyword = ref('');
const isKeywordEntered = ref(false);
const description = ref('');
const showFeedback = ref(false);

function buildInput() {
    isKeywordOnFocus.value = false
    isDescriptionOnFocus.value = false

    // validation
    if (keyword.value.length > 0 && description.value.length > 0) {
        emit('update:modelValue', keyword.value + '::' + description.value);
        showFeedback.value = false;
    }
    else if (description.value.length == 0) {
        showFeedback.value = true;
    }
};

function switchBlockType() {
    // core - red
    // general - yellow
    // rest - green
};

// Tippy
const tippyNext = ref();
useTippy(tippyNext, {
    content: "Click to add a short description 😗",
    placement: 'top',
    animation: 'shift-away',
    theme: 'light',
    duration: [300, 0],
})
</script>