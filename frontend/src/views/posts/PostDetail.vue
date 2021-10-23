<template>
  <div id="container">
    <!-- image of ths product -->

    <!-- detail of the product -->
    <div id="postDetail">
      <img src="../../../public/1554925025552.png" alt="temp image" />
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
      <button to="/post">Go back</button>
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
#container {
  width: 40%;
  margin: auto;
}

#postDetail {
  margin: 50px;
}

.button-group {
  display: flex;
  justify-content: space-around;
  margin: 120px;
}
</style>
