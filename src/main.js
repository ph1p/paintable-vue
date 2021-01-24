import { createApp } from 'vue';
import App from './App.vue';
import Paintable from './plugin';

const app = createApp(App);

app.use(Paintable);

app.mount('#app');
