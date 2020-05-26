const state = {
    estimations: []
};

const getters = {
    tasks: (state) => state.estimations
};

const actions = {
    setEstimations({commit}, estimations) {
        commit('setEstimations', estimations)
    },
    addEstimation({commit}, estimation) {
        commit('addEstimation', estimation)
    }
};

const mutations = {
    setEstimations: (state, estimations) => (state.estimations = estimations),
    addEstimation: (state, estimation) => (state.estimations.push(estimation))
};

export default {
    state,
    getters,
    actions,
    mutations
}