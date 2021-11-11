<template>
  <div @click="readPostDetail" class="post-card">
    <img :src="`/api/${postItem.image}`" alt="product image" />

    <div class="product-detail">
      <h2>{{ postItem.title }}</h2>
      <p>Price: ${{ postItem.price }}</p>
      <p>Category: {{ postItem.category }}</p>
      <p>Description: {{ postItem.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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

  computed: mapGetters(['getPostDetail']),
}
</script>

<style scoped>
.post-card {
  border: 1px solid #ccc;
  padding: 15px;
  display: flex;
}

.post-card img {
  width: 25vw;
  border: 1px solid #ccc;
}

.product-detail {
  width: 100%;
  margin: 10px;
  padding: 10px;
  text-align: left;
}
</style>
