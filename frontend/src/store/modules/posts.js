import axios from 'axios'

const state = {
  posts: [],
  postDetail: null,
}

const getters = {
  getPosts: (state) => state.posts,
  getPostDetail: (state) => state.postDetail,
}

const actions = {
  async fetchPosts({ commit }) {
    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }

    await axios
      .get('http://localhost:5000/api/post/', config)
      .then((res) => commit('setPosts', res.data))
      .catch((err) => alert(err))
  },

  async fetchPostDetail({ commit }, id) {
    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }

    await axios
      .get(`http://localhost:5000/api/post/detail/${id}`, config)
      .then((res) => {
        commit('setPostDetail', res.data[0])
      })
      .catch((err) => alert(err))
  },

  async addPost({ commit }, inPost) {
    const post = inPost.post
    const fd = new FormData()
    fd.append('image', post.selectedFile, post.selectedFile.name)
    fd.append('title', post.title)
    fd.append('price', post.price)
    fd.append('category', post.category)
    fd.append('description', post.description)

    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
        'Content-Type': 'multipart/form-data',
      },
    }

    await axios
      .post('http://localhost:5000/api/post/upload', fd, config)
      .then((res) => {
        commit('setNewPost', res.data)
      })
      .catch((err) => console.log(err))
  },

  async deletePost({ commit }, id) {
    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }

    await axios
      .delete(`http://localhost:5000/api/post/delete/${id}`, config)
      .then((res) => commit('setDeletedPosts', id))
      .catch((err) => alert(err))
  },
}

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  setPostDetail: (state, post) => (state.postDetail = post),
  setNewPost: (state, newPost) => state.posts.push(newPost),
  setDeletedPosts: (state, id) =>
    (state.posts = state.posts.filter((post) => post._id !== id)),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
