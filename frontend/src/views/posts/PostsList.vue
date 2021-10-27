<template>
  <div id="container">
    <h1>Post List</h1>

    <!-- Only if logged in -->
    <button @click="clickHandler" v-if="signedIn">Post</button>

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
  methods: {
    ...mapActions(['fetchPosts']),
    clickHandler() {
      this.$router.replace('/post/upload')
    },
  },
  mounted() {
    this.fetchPosts()

    if (localStorage.getItem('auth-token')) {
      this.signedIn = true
    }
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
