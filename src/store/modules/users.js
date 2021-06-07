const state = {
  currentUser: null,
}

const getters = {
  currentUser: (state) => state.currentUser,
}

const mutations = {
  userStatus: (state, user) => (state.currentUser = user),
}

const actions = {
  setUser: (context, user) => context.commit('userStatus', user),
}

export default { state, getters, mutations, actions }
