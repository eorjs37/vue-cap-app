import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//fontawesome
import './utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Header from '@/components/Header.vue';

const app = createApp(App);

app.component('Header', Header);

//font-awesome
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');
