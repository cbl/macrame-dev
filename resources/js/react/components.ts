import Buttons from './components/Buttons';
import Card from './components/Card';
import Checkbox from './components/Checkbox';
import Toggle from './components/Toggle';

export default {
    install(useComponent) {
        
        // app.component('Badges', Badges);
        useComponent('buttons', Buttons);
        useComponent('card', Card);
        useComponent('toggle', Toggle);
        useComponent('checkbox', Checkbox);
    }
}