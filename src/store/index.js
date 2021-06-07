import { createStore } from 'vuex'

import users from './modules/users'
import projects from './modules/projects'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    projects,
  },
})
