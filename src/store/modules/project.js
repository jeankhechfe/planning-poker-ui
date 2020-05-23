const state = {
    projects: []
};

const getters = {
    projects: (state) => state.projects
};

const actions = {
    setProjects({commit}, projects) {
        commit('setProjects', projects)
    },
    addProject({commit}, project) {
        commit('addProject', project)
    }
};

const mutations = {
    setProjects: (state, projects) => (state.projects = projects),
    addProject: (state, project) => (state.projects.push(project))
};

export default {
    state,
    getters,
    actions,
    mutations
}