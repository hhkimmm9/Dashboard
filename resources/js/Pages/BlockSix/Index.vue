<template>
    <Head title="Block Six" />

    <AuthenticatedLayout>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-32 h-screen bg-violet-200 pt-20 space-y-14">
            <div class="flex justify-center">
                <p class="text-3xl font-extrabold border p-3 bg-violet-300 rounded-lg shadow-lg uppercase text-white"> Block Six </p>
            </div>

            <div class="flex justify-center text-center">
                <div class="bg-white border shadow w-2/3 p-10 flex flex-col space-y-4 rounded-lg">
                    <InputFields />
                </div>
            </div>

            <div class="flex justify-center">
                <button class="bg-yellow-300 hover:bg-yellow-400 p-3 rounded-lg text-violet-700 font-bold shadow-md text-xl">Submit</button>
            </div>
        </div>
        
        <div class="absolute bottom-28 mx-auto left-0 right-0 px-20">
            <Dock />
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import InputFields from '@/Components/BlockSix/InputFields.vue'
import { ref } from '@vue/reactivity'

</script>