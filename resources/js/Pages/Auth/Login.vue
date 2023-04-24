<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { useGeneralStore } from '@/Stores/index'
import { router } from '@inertiajs/vue3'
import { useTippy } from 'vue-tippy';
import { ref } from '@vue/reactivity';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const generalStore = useGeneralStore();

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

function turnGuestModeOn() {
    generalStore.guestMode = true;
    router.get('/welcome');
};

// const guestModeNotice = ref();
// useTippy(guestModeNotice, {
//     content: "Limited features available only",
//     placement: 'top',
//     animation: 'shift-away',
//     theme: 'light',
//     duration: [300, 0],
// })
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />

                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="current-password"
                />

                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="flex justify-between mt-4">
                <div class="block">
                    <label class="flex items-center">
                        <Checkbox name="remember" v-model:checked="form.remember" />
                        <span class="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Forgot your password?
                </Link>
            </div>

            <div class="flex items-center justify-between mt-5">
                <SecondaryButton ref="guestModeNotice" @click="turnGuestModeOn"
                    class="whitespace-nowrap"
                    :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                >
                    Contiues as a guest
                </SecondaryButton>
                <div>
                    <Link href="/register">
                        <SecondaryButton class="ml-4 whitespace-nowrap"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                        > Register </SecondaryButton>
                    </Link>
    
    
                    <PrimaryButton class="ml-4 whitespace-nowrap" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Log in
                    </PrimaryButton>
                </div>

            </div>
        </form>
    </GuestLayout>
</template>
