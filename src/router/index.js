import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Pages
import Home from '../components/Home.vue';
import Guide from '../components/Guide.vue';
import Specification from '../components/Specification.vue';
import Tools from '../components/Tools.vue';
import Sandbox from '../components/Sandbox.vue';

//Set up
var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/guide',
            component: Guide
        },
        {
            path: '/specification',
            component: Specification
        },
        {
            path: '/tools',
            component: Tools
        },
        {
            path: '/sandbox',
            component: Sandbox
        }
    ]
});

//Export
export default router;
