<template>
  <div class="upload">
    <h1>Post Ad</h1>

    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          placeholder="Title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.price"
          placeholder="Price"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.category"
          :options="categories"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label-for="input-4">
        <b-form-textarea
          id="input-4"
          v-model="form.description"
          placeholder="Description"
          rows="7"
          no-resize
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <hr />

    <!-- <form
      action="http://localhost:5000/api/post/upload"
      method="POST"
      enctype="multipart/form-data"
    >
      <input name="myImage" type="file" />
      <div>
        <label for="title">Title:</label><br />
        <input type="text" id="title" name="title" /><br />

        <label for="price">Price:</label><br />
        <input type="number" id="price" name="price" /><br />

        <label for="price">category:</label><br />
        <select name="category" id="category">
          <option value="albums">Albums</option>
          <option value="books">Books</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="sportingGoods">Sporting Goods</option> </select
        ><br />

        <label for="description">Description:</label><br />
        <textarea rows="7" id="description" name="description" /><br />

        <button type="submit">Submit</button>
      </div>
    </form> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Upload',

  data() {
    return {
      // fileInfo: null,
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
.upload {
  margin: auto;
  width: 40%;
}
</style>
