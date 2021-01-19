import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
//import Event from './event';

//let app = createApp(App);
//app.config.globalProperties.emitter = Event;
//app.mount('#app');


const emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');


