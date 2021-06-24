import { createApp, h } from 'vue';
import {
    App as InertiaApp,
    plugin as InertiaPlugin,
} from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { plugin as MacramePlugin } from '@macramejs/macrame-vue3';
import { plugin as MacrameAdminTheme, pages } from '@macramejs/admin-vue3';
import components from './components';

const el = document.getElementById('app');

const app = createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => {
                return pages[name] || require(`./Pages/${name}.vue`).default;
            },
        }),
})
    .use(InertiaPlugin)
    .use(MacramePlugin)
    .use(MacrameAdminTheme)
    .use(components);

app.mount(el);

InertiaProgress.init();
