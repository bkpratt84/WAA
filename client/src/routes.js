import Login from './components/views/Login.vue';
import Home from './components/views/Home.vue';
import PageNotFound from './components/views/PageNotFound.vue';

import Dashboard from './components/views/Dashboard.vue';
import Veterans from './components/views/Veterans.vue';

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
            },
            {
                path: 'veterans',
                name: 'veterans',
                component: Veterans,
                meta: {
                    auth: true
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