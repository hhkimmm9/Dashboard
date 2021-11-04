<template>
  <div class="container">
    <div v-if="loading"></div>
    <h3>Profile Edit</h3>

    <img
      :src="`http://localhost:5000/${getUserInfo.profilePicture}`"
      alt="current profile picture"
      id="imgOnProfileEdit"
    />

    <form @submit="onSubmit">
      <div class="input-field-group">
        <input type="file" @change="onFileSelected" />
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
        <div class="input-field">
          <label for="edit-profile-password">Password</label>
          <input
            v-model="profile.password"
            id="edit-profile-password"
            type="password"
          />
        </div>
        <div class="input-field">
          <label for="edit-profile-confirm-password">Confirm Password</label>
          <input
            v-model="profile.confirmPassword"
            id="edit-profile-confirm-password"
            type="password"
          />
        </div>
      </div>
    </form>

    <router-link to="/user/login">Go back</router-link>
  </div>
</template>

<script>
import { mapAction, mapGetters } from 'vuex'

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
        selectedFile: null,
      },
    }
  },

  methods: {
    onFileSelected(e) {
      e.preventDefault()

      const profilePicture = document.querySelector('#imgOnProfileEdit')
      this.profile.selectedFile = e.target.files[0]

      profilePicture.src = URL.createObjectURL(this.profile.selectedFile)
    },

    onSubmit(e) {
      e.preventDefault()
    },
  },

  mounted() {
    this.loading = true
  },

  computed: mapGetters(['getUserInfo']),
}
</script>

<style>
img {
  width: 30vh;
  margin: 15px auto;
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
