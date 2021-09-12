<template>
  <div class="home">
    <h1>Home</h1>
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
