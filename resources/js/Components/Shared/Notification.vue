<template>
    <div class="border bg-gray-50 hover:bg-white p-4 rounded-lg shadow flex flex-row space-x-3">
        <div class="">
            <span v-if="layoutStore.notification.type == 'success'"
                class="text-green-400 font-semibold"
            > Success </span>
            <span v-else class="text-red-600 font-semibold">Fail</span>
        </div>
        <div>
            {{ layoutStore.notification.message ?? 'Notification test message' }}
        </div>
        <div @click="layoutStore.showNotification = false" class="capitalize border-l border-gray-400 pl-3 cursor-pointer">
            close
        </div>
    </div>
</template>

<script setup>
import { useLayoutStore } from "@/Stores/index";
import { watchEffect } from "vue";

const layoutStore = useLayoutStore();

watchEffect(() => {
    setTimeout(() => {
        layoutStore.showNotification = false
    }, 3000)
    
})
</script>

<style lang="scss" scoped>

</style>