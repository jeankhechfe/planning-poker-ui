const state = {
    user: {}
};

const getters = {
    user: (state) => state.user
};

const actions = {
    setUser({commit}, user ) {
          commit('setUser', user)
    },
    removeUser({commit}) {
        commit('removeUser')
    }

};

const mutations = {
    setUser: (state, user) => (state.user = user),
    removeUser: (state) => (state.user = {})
};

export default {
    state,
    getters,
    actions,
    mutations
}