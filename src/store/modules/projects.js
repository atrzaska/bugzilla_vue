const state = {
  projects: {
    collection: [{ name: 'abc', slug: 'abc-slug' }],
    total: 0,
    per: 10,
    page: 1,
  },
  loading: true,
}

const getters = {
  getProjects: (state) => state.projects,
}

const mutations = {
  setProjects: (state, projects) => {
    state.projects = projects
    state.loading = false
  },
}

const actions = {
  setProjects: (context, projects) => context.commit('setProjects', projects),
}

export default { state, getters, mutations, actions }
