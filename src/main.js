//Vue
import Vue from 'vue';
import App from './App.vue';

//Element UI
import ElementUI from 'element-ui';
import './style.scss'
Vue.use(ElementUI);

//Initialize App
new Vue({
    el: '#app',
    render: h => h(App)
})
