import axios from 'axios'

const authToken = () => localStorage.getItem('authToken')

axios.interceptors.response.use(
  (res) => res,
  function (err) {
    if (err.response) {
      if (err.response.status === 500) {
        window.Toast.error('Something went wrong, please try again.')
      } else if (err.response.status === 404) {
        window.Toast.error('Resource not found.')
      } else if (err.response.status === 403) {
        window.Toast.error('You have no access to this resource.')
      }
    } else {
      window.Toast.error('Something went wrong, please try again.')
    }

    return Promise.reject(err)
  }
)

const defaultOptions = () => ({
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${authToken()}`,
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
})

const withDefaults = (options = {}) => ({ ...defaultOptions(), ...options })

const cache = new Map()

const cachedAxios = {
  get: async (url, options = {}) => {
    const { params } = options
    const cacheKey = JSON.stringify({ url, params })

    if (!options.refresh) {
      const cacheResult = cache.get(cacheKey)

      if (cacheResult) {
        return cacheResult
      }
    }

    const result = await axios.get(url, options)
    cache.set(cacheKey, result)

    return result
  },
}
const clearCache = (url, options = {}) => {
  const { params } = options
  const cacheKey = JSON.stringify({ url, params })

  return cache.delete(cacheKey)
}

const toFormData = (data) => {
  const formData = new FormData()

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value)
  }

  return formData
}

const withMultipart = (options) => ({
  ...options,
  baseURL: '/api',
  headers: {
    Authorization: `Bearer ${authToken()}`,
    'Content-Type': 'multipart/form-data',
  },
})

const API = {
  get: (url, options) => cachedAxios.get(url, withDefaults(options)),
  post: (url, data, options) => axios.post(url, data, withDefaults(options)),
  postMultipart: (url, data, options) =>
    axios.post(url, toFormData(data), withMultipart(options)),
  put: (url, data, options) => axios.put(url, data, withDefaults(options)),
  putMultipart: (url, data, options) =>
    axios.put(url, toFormData(data), withMultipart(options)),
  patch: (url, data, options) => axios.patch(url, data, withDefaults(options)),
  patchMultipart: (url, data, options) =>
    axios.patch(url, toFormData(data), withMultipart(options)),
  delete: (url, options) => axios.delete(url, withDefaults(options)),
  clearCache,
}

export default API
