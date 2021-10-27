<template>
  <div class="container">
    <h2>Register</h2>

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
          <label for="input-2">Username</label>
          <input
            type="text"
            id="input-2"
            placeholder="Enter your username..."
            v-model="form.username"
            required
          />
        </div>
        <div class="input-field">
          <label for="input-3">Password</label>
          <input
            type="password"
            id="input-3"
            placeholder="Enter your password..."
            min="6"
            v-model="form.password"
            required
          />
        </div>
        <div class="input-field">
          <label for="input-4">Confirm Your Password</label>
          <input
            type="password"
            id="input-4"
            placeholder="Enter your password..."
            min="6"
            v-model="form.confirmPassword"
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
