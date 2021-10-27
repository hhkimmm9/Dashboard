import axios from 'axios'

const state = {
  signedIn: false,
  userInfo: null,
}

const getters = {
  getIsSignedIn: (state) => state.signedIn,
  getUserInfo: (state) => state.userInfo,
}

const actions = {
  async register({ commit }, userInfo) {
    await axios
      .post('http://localhost:5000/api/user/register', {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
      })
      .catch((err) => alert(err))
  },

  async login({ commit }, userInfo) {
    await axios
      .post('http://localhost:5000/api/user/login', {
        email: userInfo.email,
        password: userInfo.password,
      })
      .then((res) => {
        localStorage.setItem('auth-token', res.data.authToken)

        commit('signedIn', res.data.isSignedIn)
        commit('setUserInfo', res.data.userInfo)
      })
      .catch((error) => {
        // could be an error from the server side.
        alert('Invalid email or password. Please try again.')
      })
  },

  async logout({ commit }) {
    commit('logout')
  },
}

const mutations = {
  signedIn: (state, signStatus) => (state.signedIn = signStatus),
  setUserInfo: (state, userInfo) => (state.userInfo = userInfo),
  logout: (state) => ((state.signedIn = false), (state.userInfo = null)),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
