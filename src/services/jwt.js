const setToken = (val) => window.localStorage.setItem('authToken', val)

const getToken = () => window.localStorage.getItem('authToken')

export { setToken, getToken }
