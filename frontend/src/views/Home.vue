<template>
  <div class="home" v-if="loading">
    <h3>Home</h3>
    <img
      :src="`http://localhost:5000/${getUserInfo.profilePicture}`"
      alt="user profile picture"
    />
    <p>
      {{ getIsSignedIn ? `Hello Welcome back, ${getUserInfo.username}!` : '' }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',

  data() {
    return {
      loading: false,
    }
  },

  mounted() {
    this.loading = true
  },

  computed: mapGetters(['getIsSignedIn', 'getUserInfo']),
}
</script>
