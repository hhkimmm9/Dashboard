<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <div
        class="relative flex items-top justify-center min-h-screen bg-zinc-100 dark:bg-zinc-800 sm:items-center sm:pt-0"
    >
        <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            <Link
                href="/about-myself"
                class="text-sm text-gray-700 dark:text-gray-500 underline mr-4"
                > About Myself
            </Link>

            <Link
                href="/about-this-website"
                class="text-sm text-gray-700 dark:text-gray-500 underline mr-4"
                > About This Website
            </Link>
            
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="text-sm text-gray-700 dark:text-gray-500 underline"
                >Dashboard</Link
            >

            <template v-else>
                <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</Link>

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                    >Register</Link
                >
            </template>
        </div>

        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 bg-white border-2 rounded-lg py-6 m-4 text-center h-full">
            <span class="m-4">Welcome to Dashboard</span>
        </div>
    </div>
</template>
