<template>
  <div class="container">
    <h1>Register</h1>
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
            v-model="form.username"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.password"
            type="password"
            min="6"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.confirmPassword"
            type="password"
            min="6"
            placeholder="To confirm your password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="outline-primary" id="button"
          >Register</b-button
        >
      </b-form>
    </div>
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

    onSubmit(event) {
      event.preventDefault()

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
.container {
  width: 35%;
}

.form {
  margin-top: 25px;
}

#button {
  margin: 10px 5px;
}
</style>
