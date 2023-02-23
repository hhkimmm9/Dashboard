<template>
    <div>
        <div :class="[
            'flex flex-row items-center p-2',
            inputOnFocus ? 'bg-violet-300 rounded-md' : ''
        ]">
            <input type="text" id="input_block" @click="inputOnFocus = true"
                :value="modelValue"
                @input="clickHandler($event.target.value)"
                @blur="clickHandler($event.target.value)"
                @keydown.enter="clickHandler($event.target.value)"
                :class="[
                    'block w-full border-none text-violet-700 font-extrabold text-lg shadow-md',
                    inputOnFocus ? 'bg-white' : 'bg-pink-50'
                ]"
            />
            <!-- TODO: transition effect -->
            <button v-show="inputOnFocus" @click="clickHandler"
                class="
                    ml-3 text-violet-700 rounded-lg text-lg px-3 py-2 font-bold bg-yellow-200 ease-linear
                    hover:bg-yellow-300
            "> Enter </button>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'

// https://vuejs.org/guide/components/v-model.html
defineProps(['modelValue']);

const emit = defineEmits(['update:modelValue']);

const input = ref('');
const inputOnFocus = ref(false);

const clickHandler = (value) => {
    inputOnFocus.value = false

    // validation
    if (value.length > 0) {
        emit('update:modelValue', value);
    }
    // feedback
    else {
        // alert('no empty')
    }
};

</script>

<style lang="scss" scoped>

</style>