<template>
  <div class="container">
    <div v-if="!getIsSignedIn">
      <h2>Sign In</h2>

      <form @submit="onSubmit">
        <div id="input-field-group">
          <div class="input-field">
            <label for="input-1">E-mail</label>
            <input
              type="email"
              id="input-1"
              placeholder="Enter your e-mail..."
              v-model="form.email"
              required
            />
          </div>
          <div class="input-field">
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

        <div id="link-to-register">
          New to here?
          <router-link to="/user/register" class="button">
            Register
          </router-link>
        </div>
      </form>
    </div>

    <div v-if="getIsSignedIn">
      <h1>My Account</h1>
      <div class="button-group">
        <router-link to="/user/profile/edit">Edit Profile</router-link>
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
form {
  padding: 15px;
}

#input-field-group {
  margin: 10px auto;
  width: 50%;
}

.input-field {
  margin: 10px;
  display: flex;
  flex-direction: column;
}

form > input {
  margin: 20px;
}

#link-to-register {
  margin: 10px;
}
</style>
