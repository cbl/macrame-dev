import Badges from './components/Badges.vue';
import Card from './components/Card.vue';
import Buttons from './components/Buttons.vue';
import Dropdown from './components/Dropdown.vue';
import Sidebar from './components/Sidebar.vue';
import Toggle from './components/Toggle.vue';
import RadioGroup from './components/RadioGroup.vue';
import Checkbox from './components/Checkbox.vue';
import CheckboxGroup from './components/CheckboxGroup.vue';
import Modals from './components/Modals.vue';

export default {
    install(app) {
        app.component('Badges', Badges);
        app.component('Card', Card);
        app.component('Badges', Badges);
        app.component('Buttons', Buttons);
        app.component('Dropdown', Dropdown);
        app.component('Sidebar', Sidebar);
        app.component('Toggle', Toggle);
        app.component('RadioGroup', RadioGroup);
        app.component('Checkbox', Checkbox);
        app.component('CheckboxGroup', CheckboxGroup);
        app.component('Modals', Modals);
    }
}