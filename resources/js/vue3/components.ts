import Badges from './components/Badges.vue';
import Buttons from './components/Buttons.vue';
import Dropdown from './components/Dropdown.vue';

export default {
    install(app) {
        app.component('Badges', Badges);
        app.component('Buttons', Buttons);
        app.component('Dropdown', Dropdown);
    }
}