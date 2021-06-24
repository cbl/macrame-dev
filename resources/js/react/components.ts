import Buttons from './components/Buttons';
import Card from './components/Card';

export default {
    install(useComponent) {
        
        // app.component('Badges', Badges);
        useComponent('buttons', Buttons);
        useComponent('card', Card);
    }
}