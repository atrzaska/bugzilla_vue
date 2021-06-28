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

const logout = () => API.post('/logout').then(clearToken).catch(clearToken)

const signIn = (params) => API.post('/signin', params)
const signUp = (user) => API.post('/signup', user)

const fetchCurrentUser = () => API.get('/me')
const updateCurrentUser = (params) => API.put('/me', params)
const deleteCurrerntUser = () => API.delete('/me')
const updateEmail = (params) => API.put('/me/email', params)
const updatePassword = (params) => API.put('/me/password', params)

const fetchProjects = (params, options = {}) =>
  API.get('/projects', { params, ...options })
const fetchProject = (id) => API.get(`/projects/${id}`)
const createProject = (params) => API.post('/projects', params)
const updateProject = (id, params) => API.put(`/projects/${id}`, params)
const deleteProject = (id) => API.delete(`/projects/${id}`)

const fetchStories = (params, options = {}) =>
  API.get('/stories', { params, ...options })
const fetchStory = (id) => API.get(`/stories/${id}`)
const createStory = (params) => API.post('/stories', params)
const updateStory = (id, params) => API.put(`/stories/${id}`, params)
const deleteStory = (id) => API.delete(`/stories/${id}`)

const fetchComments = (params, options = {}) =>
  API.get('/comments', { params, ...options })
const fetchComment = (id) => API.get(`/comments/${id}`)
const createComment = (params) => API.post('/comments', params)
const updateComment = (id, params) => API.put(`/comments/${id}`, params)
const deleteComment = (id) => API.delete(`/comments/${id}`)

const fetchTasks = (params, options = {}) =>
  API.get('/tasks', { params, ...options })
const fetchTask = (id) => API.get(`/tasks/${id}`)
const createTask = (params) => API.post('/tasks', params)
const updateTask = (id, params) => API.put(`/tasks/${id}`, params)
const deleteTask = (id) => API.delete(`/tasks/${id}`)

const fetchMembers = (params, options = {}) =>
  API.get('/members', { params, ...options })
const fetchMember = (id) => API.get(`/members/${id}`)
const createMember = (params) => API.post('/members', params)
const updateMember = (id, params) => API.put(`/members/${id}`, params)
const deleteMember = (id) => API.delete(`/members/${id}`)

const createInvite = (params) => API.post('/invites', params)
const createRecovery = (params) => API.post('/recover', params)
const createConfirmation = (params) => API.post('/confirm', params)
const fetchResetPassword = (id) => API.get(`/reset_password/${id}`)
const updateResetPassword = (id, params) =>
  API.put(`/reset_password/${id}`, params)

export default {
  clearToken,
  refreshToken,

  logout,
  signIn,
  signUp,
  fetchCurrentUser,
  updateCurrentUser,
  deleteCurrerntUser,
  updateEmail,
  updatePassword,

  fetchProjects,
  fetchProject,
  createProject,
  updateProject,
  deleteProject,

  fetchStories,
  fetchStory,
  createStory,
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

  createInvite,
  createRecovery,
  createConfirmation,

  fetchResetPassword,
  updateResetPassword,
}
