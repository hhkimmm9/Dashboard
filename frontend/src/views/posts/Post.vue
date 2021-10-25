<template>
  <div id="container">
    <div @click="readPostDetail" class="post-card">
      <img src="../../../public/_32357-top-nav-sale-OS.png" alt="temp img" />

      <div class="product-details">
        <h1>{{ postItem.title }}</h1>
        <p>$ {{ postItem.price }}</p>
        <p>{{ postItem.category }}</p>
        <p>{{ postItem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',

  props: {
    postItem: Object,
  },

  methods: {
    readPostDetail() {
      this.$router.replace(`/post/detail/${this.postItem._id}`)
    },
  },
}
</script>

<style scoped>
.post-card {
  margin: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
}

.post-card img {
  width: 150px;
  border: 1px solid #ccc;
}

.product-details {
  margin-left: 30px;
  text-align: left;
}
</style>
