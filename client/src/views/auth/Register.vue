<template>
  <div class="container">
    <h1>Register</h1>

    <form @submit="onSubmit">
      <div id="input-field-group">
        <input type="file" @change="onFileSelected" required />
        <div class="input-field">
          <!-- <label for="register-email">E-mail</label> -->
          <input
            v-model="form.email"
            id="register-email"
            placeholder="Enter your e-mail..."
            type="email"
            required
          />
        </div>
        <div class="input-field">
          <!-- <label for="register-username">Username</label> -->
          <input
            v-model="form.username"
            id="register-username"
            placeholder="Enter your username..."
            type="text"
            required
          />
        </div>
        <div class="input-field">
          <!-- <label for="register-password">Password</label> -->
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
          <!-- <label for="register-confirm-password">Confirm Your Password</label> -->
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
        selectedFile: null,
      },
    }
  },

  methods: {
    ...mapActions(['register']),

    onFileSelected(e) {
      this.form.selectedFile = e.target.files[0]
    },

    onSubmit(e) {
      e.preventDefault()
      // validation: if password === confirmPassword, when passed, vuex: dispatch the form data.
      // look for a library to validate the user input >> bootstrap-vue will do.
      if (this.form.password === this.form.confirmPassword) {
        this.register({
          profilePicture: this.form.selectedFile,
          email: this.form.email,
          username: this.form.username,
          // TODO: can I send password like this?
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
  padding: 10px;
}

#input-field-group {
  margin: auto;
  padding: 10px;
  width: 50%;
}

.input-field {
  margin: 10px auto;
  display: flex;
  flex-direction: column;
}

.input-field > input {
  margin: 10px;
  height: 25px;
  font-size: 17px;
}

form > input {
  margin: 5px;
  height: 2rem;
}
</style>
