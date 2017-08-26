import Login from './components/Login.vue';
import Home from './components/Home.vue';
import Dashboard from './components/Dashboard/Dashboard.vue';
import PageNotFound from './components/PageNotFound.vue';

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
        name: 'home',
        component: Home,
        meta: {
            auth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard,
                meta: {
                    auth: true,
                    description: 'Overview'
                }
            }
        ]
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