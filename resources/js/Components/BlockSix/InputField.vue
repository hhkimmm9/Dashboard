<template>
    <div>
        <div :class="[
            'flex flex-row items-center p-2 w-full',
            (is_keyword_input_activated | is_description_input_activated) ? 'bg-violet-300 rounded-md' : ''
        ]">
            <!-- input for keyword -->
            <div v-if="is_keyword_entered == false" :class="'w-full flex space-x-2 justify-center rounded'">
                <input type="text" v-model="keyword"
                    @focus="is_keyword_input_activated = true" @blur="is_keyword_input_activated = false"
                    @keydown.enter="is_keyword_entered = true"
                    class="
                        block w-full border-none text-violet-700 font-bold rounded
                        focus:ring-0
                        placeholder:opacity-50 placeholder:text-violet-700
                    "
                    placeholder="Please enter a keyword for this block 😙"
                >
                <button @click="is_keyword_entered = true" ref="next"
                    :class="['text-violet-700 rounded px-3 py-2 font-bold bg-yellow-200',
                        keyword.length > 0 ? 'visible' : 'hidden'
                    ]"
                > Next </button>
            </div>

            <!-- input for description -->
            <div v-else class="w-full">
                <div class="flex flex-row items-center space-x-2">
                    <span ref="keyword_container" @click="switchBlockType" class="border p-2 bg-yellow-200 rounded border-none cursor-default text-violet-600 font-bold w-1/4 truncate
                        hover:w-full transition ease-out duration-200
                    ">{{ keyword }}</span>
                    <input type="text"
                        @focus="is_description_input_activated = true" @blur="clickHandler($event.target.value)"
                        @keydown.enter="clickHandler($event.target.value)"
                        class="
                            block w-full border-none text-violet-700 font-bold rounded bg-pink-50
                            focus:ring-0
                            placeholder:opacity-50 placeholder:text-violet-700
                        "
                        placeholder="Please add a short description 📝"
                    />
                </div>

            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
// 이거 쓰는데마다 다 import 하기 싫어
import { useTippy } from 'vue-tippy';

const emit = defineEmits(['update:modelValue']);

const keyword_container = ref();
const keyword = ref('');
const is_keyword_entered = ref(false);
const is_keyword_input_activated = ref(false);
const is_description_input_activated = ref(false);

const clickHandler = (value) => {
    is_keyword_input_activated.value = false
    is_description_input_activated.value = false

    // validation
    if (keyword.value.length > 0 && value.length > 0) {
        emit('update:modelValue', keyword.value + '::' + value);
    }
    else if (value.length == 0) {
        // feedback
    }
};

const switchBlockType = () => {
    // core - red
    // general - yellow
    // rest - green
};

// Tippy
const next = ref();
useTippy(next, {
    content: "Click to add a short description 😗",
    placement: 'top',
    animation: 'shift-away',
    theme: 'light',
    duration: [300, 0],
})

</script>

<style lang="scss" scoped>

</style>