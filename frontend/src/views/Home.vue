<template>
  <div class="home" v-if="loading">
    <h3>Home</h3>
    <div class="content" v-if="getIsSignedIn">
      <img
        :src="`/api/${getUserInfo.profilePicture}`"
        alt="user profile picture"
      />
      <p>
        {{ `Hello Welcome back, ${getUserInfo.username}!` }}
      </p>
    </div>
    <div class="class" v-else>
      <p>User not signed in.</p>
    </div>
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
