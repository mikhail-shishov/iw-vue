import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VBtn } from 'vuetify/components';
import { Ripple } from 'vuetify/directives'; // vizuálny efekt, vyzerá ako Material Design

// Translations provided by Vuetify
import { pl, zhHans } from 'vuetify/locale'

// Your own translation file
// import sv from './i18n/vuetify/sv'

import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
    components: {
        VBtn,
    },
    directives: {
        Ripple,
    },
    locale: {
        locale: 'zhHans',
        fallback: 'sv',
        //   messages: { zhHans, pl, sv },
        messages: { zhHans, pl },
    },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify)
app.mount('#app')
