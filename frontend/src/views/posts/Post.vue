<template>
  <div id="container">
    <div @click="readPostDetail" class="post-card">
      <b-card>
        <div class="product-image">
          <img src="../../../public/1554925025552.png" alt="" />
        </div>

        <div class="product-details">
          <h1>{{ postItem.title }}</h1>
          <p>$ {{ postItem.price }}</p>
          <p>{{ postItem.category }}</p>
          <p>{{ postItem.description }}</p>
        </div>
      </b-card>
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
}

.product-details {
  position: relative;
  text-align: left;
  /* overflow: hidden; */
  /* padding: 30px; */
  /* height: 100%; */
  float: right;
  width: 60%;
  margin-top: 15px;
}

.product-image {
  /* transition: all 0.3s ease-out; */
  display: inline-block;
  position: relative;
  overflow: hidden;
  /* height: 100%; */
  float: left;
  width: 40%;
  /* display: inline-block; */
}
</style>
