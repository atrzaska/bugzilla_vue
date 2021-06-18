import store from '@/store'
import router from '@/router'
import API from '@/lib/api'

const clearToken = () => {
  window.localStorage.removeItem('authToken')
  router.push('/signin')
}

const refreshToken = async () => {
  if (!window.localStorage.getItem('authToken')) {
    return
  }

  API.get('/refresh_token')
    .then((res) => {
      const newToken = res.data.token
      window.localStorage.setItem('authToken', newToken)
    })
    .catch(clearToken)
}
const fetchCurrentUser = async () => {
  if (!window.localStorage.getItem('authToken')) {
    return
  }

  return API.get('/me').catch(clearToken)
}

const signIn = ({ email, password, rememberMe }) => {
  return API.post('/signin', { email, password, rememberMe }).then((res) => {
    const { token, user } = res.data
    window.localStorage.setItem('authToken', token)
    store.dispatch('setUser', user)
    router.push('/dashboard')
    return { token, user }
  })
}

const signUp = (user) =>
  API.post('/signup', user).then((res) => {
    router.push('/signup/success')
    return res
  })
const logout = () => API.post('/logout').then(clearToken).catch(clearToken)
const fetchProjects = (params) => API.get('/projects', { params })
const fetchProject = (id) => API.get(`/projects/${id}`)
const fetchProjectBySlug = (slug) =>
  fetchProjects({ 'filter.slug': slug }).then((res) => res.data.collection[0])
const fetchStories = (params, options = {}) =>
  API.get('/stories', Object.assign({ params }, options))
const fetchStory = (id) => API.get(`/stories/${id}`)
const updateStory = (id, params) => API.put(`/stories/${id}`, params)
const deleteStory = (id) => API.delete(`/stories/${id}`)

export default {
  clearToken,
  refreshToken,
  fetchCurrentUser,
  signIn,
  signUp,
  logout,
  fetchProjects,
  fetchProject,
  fetchProjectBySlug,
  fetchStories,
  fetchStory,
  updateStory,
  deleteStory,
}
