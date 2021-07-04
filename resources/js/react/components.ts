import Buttons from './components/Buttons';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Dropdown from './components/Dropdown';
import RadioGroup from './components/RadioGroup';
import Toggle from './components/Toggle';
import Modals from './components/Modals';

export default {
    install(useComponent) {
        
        // app.component('Badges', Badges);
        useComponent('buttons', Buttons);
        useComponent('card', Card);
        useComponent('radio-group', RadioGroup);
        useComponent('toggle', Toggle);
        useComponent('checkbox', Checkbox);
        useComponent('dropdown', Dropdown);
        useComponent('dropdown', Dropdown);
        useComponent('modals', Modals);
    }
}