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
            <Link v-if="$page.props.auth.user" :href="route('dashboard')"
                class="text-sm text-gray-700 dark:text-gray-500 underline"
            > Dashboard </Link>

            <template v-else>
                <Link :href="route('login')"
                    class="text-sm text-gray-700 dark:text-gray-500 underline"
                > Log in </Link>

                <Link v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                > Register </Link>
            </template>
        </div>

        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 bg-white border-2 rounded-lg py-6 m-4 text-center h-full">
            <span class="m-4">
                <h1 class="text-3xl font-bold"> Welcome 😄 </h1>

                <div class="mt-10">
                    <p class="w-96">
                        <span class="font-bold text-2xl"> 🚧 Notice 🚧 </span> 
                        <br>
                        <span class="text-xl">I've been figuring out how to deploy this website onto my web server, and I just did today (Apr 20). Still need to work on some cleanup but it works. Cool!</span>
                    </p>
                </div>
                
                <div class="mt-10">
                    <Link href="/about-this-website" class="border p-2 rounded-lg hover:bg-gray-100"> About This Website </Link>
                </div>
            </span>
        </div>
    </div>
</template>
