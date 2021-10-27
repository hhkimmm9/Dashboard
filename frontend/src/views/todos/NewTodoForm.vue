<template>
  <form @submit="onSubmit">
    <div class="input-group">
      <label for="form-title">Title</label>
      <input
        v-model="form.title"
        placeholder="Enter title..."
        id="form-title"
        type="text"
        required
      />
    </div>
    <div class="input-group">
      <label for="form-desc">Description</label>
      <input
        v-model="form.description"
        placeholder="Enter description..."
        id="form-dsec"
        type="text"
        reqired
      />
    </div>
    <div class="flag-section">
      <input v-model="form.flag" id="form-flag" type="checkbox" value="flag" />
      <label for="form-flag">Flag</label>
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
    onSubmit(event) {
      event.preventDefault()
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
.input-group {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 70%;
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
