<template>
  <div id="container">
    <h1>Post List</h1>

    <!-- Only if logged in -->
    <button v-if="signedIn" @click="clickHandler">Post</button>

    <div id="post-card" v-for="post in getPosts" :key="post.id">
      <PostCard :postItem="post" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PostCard from './PostCard'

export default {
  name: 'PostList',

  data() {
    return {
      signedIn: false,
    }
  },

  components: {
    PostCard,
  },

  mounted() {
    this.fetchPosts()

    if (localStorage.getItem('auth-token')) {
      this.signedIn = true
    }
  },

  methods: {
    ...mapActions(['fetchPosts']),
    clickHandler() {
      this.$router.replace('/post/upload')
    },
  },

  computed: mapGetters(['getPosts']),
}
</script>

<style scoped>
#container {
  padding: 20px;
}

#post-card {
  margin: 20px;
}
</style>
