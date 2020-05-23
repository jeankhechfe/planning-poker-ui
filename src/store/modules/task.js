const state = {
    tasks: []
};

const getters = {
    tasks: (state) => state.tasks
};

const actions = {
    setTasks({commit}, tasks) {
        commit('setTasks', tasks)
    },
    addTask({commit}, task) {
        commit('addTask', task)
    }
};

const mutations = {
    setTasks: (state, tasks) => (state.tasks = tasks),
    addTask: (state, task) => (state.tasks.push(task))
};

export default {
    state,
    getters,
    actions,
    mutations
}