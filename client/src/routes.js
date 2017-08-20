import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue'
import PageNotFound from './components/PageNotFound.vue'

export const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            auth: false
        }
    },
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            auth: true
        }
    },
    {
        path: '*',
        name: '404',
        component: PageNotFound,
        meta: {
            auth: false
        }
    }
];