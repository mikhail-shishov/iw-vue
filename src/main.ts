import { createApp } from "vue";
import { createPinia } from "pinia";
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import i18n from './i18n/index.ts';
import { VBtn } from 'vuetify/components';
import VueEasyLightbox from 'vue-easy-lightbox'
import { Ripple } from 'vuetify/directives'; // vizuálny efekt, vyzerá ako Material Design

import App from "./App.vue";
import router from "./router";

const vuetify = createVuetify({
    components: {
        VBtn,
    },
    directives: {
        Ripple,
    }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify)
app.use(i18n)
app.use(VueEasyLightbox)
app.mount('#app')
