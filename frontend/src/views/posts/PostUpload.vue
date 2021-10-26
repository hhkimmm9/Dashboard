<template>
  <div class="container">
    <h1>Post Ad</h1>

    <form @submit="onSubmit">
      <div class="input-group">
        <label for="post-title">Title</label>
        <input type="text" id="post-title" v-model="form.title" required />
      </div>
      <div class="input-group">
        <label for="post-price">Price</label>
        <input type="text" id="post-price" v-model="form.price" required />
      </div>
      <div class="input-group">
        <label for="post-category">Categories</label>
        <!-- TODO: give it options -->
        <input
          type="text"
          id="post-category"
          v-model="form.categories"
          required
        />
      </div>
      <div class="input-group">
        <label for="post-desc">Description</label>
        <input
          type="text"
          id="post-desc"
          v-model="form.description"
          required
          row="7"
        />
      </div>
      <input type="submit" value="Add post" />
    </form>
    <hr />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Upload',

  data() {
    return {
      form: {
        title: '',
        price: null,
        category: null,
        description: '',
      },
      categories: [
        { text: 'Category', value: null },
        'Audio',
        'Books',
        'Clothing',
        'Electronics',
        'Furniture',
        'Sporting Goods',
      ],
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
.fileChoose {
  margin-bottom: 15px;
}

.input-group {
  margin: 15px 0;
}

#post-title {
  width: 100%;
}

#post-price {
  width: 100%;
}
</style>
