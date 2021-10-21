<template>
  <div class="container">
    <h1>Todo List</h1>
    <!-- TODO: only if logged in -->
    <Button
      @btn-click="toggleForm"
      :text="isSetToShow ? 'Hide Form' : 'Add Todo'"
      :color="isSetToShow ? 'orange' : 'green'"
    />
    <div v-if="isSetToShow">
      <TodoForm />
    </div>

    <!-- <div v-for="item in allTodos" :key="item.id" id="todoList"> -->
    <div v-for="item in allTodos" :key="item.id" id="todoList">
      <Todo
        @switchUrgent="updateThenFetch"
        @deleteTodo="deleteTodo"
        :todoItem="item"
      />
    </div>
  </div>
</template>

<script>
import TodoForm from './TodoForm'
import Todo from './Todo'
import Button from '../../components/Button'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todos',

  components: {
    TodoForm,
    Todo,
    Button,
  },

  data() {
    return {
      isSetToShow: false,
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

  created() {
    if (localStorage.getItem('auth-token')) {
      this.fetchTodos()
    }
  },

  computed: mapGetters(['allTodos']),
}
</script>

<style scoped>
.container {
  width: 50%;
}

button {
  margin-top: 10px;
}

.form {
  margin: 20px;
}

#todoList {
  margin-top: 20px;
}
</style>
