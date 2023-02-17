<template>
    <div>
        <div class="
                flex flex-row relative items-center p-2
                hover:bg-violet-300 hover:p-2 hover:rounded-md
            ">
            <TextInput id="input_block" type="text"
                class="
                    block w-full bg-pink-50 border-none h-12 text-violet-700 font-extrabold text-lg shadow-md
                    hover:bg-white
                "
                v-model="box1"
            />
            <button v-if="true" class="ml-3 text-violet-700 rounded-lg text-lg px-3 py-2 font-bold bg-yellow-200 hover:bg-yellow-300">
                Enter
            </button>
        </div>
        
    </div>
</template>

<script setup>
import TextInput from '@/Components/TextInput.vue'
import { ref } from '@vue/reactivity'


const box1 = ref("");
const box2 = ref("");
const box3 = ref("");
const box4 = ref("");
const box5 = ref("");
const box6 = ref("");

const clickHandler = () => {
    console.log('clicked');
    
};

</script>