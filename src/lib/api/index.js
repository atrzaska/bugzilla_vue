import axios from 'axios'

axios.interceptors.response.use(
  (res) => res,
  function (err) {
    if (err.response) {
      if (err.response.status === 500) {
        window.Toast.error('Something went wrong, please try again.')
      } else if (err.response.status === 403) {
        window.Toast.error('You have no access to this resource')
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
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
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

const API = {
  get: (url, options) => cachedAxios.get(url, withDefaults(options)),
  post: (url, data, options) => axios.post(url, data, withDefaults(options)),
  put: (url, data, options) => axios.put(url, data, withDefaults(options)),
  patch: (url, data, options) => axios.patch(url, data, withDefaults(options)),
  delete: (url, options) => axios.delete(url, withDefaults(options)),
  clearCache,
}

export default API
