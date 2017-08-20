import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

Vue.use(Vuex);

// export default {
//     modules: {
//         user
//     }
// };

export default new Vuex.Store({
    modules: {
        user
    }
});