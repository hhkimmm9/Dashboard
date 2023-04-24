<template>
    <div class="border border-gray-200 bg-gray-100 hover:bg-gray-50 p-4 rounded-lg shadow flex flex-row space-x-3">
        <div class="">
            <span v-if="layoutStore.notification.icon_type == 'pass'" class="text-green-400 font-semibold">Success</span>
            <span v-else class="text-red-600 font-semibold">Fail</span>
        </div>
        <div>
            {{ layoutStore.notification.message ?? 'Notification test message' }}
        </div>
        <div @click="layoutStore.show_notification = false" class="capitalize border-l border-gray-400 pl-3 cursor-pointer">
            close
        </div>
    </div>
</template>

<script setup>
import { useLayoutStore } from "@/Stores/index";

const layoutStore = useLayoutStore();
</script>

<style lang="scss" scoped>

</style>