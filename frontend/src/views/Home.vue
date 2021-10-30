<template>
  <div class="home">
    <h3>Home</h3>
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
