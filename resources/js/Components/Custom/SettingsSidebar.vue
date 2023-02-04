<template>
  <div class="absolute right-0 top-0 bg-white w-1/3 h-full shadow-2xl p-8">
    <div @click="toggleShowSidebar()">닫아</div>

    <div class="mt-8 flex flex-col space-y-6">
        <Link
            :href="route('profile.edit')"
            class="text-2xl font-bold underline"
            >Profile</Link
        >
        <Link
            :href="route('dashboard')"
            class="text-2xl font-bold underline"
            >Modules</Link
        >
        <Link
            :href="route('dashboard')"
            class="text-2xl font-bold underline"
            >History</Link
        >
        <Link
            :href="route('dashboard')"
            class="text-2xl font-bold underline"
            >Language</Link
        >
    </div>
  </div>
</template>

<script>
import { Head, Link, useRemember, router, useForm, } from '@inertiajs/vue3';

export default {
    name: "SettingsSidebar",
    components: {
        Link,
    },
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {
        toggleShowSidebar() {
            useRemember({
                showSidebar: !this.showSidebar,
            });
        },
    },
    mounted() {
        console.log(router);
    }
}
</script>

<style>

</style>