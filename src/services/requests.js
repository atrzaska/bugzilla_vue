import store from '@/store'
import router from '@/router'
import API from '@/lib/api'

const clearToken = () => {
  window.localStorage.removeItem('authToken')
  router.push('/signin')
  API.clearCache('/me')
}

const refreshToken = async () => {
  if (!window.localStorage.getItem('authToken')) {
    return
  }

  API.get('/refresh_token')
    .then((res) => window.localStorage.setItem('authToken', res.data.token))
    .catch(clearToken)
}

const fetchCurrentUser = async () => API.get('/me')

const signIn = ({ email, password, rememberMe }) => {
  return API.post('/signin', { email, password, rememberMe }).then((res) => {
    const { token, user } = res.data
    window.localStorage.setItem('authToken', token)
    store.dispatch('setUser', user)
    router.push('/dashboard')
    API.clearCache('/me')
    return { token, user }
  })
}

const signUp = (user) =>
  API.post('/signup', user).then((res) => {
    router.push('/signup/success')
    return res
  })
const logout = () => API.post('/logout').then(clearToken).catch(clearToken)

const fetchProjects = (params, options = {}) =>
  API.get('/projects', Object.assign({ params }, options))
const fetchProject = (id) => API.get(`/projects/${id}`)
const createProject = (params) => API.post('/projects', params)
const updateProject = (id, params) => API.put(`/projects/${id}`, params)
const deleteProject = (id) => API.delete(`/projects/${id}`)
const fetchProjectBySlug = (slug) =>
  fetchProjects({ 'filter.slug': slug }).then((res) => res.data.collection[0])

const fetchStories = (params, options = {}) =>
  API.get('/stories', Object.assign({ params }, options))
const fetchStory = (id) => API.get(`/stories/${id}`)
const createStory = (params) => API.post('/stories', params)
const updateStory = (id, params) => API.put(`/stories/${id}`, params)
const deleteStory = (id) => API.delete(`/stories/${id}`)

const fetchComments = (params, options = {}) =>
  API.get('/stories', Object.assign({ params }, options))
const fetchComment = (id) => API.get(`/comments/${id}`)
const createComment = (params) => API.post('/comments', params)
const updateComment = (id, params) => API.put(`/comments/${id}`, params)
const deleteComment = (id) => API.delete(`/comments/${id}`)

const fetchTasks = (params, options = {}) =>
  API.get('/stories', Object.assign({ params }, options))
const fetchTask = (id) => API.get(`/tasks/${id}`)
const createTask = (params) => API.post('/tasks', params)
const updateTask = (id, params) => API.put(`/tasks/${id}`, params)
const deleteTask = (id) => API.delete(`/tasks/${id}`)

const fetchMembers = (params, options = {}) =>
  API.get('/stories', Object.assign({ params }, options))
const fetchMember = (id) => API.get(`/members/${id}`)
const createMember = (params) => API.post('/members', params)
const updateMember = (id, params) => API.put(`/members/${id}`, params)
const deleteMember = (id) => API.delete(`/members/${id}`)

export default {
  clearToken,
  refreshToken,
  fetchCurrentUser,
  signIn,
  signUp,
  logout,

  fetchProjects,
  fetchProject,
  createProject,
  updateProject,
  deleteProject,
  fetchProjectBySlug,

  fetchStories,
  fetchStory,
  updateStory,
  deleteStory,

  fetchComments,
  fetchComment,
  createComment,
  updateComment,
  deleteComment,

  fetchTasks,
  fetchTask,
  createTask,
  updateTask,
  deleteTask,

  fetchMembers,
  fetchMember,
  createMember,
  updateMember,
  deleteMember,
}
