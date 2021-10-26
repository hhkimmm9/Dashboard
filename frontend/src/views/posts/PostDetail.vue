<template>
  <div class="container">
    <!-- image of ths product -->

    <!-- detail of the product -->
    <div class="postDetail">
      <img src="../../../public/_32357-top-nav-sale-OS.png" alt="temp img" />
      <h1>
        {{ getPostDetail.title }}
      </h1>
      <p>
        {{ getPostDetail.category }}
      </p>
      <p>$ {{ getPostDetail.price }}</p>
      <p>
        {{ getPostDetail.description }}
      </p>
    </div>

    <!-- go-back button -->
    <div class="button-group">
      <!-- TODO: this should look like a button -->
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

  methods: {
    ...mapActions(['fetchPost', 'fetchPostDetail', 'deletePost']),

    deletePostReq(id) {
      this.deletePost(this.getPostDetail._id)

      this.$router.replace('/post')
    },
  },

  computed: mapGetters(['getPostDetail', 'getUserInfo']),

  async created() {
    await this.fetchPostDetail(this.$route.params.id)

    const signedInUserInfo = this.getUserInfo._id
    const posterUserId = this.getPostDetail.userId

    if (signedInUserInfo === posterUserId) {
      this.poster = true
    }
  },
}
</script>

<style scoped>
.container {
}

.postDetail {
}

.postDetail img {
  width: 200px;
  border: 1px solid #ccc;
}

.button-group {
  display: flex;
  justify-content: space-around;
}
</style>
