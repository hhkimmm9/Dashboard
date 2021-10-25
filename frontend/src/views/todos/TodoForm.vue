<template>
  <form @submit="onSubmit">
    <div class="form-group">
      <div class="input-group">
        <label for="form-title">Title</label>
        <input
          type="text"
          id="form-title"
          placeholder="Enter title..."
          v-model="form.title"
          required
        />
      </div>
      <div class="input-group">
        <label for="form-desc">Description</label>
        <input
          type="text"
          id="form-dsec"
          placeholder="Enter description..."
          v-model="form.description"
          reqired
        />
      </div>
      <div class="flag-group">
        <input
          type="checkbox"
          id="form-flag"
          name="form-flag"
          value="flag"
          v-model="form.flag"
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
  name: 'TodoForm',

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
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.flag-group > label {
  padding: 10px;
}
</style>
