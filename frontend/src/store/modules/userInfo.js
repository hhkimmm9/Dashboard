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
    const fd = new FormData()

    fd.append(
      'profilePicture',
      userInfo.profilePicture,
      userInfo.profilePicture.name
    )
    fd.append('email', userInfo.email)
    fd.append('username', userInfo.username)
    fd.append('password', userInfo.password)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    await axios
      .post('http://localhost:5000/api/user/register', fd, config)
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

  async editProfile({ commit }, updatedProfile) {
    // console.log(updatedProfile)

    const fd = new FormData()

    fd.append(
      'updatedProfilePicture',
      updatedProfile.updatedProfilePicture,
      updatedProfile.updatedProfilePicture.name
    )
    fd.append('email', updatedProfile.email)
    fd.append('username', updatedProfile.username)
    fd.append('password', updatedProfile.password)

    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
        'Content-Type': 'multipart/form-data',
      },
    }

    await axios
      .put('http://localhost:5000/api/user/profile/edit', fd, config)
      .then((res) => {
        commit('updateProfile', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}

const mutations = {
  signedIn: (state, signStatus) => (state.signedIn = signStatus),
  setUserInfo: (state, userInfo) => (state.userInfo = userInfo),
  logout: (state) => ((state.signedIn = false), (state.userInfo = null)),
  updateProfile: (state, updatedProfile) => (state.userInfo = updatedProfile),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
