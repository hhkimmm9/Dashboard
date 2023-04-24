<template>
    <div class="container relative">
        <img src="storage/img/ai.jpg" alt="" class="">

        <div class="bg-black/40 px-40 py-20 h-screen w-screen absolute top-0 ">
            <div>
                <div v-if="!activated" class="border p-5 h-5/6 text-center">
                    <h3 class="text-3xl text-white font-bold">Chat GPT</h3>
                </div>
                <div v-else class="border p-5 h-5/6 flex flex-col space-y-4">
                    <div v-for="item in items" :key="item.id"
                        class="border px-5 rounded-2xl bg-white w-min whitespace-nowrap"
                    >
                        {{ item.content }}
                    </div>
                </div>
            </div>
            <div class="border p-5">
                <form>
                    <div class="flex gap-5">
                        <input type="text" class="w-full">
                        <PrimaryButton>
                            Enter
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue'

const items = [
    {
        id: 1,
        content: 'hi 1',
    },
    {
        id: 1,
        content: 'hi 2',
    },
    {
        id: 1,
        content: 'hi 3',
    },
]

var activated = false


</script>

<style lang="scss" scoped>

</style>