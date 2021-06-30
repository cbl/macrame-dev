import Buttons from './components/Buttons';
import Card from './components/Card';
import Toggle from './components/Toggle';

export default {
    install(useComponent) {
        
        // app.component('Badges', Badges);
        useComponent('buttons', Buttons);
        useComponent('card', Card);
        useComponent('toggle', Toggle);
    }
}