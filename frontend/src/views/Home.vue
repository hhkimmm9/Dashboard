<template>
  <div class="home">
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

  computed: mapGetters(['getIsSignedIn', 'getUserInfo']),
}
</script>
