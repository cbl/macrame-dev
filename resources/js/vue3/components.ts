import Badges from './components/Badges.vue';
import Card from './components/Card.vue';
import Buttons from './components/Buttons.vue';
import Dropdown from './components/Dropdown.vue';
import Sidebar from './components/Sidebar.vue';
import Toggle from './components/Toggle.vue';

export default {
    install(app) {
        app.component('Badges', Badges);
        app.component('Card', Card);
        app.component('Badges', Badges);
        app.component('Buttons', Buttons);
        app.component('Dropdown', Dropdown);
        app.component('Sidebar', Sidebar);
        app.component('Toggle', Toggle);
    }
}