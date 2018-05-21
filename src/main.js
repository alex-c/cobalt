//Vue
import Vue from 'vue';
import App from './App.vue';

//Element UI
import ElementUI from 'element-ui';
import './theme.scss'
Vue.use(ElementUI);

//MDI
import 'mdi/css/materialdesignicons.min.css';

//Router
import router from './router';

//Initialize App
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
