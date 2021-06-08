import store from '@/store'
import router from '@/router'
import API from '@/lib/api'

const clearToken = () => {
  window.localStorage.removeItem('authToken')
  router.push('/signin')
}

const refreshToken = () => {
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
const fetchCurrentUser = () => {
  if (!window.localStorage.getItem('authToken')) {
    return
  }

  API.get('/me')
    .then((res) => store.dispatch('setUser', res.data))
    .catch(clearToken)
}

const signIn = (email, password) => {
  API.post('/signin', { email, password }).then((res) => {
    const { token, user } = res.data
    window.localStorage.setItem('authToken', token)
    store.dispatch('setUser', user)
    router.push('/dashboard')
    return { token, user }
  })
}

const logout = () => API.post('/logout').then(clearToken).catch(clearToken)

// const fetchProjects = ({ page, per = 10 }) => {
//   return API.get('/projects', { params: { page, per } })
//   .then((res) =>
//     store.dispatch('setProjects', res.data)
//   )
// }

const fetchProjects = (params) => API.get('/projects', { params })

export {
  clearToken,
  refreshToken,
  fetchCurrentUser,
  signIn,
  logout,
  fetchProjects,
}
