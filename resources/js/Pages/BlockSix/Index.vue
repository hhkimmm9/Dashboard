<template>
    <div class="text-center flex justify-center">
        <div class="border shadow w-2/3 p-10 flex flex-col space-y-6">
            <div class="flex flex-row">
                <TextInput
                    id="block1"
                    type="text"
                    class="block w-full"
                    v-model="block1"
                />
                <span class="border-2 border-black p-2 ml-3">icon placeholder</span>
            </div>
            <div class="flex flex-row">
                <TextInput
                    id="block2"
                    type="text"
                    class="block w-full"
                    v-model="block2"
                />
                <span class="border-2 border-black p-2 ml-3">icon placeholder</span>
            </div>
            <div class="flex flex-row">
                <TextInput
                    id="block3"
                    type="text"
                    class="block w-full"
                    v-model="block3"
                />
                <span class="border-2 border-black p-2 ml-3">icon placeholder</span>
            </div>
            <div class="flex flex-row">
                <TextInput
                    id="block4"
                    type="text"
                    class="block w-full"
                    v-model="block4"
                />
                <span class="border-2 border-black p-2 ml-3">icon placeholder</span>
            </div>
            <div class="flex flex-row">
                <TextInput
                    id="block5"
                    type="text"
                    class="block w-full"
                    v-model="block5"
                />
                <span class="border-2 border-black p-2 ml-3">icon placeholder</span>
            </div>
            <div class="flex flex-row">
                <TextInput
                    id="block6"
                    type="text"
                    class="block w-full"
                    v-model="block6"
                />
                <span class="border-2 border-black p-2 ml-3">icon placeholder</span>
            </div>
        </div>
    </div>
</template>

<script>
import TextInput from '@/Components/TextInput.vue'
export default {
    name: 'Index',
    components: {
        TextInput,
    },
    data() {
        return {
            block1: "",
            block2: "",
            block3: "",
            block4: "",
            block5: "",
            block6: "",
        }
    },

}
</script>

<style>

</style>