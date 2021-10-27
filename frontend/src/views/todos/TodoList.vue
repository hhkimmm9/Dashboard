<template>
  <div class="container">
    <h1>Todo List</h1>

    <!-- TODO: make it available only if a user is signed in -->
    <Button
      @btn-click="toggleForm"
      :text="isSetToShow ? 'Hide Form' : 'Add Todo'"
      :color="isSetToShow ? 'orange' : 'green'"
    />
    <div id="todo-form" v-if="isSetToShow">
      <NewTodoForm />
    </div>

    <hr />

    <div id="todoList" v-for="item in allTodos" :key="item.id">
      <TodoCard
        @switchFlag="updateThenFetch"
        @deleteTodo="deleteTodo"
        :todoItem="item"
      />
    </div>
  </div>
</template>

<script>
import NewTodoForm from './NewTodoForm'
import TodoCard from './TodoCard'
import Button from '../../components/Button'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TodosList',

  components: {
    NewTodoForm,
    TodoCard,
    Button,
  },

  data() {
    return {
      isSetToShow: false,
    }
  },

  created() {
    if (localStorage.getItem('auth-token')) {
      this.fetchTodos()
    }
  },

  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),

    // to toggle the form for adding a new todo.
    toggleForm() {
      this.isSetToShow = !this.isSetToShow
    },

    // what other ways to rerender the list after update them?
    async updateThenFetch(target) {
      await this.updateTodo(target)
      this.fetchTodos()
    },
  },

  computed: mapGetters(['allTodos']),
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 10px;
}

form {
  padding: 10px;
}

button {
  margin: 10px;
}

#todoList {
  margin: 30px auto;
}
</style>
