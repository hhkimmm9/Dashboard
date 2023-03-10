import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { createPinia } from 'pinia'

// tippy
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css'

// Layout
import AuthenticatedLayout from './Layouts/AuthenticatedLayout.vue';
import Dock from './Components/Shared/Dock.vue';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(createPinia())
            .use(VueTippy, {
                directive: 'tippy', // => v-tippy
                component: 'tippy', // => <tippy/>
                componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
                defaultProps: {
                    placement: 'auto-end',
                    allowHTML: true,
                }, // => Global default options * see all props
            })
            .component('AuthenticatedLayout', AuthenticatedLayout)
            .component('Dock', Dock)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
