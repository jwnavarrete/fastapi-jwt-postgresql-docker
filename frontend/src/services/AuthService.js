const setToken = token => {
  window.localStorage.setItem('tarificador_token', token)
  window.localStorage.setItem('isLoggedIn', true)
}

const getToken = () => {
  return window.localStorage.getItem('tarificador_token')
}

const logout = () => {
  window.localStorage.removeItem('tarificador_token')
  window.localStorage.removeItem('isLoggedIn')
}

const isLoggedIn = () => {
  return window.localStorage.getItem('isLoggedIn')
}

export default { setToken, getToken, logout, isLoggedIn }
