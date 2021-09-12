import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Todos from '../views/todos/Todos'
import PostsList from '../views/posts/PostsList'
import PostUpload from '../views/posts/PostUpload'
import PostDetail from '../views/posts/PostDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: About,
  },
  {
    path: '/user/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/user/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos,
  },
  {
    path: '/post/',
    name: 'PostsList',
    component: PostsList,
  },
  {
    path: '/post/upload',
    name: 'PostUpload',
    component: PostUpload,
  },
  {
    path: '/post/detail/:id',
    name: 'PostDetail',
    component: PostDetail,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
