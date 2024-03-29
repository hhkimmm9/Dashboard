<script setup>
import { ref, computed } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import { useLayoutStore, } from '@/Stores/index'
import Dock from '@/Components/Shared/Dock.vue'
import Notification from '@/Components/Shared/Notification.vue'

const layoutStore = useLayoutStore();

const showingNavigationDropdown = ref(false);

const isOnBlockSix = computed(() => {
    if (location.pathname.includes('blocksix'))
        return true;
    else return false;
});
</script>

<template>
    <div>
        <div class="min-h-screen flex flex-col">
            <nav class="absolute top-0 z-10 w-full">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-end h-16">

                        <div class="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-7">
                            <!-- Home -->
                            <Link :href="route('dashboard')"
                                :class="[route().current('dashboard') ? '' : '',
                                    'flex flex-row space-x-1 items-center'
                                ]"
                            >
                                <span class="material-icons">home</span>
                                <span>Home</span>
                            </Link>

                            <!-- Profile -->
                            <Link :href="route('profile.edit')"
                                :class="[route().current('dashboard') ? '' : '',
                                    'flex flex-row space-x-1 items-center'
                                ]"
                            >
                                <span class="material-icons">person</span>
                                <span>Profile</span>
                            </Link>
                            
                            <!-- Settings -->
                            <Link :href="route('settings.index')"
                                :class="[route().current('dashboard') ? '' : '',
                                    'flex flex-row space-x-1 items-center'
                                ]"
                            >
                                <span class="material-icons">settings</span>
                                <span>Settings</span>
                            </Link>

                            <!-- Logout -->
                            <Link :href="route('logout')" method="post" as="button"
                                :class="[route().current('dashboard') ? '' : '',
                                    'flex flex-row space-x-1 items-center'
                                ]"
                            >
                                <span class="material-icons">logout</span>
                                <span>Log Out</span>
                            </Link>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button
                                @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div
                    :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
                    class="sm:hidden"
                >
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">
                                {{ $page.props.auth.user.name }}
                            </div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('profile.edit')"> Profile </ResponsiveNavLink>
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main class="relative mt-16">
                <slot />
            </main>

            <!-- Dock -->
            <div class="fixed bottom-10 w-full flex justify-center">
                <button @click="layoutStore.showDock = !layoutStore.showDock"
                    :class="[layoutStore.showDock ? '' : 'hidden',
                        'material-icons opacity-90 cursor-pointer'
                    ]"
                > keyboard_double_arrow_up </button>

                <Dock />
            </div>


            <Notification v-if="layoutStore.showNotification" class="fixed right-10 bottom-10" />
        </div>
    </div>
</template>
