const state = {
    user: {},
    users: []
};

const getters = {
    user: (state) => state.user,
    users: (state) => state.users
};

const actions = {
    setUser({commit}, user ) {
          commit('setUser', user)
    },
    removeUser({commit}) {
        commit('removeUser')
    },
    setUsers({commit}, users) {
        commit('setUsers', users)
    },
};

const mutations = {
    setUser: (state, user) => (state.user = user),
    removeUser: (state) => (state.user = {}),
    setUsers: (state, users) => (state.users = users),
};

export default {
    state,
    getters,
    actions,
    mutations
}