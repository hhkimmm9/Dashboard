<template>
  <div @click="readPostDetail" class="post-card">
    <img src="../../../public/_32357-top-nav-sale-OS.png" alt="temp img" />

    <div class="product-detail">
      <h1>{{ postItem.title }}</h1>
      <p>Price: ${{ postItem.price }}</p>
      <p>Category: {{ postItem.category }}</p>
      <p>Description: {{ postItem.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',

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
  border: 1px solid #ccc;
  padding: 15px;
  display: flex;
}

.post-card img {
  width: 150px;
  border: 1px solid #ccc;
}

.product-detail {
  width: 100%;
  margin: 10px;
  padding: 10px;
  text-align: left;
}
</style>
