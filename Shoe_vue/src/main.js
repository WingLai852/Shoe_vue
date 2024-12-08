import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importeer je router

const app = createApp(App);

app.use(router); // Gebruik Vue Router
app.mount('#app');