<template>
  <div class="container">
    <div v-if="!getIsSignedIn">
      <h1>Sign In</h1>
      <div class="form">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              placeholder="Enter password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="outline-primary" class="button"
            >Login</b-button
          >

          <div class="link-to-register">
            New to here?
            <router-link to="/user/register" class="button">
              Register
            </router-link>
          </div>
        </b-form>
      </div>
    </div>
    <div v-if="getIsSignedIn">
      <h1>My Account</h1>
      <div class="button-group">
        <!-- TODO: this has to be a link to a profile edit page. -->
        <b-button>Edit Profile</b-button>
        <b-button @click="logoutHandler">Log Out</b-button>
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
      // this.clearTodos()
      location.reload()
      // clear state or refresh the page? which one would be a better practice?
    },
  },

  computed: mapGetters(['getIsSignedIn']),
}
</script>

<style scoped>
.container {
  width: 30%;
}

.form {
  margin-top: 25px;
}

.button {
  margin: 10px 5px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin: 70px;
}
</style>
