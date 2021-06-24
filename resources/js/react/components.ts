import Buttons from './components/Buttons';

export default {
    install(useComponent) {
        
        // app.component('Badges', Badges);
        useComponent('buttons', Buttons);
    }
}