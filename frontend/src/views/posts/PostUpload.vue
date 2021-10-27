<template>
  <div class="container">
    <h3>Post Ad</h3>

    <form @submit="onSubmit">
      <div class="input-field-group">
        <div class="input-field">
          <label for="post-title">Title</label>
          <input v-model="form.title" id="post-title" type="text" required />
        </div>
        <div class="input-field">
          <label for="post-price">Price</label>
          <input v-model="form.price" id="post-price" type="text" required />
        </div>
        <div class="input-field">
          <label for="post-category">Categories</label>
          <select v-model="form.category">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div class="input-field">
          <label for="post-desc">Description</label>
          <textarea
            v-model="form.description"
            id="post-desc"
            rows="4"
            required
          />
        </div>
      </div>

      <input type="submit" value="Add post" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PostUpload',

  data() {
    return {
      form: {
        title: '',
        price: null,
        category: null,
        description: '',
      },
    }
  },

  methods: {
    ...mapActions(['addPost']),

    onSubmit(event) {
      event.preventDefault()

      this.addPost({
        // fileInfo: this.fileInfo,
        form: this.form,
      })

      this.$router.replace('/post')
    },
  },
}
</script>

<style scoped>
form {
  padding: 15px;
}

.input-field-group {
  margin: 10px auto;
  width: 70%;
}

.input-field {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

form > input {
  margin: 20px;
}
</style>
