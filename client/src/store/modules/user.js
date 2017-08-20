const state = {
    user: localStorage.getItem('token'),
    token: localStorage.getItem('user')
};

const mutations = {
    SET_TOKEN(state, data) {
        state.token = data;
        localStorage.setItem('token', data);
    },
    CLEAR_TOKEN(state) {
        state.token = null;
        localStorage.removeItem('token');
    },
    SET_USER(state, data) {
        state.user = data;
        localStorage.setItem('user', data);
    },
    CLEAR_USER(state, data) {
        state.user = null;
        localStorage.removeItem('user');
    }
};

const actions = {
    setToken: ({commit}, token) => {
        commit('SET_TOKEN', token);
    },
    clearToken: ({commit}) => {
        commit('CLEAR_TOKEN');
    },
    setUser: ({commit}, user) => {
        commit('SET_USER', user);
    },
    clearUser: ({commit}) => {
        commit('CLEAR_USER');
    }
};

const getters = {
    isAuthenicated: state => {
        return state.token != null && state.user != null;
    },
    getToken: state => {
        return state.token;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};