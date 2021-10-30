<template>
  <div class="container">
    <h1>Register</h1>

    <form @submit="onSubmit">
      <div id="input-field-group">
        <div class="input-field">
          <label for="register-email">E-mail</label>
          <input
            v-model="form.email"
            id="register-email"
            placeholder="Enter your e-mail..."
            type="email"
            required
          />
        </div>
        <div class="input-field">
          <label for="register-username">Username</label>
          <input
            v-model="form.username"
            id="register-username"
            placeholder="Enter your username..."
            type="text"
            required
          />
        </div>
        <div class="input-field">
          <label for="register-password">Password</label>
          <input
            v-model="form.password"
            id="register-password"
            placeholder="Enter your password..."
            type="password"
            min="6"
            required
          />
        </div>
        <div class="input-field">
          <label for="register-confirm-password">Confirm Your Password</label>
          <input
            v-model="form.confirmPassword"
            id="register-confirm-password"
            placeholder="Enter your password..."
            type="password"
            min="6"
            required
          />
        </div>
      </div>

      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',

  data() {
    return {
      form: {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
    }
  },

  methods: {
    ...mapActions(['register']),

    onSubmit(e) {
      e.preventDefault()
      // validation: if password === confirmPassword, when passed, vuex: dispatch the form data.
      // look for a library to validate the user input >> bootstrap-vue will do.
      if (this.form.password === this.form.confirmPassword) {
        this.register({
          email: this.form.email,
          username: this.form.username,
          password: this.form.password,
        })
        // redirect to homepage
        this.$router.push('/user/login')
      }
      // when validation fails, show the user a warning.
      else {
        alert('Opps, your password does not match!')
      }
    },
  },
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
</style>
