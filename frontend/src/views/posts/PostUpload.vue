<template>
  <div class="container">
    <h1>Post Ad</h1>

    <form @submit="onSubmit">
      <div class="input-field-group">
        <div class="input-field">
          <label for="post-title">Title</label>
          <input v-model="post.title" id="post-title" type="text" required />
        </div>
        <div class="input-field">
          <label for="post-price">Price</label>
          <input v-model="post.price" id="post-price" type="text" required />
        </div>
        <div class="input-field">
          <label for="post-category">Categories</label>
          <select v-model="post.category">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div class="input-field">
          <label for="post-desc">Description</label>
          <textarea
            v-model="post.description"
            id="post-desc"
            rows="4"
            required
          />
        </div>
        <input type="file" @change="onFileSelected" />
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
      post: {
        title: '',
        price: null,
        category: null,
        description: '',
        selectedFile: null,
      },
    }
  },

  methods: {
    ...mapActions(['addPost']),

    onFileSelected(e) {
      this.post.selectedFile = e.target.files[0]
    },

    onSubmit(e) {
      e.preventDefault()
      this.addPost({ post: this.post })
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
