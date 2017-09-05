import Login from './components/views/Login.vue';
import Logout from './components/views/Logout.vue';
import Home from './components/views/Home.vue';
import PageNotFound from './components/views/PageNotFound.vue';

import Dashboard from './components/views/Dashboard.vue';
import Cemeteries from './components/views/Cemeteries.vue';
import Customers from './components/views/Customers.vue';
import Orders from './components/views/Orders.vue';
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
        path: '/logout',
        name: 'logout',
        component: Logout,
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
                path: 'cemeteries',
                name: 'cemeteries',
                component: Cemeteries,
                meta: {
                    auth: true
                }
            },
            {
                path: 'customers',
                name: 'customers',
                component: Customers,
                meta: {
                    auth: true
                }
            },
            {
                path: 'orders',
                name: 'orders',
                component: Orders,
                meta: {
                    auth: true
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