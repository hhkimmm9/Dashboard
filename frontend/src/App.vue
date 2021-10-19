<template>
  <div class="app">
    <div class="content">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/user/login">My Account</router-link> |
        <router-link to="/todos">Todos</router-link> |
        <router-link to="/post">Market</router-link> |
        <router-link to="/portfolios">Portfolios</router-link>
      </div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Footer,
  },
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
