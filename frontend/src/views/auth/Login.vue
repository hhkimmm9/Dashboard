<template>
  <div class="container">
    <div v-if="!getIsSignedIn">
      <h1>Sign In</h1>
      <div class="form">
        <form @submit="onSubmit">
          <div class="form-group">
            <div class="input-group">
              <label for="input-1">E-mail</label>
              <input
                type="email"
                id="input-1"
                placeholder="Enter your e-mail..."
                v-model="form.email"
                required
              />
            </div>
            <div class="input-group">
              <label for="input-2">Password</label>
              <input
                type="password"
                id="input-2"
                placeholder="Enter your password..."
                v-model="form.password"
                required
              />
            </div>
          </div>
          <input type="submit" value="Sign in" />
          <div class="link-to-register">
            New to here?
            <router-link to="/user/register" class="button">
              Register
            </router-link>
          </div>
        </form>
      </div>
    </div>

    <div v-if="getIsSignedIn">
      <h1>My Account</h1>
      <div class="button-group">
        <!-- TODO: this has to be a link to a profile edit page. -->
        <button>Edit Profile</button>
        <button @click="logoutHandler">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    ...mapActions(['login', 'logout', 'clearTodos']),

    onSubmit(event) {
      event.preventDefault()
      // vuex: dispatch the form data.
      // redirect to the homepage, or wherever the user was on.
      this.login({
        email: this.form.email,
        password: this.form.password,
      })
      this.$router.replace('/')
    },

    logoutHandler() {
      this.logout()
      localStorage.removeItem('auth-token')
    },
  },

  computed: mapGetters(['getIsSignedIn']),
}
</script>

<style scoped>
.form-group {
  flex-direction: column;
}

.input-group {
  flex-direction: column;
  width: 50%;
  margin: auto;
  padding: 15px;
}

.link-to-register {
  margin-top: 10px;
}
</style>
