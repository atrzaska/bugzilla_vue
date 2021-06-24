import axios from 'axios'

const showToast = () =>
  window.Toast.error('Something went wrong, please try again.')

axios.interceptors.response.use(
  (res) => res,
  function (err) {
    if (err.response) {
      err.response.status === 500 && showToast()
    } else {
      showToast()
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

const withDefaults = (options = {}) =>
  Object.assign({}, defaultOptions(), options)

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
