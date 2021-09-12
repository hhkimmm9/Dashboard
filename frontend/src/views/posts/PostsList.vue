<template>
  <div id="container">
    <h1>Market</h1>

    <!-- Only if logged in -->
    <b-button @click="clickHandler" v-if="signedIn">Post</b-button>

    <div v-for="post in getPosts" :key="post.id">
      <Post :postItem="post" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Post from './Post'

export default {
  name: 'Market',

  data() {
    return {
      signedIn: false,
    }
  },

  components: {
    Post,
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
  width: 80%;
  margin: auto;
}
</style>
