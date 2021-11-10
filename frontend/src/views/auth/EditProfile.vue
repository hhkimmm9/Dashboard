<template>
  <div class="container">
    <div v-if="loading"></div>
    <h3>Profile Edit</h3>

    <img
      :src="`api/${getUserInfo.profilePicture}`"
      alt="current profile picture"
      id="imgOnProfileEdit"
    />

    <form @submit="onSubmit">
      <div class="input-field-group">
        <input id="file-input" type="file" @change="onFileSelected" />
        <div class="input-field">
          <label for="edit-profile-email">E-mail</label>
          <input
            v-model="profile.email"
            id="edit-profile-email"
            :placeholder="getUserInfo.email"
            type="email"
          />
        </div>
        <div class="input-field">
          <label for="edit-profile-username">Username</label>
          <input
            v-model="profile.username"
            id="edit-profile-username"
            :placeholder="getUserInfo.username"
            type="text"
          />
        </div>
        <!-- TODO: prompt: please provide password to proceed. -->
        <div class="input-field">
          <label for="edit-profile-password">Password</label>
          <input
            v-model="profile.password"
            id="edit-profile-password"
            type="password"
            required
          />
        </div>
        <div class="input-field">
          <label for="edit-profile-confirm-password">Confirm Password</label>
          <input
            v-model="profile.confirmPassword"
            id="edit-profile-confirm-password"
            type="password"
            required
          />
        </div>
      </div>
      <input type="submit" value="Edit Profile" />
    </form>

    <router-link to="/user/login">Go back</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProfileEdit',

  data() {
    return {
      loading: false,

      profile: {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        updatedProfilePicture: null,
      },
    }
  },

  methods: {
    ...mapActions(['editProfile']),

    onFileSelected(e) {
      e.preventDefault()

      const profilePicture = document.querySelector('#imgOnProfileEdit')
      this.profile.updatedProfilePicture = e.target.files[0]

      profilePicture.src = URL.createObjectURL(
        this.profile.updatedProfilePicture
      )
    },

    onSubmit(e) {
      e.preventDefault()

      // TODO: password validation, is it enough?
      // When a user intends to change their password.
      if (
        this.profile.password !== '' &&
        this.profile.confirmPassword !== '' &&
        this.profile.password === this.profile.confirmPassword
      ) {
        if (this.profile.email === '') {
          this.profile.email = this.getUserInfo.email
        }

        if (this.profile.username === '') {
          this.profile.username = this.getUserInfo.username
        }

        this.editProfile({ profile: this.profile })

        this.$router.push('/')
      }
      // One of the input fields or both are empty.
      else if (
        this.profile.password === '' ||
        this.profile.confirmPassword === ''
      ) {
        alert('Please enter your password to proceed.')
      }
      // A user intended to change their password but failed confirmation.
      else if (this.profile.password !== this.profile.confirmPassword) {
        alert('Password does not match. Please try again.')
      }
    },
  },

  mounted() {
    this.loading = true
  },

  computed: mapGetters(['getUserInfo']),
}
</script>

<style scoped>
img {
  width: 30vh;
  margin: 15px auto;
}

form {
  margin: 25px;
}

#file-input {
}

.input-field {
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  width: 50%;
}

.input-field > input {
  height: 25px;
  font-size: 17px;
}
</style>
