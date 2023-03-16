<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center gap-2 w-full mr-3">
            <Checkbox :value="item" @update:checked="(val) => updateSubaskStatus(val)" />
            
            <p v-if="!showEditor">{{ subtask.description }}</p>
            <form v-else @submit.prevent="updateSubtask" class="flex w-full gap-2 items-center h-full">
                <TextInput
                    :value="subtask.description" @update:modelValue="form.updatedDescription = $event"
                    class="w-full p-1"
                />
                <button type="submit" class="text-sm border p-1.5 rounded hover:bg-gray-50">Submit</button>
            </form>
        </div>
        <Dropdown>
            <template v-slot:trigger>
                <span class="material-symbols-outlined opacity-80 cursor-pointer text-xl"> more_horiz </span>
            </template>
            <template v-slot:content>
                <div class="flex flex-col px-3 py-1">
                    <ul>
                        <!-- TODO: modal -->
                        <li @click="showEditor = true" class="hover:bg-gray-100 p-1 rounded text-sm">Edit</li>
                        <li @click="deleteSubtask" class="hover:bg-gray-100 p-1 rounded text-sm">Delete</li>
                    </ul>
                </div>
            </template>
        </Dropdown>
    </div>
</template>

<script setup>
import { ref } from "vue";
import TextInput from '@/Components/TextInput.vue'
import { router, useForm } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue'
import Dropdown from '@/Components/Dropdown.vue'

const props = defineProps([
    'subtask'
])

const showEditor = ref(false);

const form = useForm({
    updatedDescription: null,
})

const updateSubaskStatus = () => {
    console.log('updateSubaskStatus');
};

const updateSubtask = () => {
    form.patch(`${props.subtask.id}`);
};

const deleteSubtask = () => {
    router.visit(`${props.subtask.id}`, {
        method: 'delete',
    })
};

</script>

<style lang="scss" scoped>

</style>