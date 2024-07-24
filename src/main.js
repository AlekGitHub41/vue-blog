import {createApp} from 'vue'
import App from "./App.vue"
import components from "./components/UI/index.js"
import router from "./router/router.js";
import main_store from "./store/main_store.js";

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});
app.use(router);
app.use(main_store);
app.mount('#app');
