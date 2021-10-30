<template>
  <div class="container">
    <h1>
      {{ getPostDetail.title }}
    </h1>

    <img src="../../../public/_32357-top-nav-sale-OS.png" alt="temp img" />

    <div id="post-detail">
      <p>Category: {{ getPostDetail.category }}</p>
      <p>Price: ${{ getPostDetail.price }}</p>
      <p id="desc-p">Description: {{ getPostDetail.description }}</p>
    </div>

    <div class="button-group">
      <router-link to="/post">Go back</router-link>
      <button @click="deletePostReq" v-if="poster">Delete Post</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PostDetail',

  data() {
    return {
      id: this.$route.params.id,
      poster: false,
    }
  },

  async created() {
    await this.fetchPostDetail(this.$route.params.id)

    const signedInUserInfo = this.getUserInfo._id
    const posterUserId = this.getPostDetail.userId

    if (signedInUserInfo === posterUserId) {
      this.poster = true
    }
  },

  methods: {
    ...mapActions(['fetchPost', 'fetchPostDetail', 'deletePost']),

    deletePostReq(id) {
      this.deletePost(this.getPostDetail._id)

      this.$router.replace('/post')
    },
  },

  computed: mapGetters(['getPostDetail', 'getUserInfo']),
}
</script>

<style scoped>
.container > img {
  width: 45%;
  border: 1px solid #ccc;
  margin: 15px;
}

#post-detail {
  width: 80%;
  margin: 10px auto;
}

.button-group {
  margin: 40px auto;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
