import { render } from 'react-dom';
import { App } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { use } from '@macramejs/macrame-react';
import { plugin as AdminTheme, pages } from '@macramejs/admin-react';
import components from './components';

const el = document.getElementById('app');

render(
    <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={(name) => pages[name]}
    />,
    el
);

use(AdminTheme);
use(components);

InertiaProgress.init();
