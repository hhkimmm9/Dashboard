<template>
  <form @submit="onSubmit">
    <div class="input-field-group">
      <div class="input-field">
        <label for="todo-title">Title</label>
        <input
          v-model="form.title"
          id="todo-title"
          placeholder="Enter title..."
          type="text"
          required
        />
      </div>
      <div class="input-field">
        <label for="todo-desc">Description</label>
        <input
          v-model="form.description"
          id="todo-dsec"
          placeholder="Enter description..."
          type="text"
          reqired
        />
      </div>
      <div class="flag-section">
        <input
          v-model="form.flag"
          id="form-flag"
          type="checkbox"
          value="flag"
        />
        <label for="form-flag">Flag</label>
      </div>
    </div>

    <input type="submit" value="Add todo" />
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NewTodoForm',

  data() {
    return {
      form: {
        title: '',
        description: '',
        flag: false,
      },
    }
  },

  methods: {
    ...mapActions(['addTodo']),

    //
    onSubmit(e) {
      e.preventDefault()
      // alert(JSON.stringify(this.form))
      this.addTodo({
        title: this.form.title,
        description: this.form.description,
        flag: this.form.flag,
      })

      this.form.title = ''
      this.form.description = ''
      this.form.flag = false
    },
  },
}
</script>

<style scoped>
form {
  margin: 10px;
}

.input-field-group {
  margin: 10px auto;
  width: 50%;
}

.input-field {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.flag-section {
  margin: 0 auto;
}

.flag-section > label {
  margin: 10px;
}

form > input {
  margin: 5px;
}
</style>
