<template>
  <div class="container">
    <h1>Todo List</h1>
    <!-- TODO: only if logged in -->
    <Button
      @btn-click="toggleForm"
      :text="isSetToShow ? 'Hide Form' : 'Add Todo'"
      :color="isSetToShow ? 'orange' : 'green'"
    />
    <div id="todo-form" v-if="isSetToShow">
      <NewTodoForm />
    </div>

    <!-- <div v-for="item in allTodos" :key="item.id" id="todoList"> -->
    <div v-for="item in allTodos" :key="item.id" id="todoList">
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
  width: 100%;
}

button {
  padding: 3px 7px;
}

.form {
  margin: 20px;
}

#todoList {
  margin-top: 20px;
}
</style>
