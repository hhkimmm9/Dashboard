import axios from 'axios'

const state = {
  todos: [],
}

const getters = {
  allTodos: (state) => state.todos,
}

const actions = {
  async fetchTodos({ commit }) {
    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }

    await axios
      .get('api/todos', config)
      .then((res) => commit('fetchTodos', res.data))
      .catch((err) => console.log('Login required'))
  },

  async addTodo({ commit }, newTodo) {
    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }

    await axios
      .post(
        'api/todos/add',
        {
          title: newTodo.title,
          description: newTodo.description,
          flag: newTodo.flag,
        },
        config
      )
      .then((res) => commit('addTodo', res.data))
      .catch((err) => alert('Please login with your account first.'))
  },

  async deleteTodo({ commit }, id) {
    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }

    await axios
      .delete(`api/todos/delete/${id}`, config)
      .then((res) => commit('deleteTodo', id))
      .catch((err) => alert(err))
  },

  async updateTodo({ commit }, target) {
    const config = {
      headers: {
        'auth-token': localStorage.getItem('auth-token'),
      },
    }

    await axios
      .patch(
        `api/todos/patch/${target._id}`,
        {
          flag: !target.flag,
        },
        config
      )
      .then((res) => commit('updateTodo', { ...target, flag: !target.flag }))
      .catch((err) => alert(err))
  },

  clearTodos({ commit }) {
    commit('clearTodos')
  },
}

const mutations = {
  fetchTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, newTodo) => state.todos.push(newTodo),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo._id !== id)),
  updateTodo: (state, updatedTodo) =>
    (state.todos = state.todos.filter((todo) =>
      todo._id === updatedTodo._id ? updatedTodo : todo
    )),
  clearTodos: (state) => (state.todos = []),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
