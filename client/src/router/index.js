import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import EditProfile from '../views/auth/EditProfile'
import TodoList from '../views/todos/TodoList'
import LunchPicker from '../views/LunchPicker'
import PostsList from '../views/posts/PostsList'
import PostUpload from '../views/posts/PostUpload'
import PostDetail from '../views/posts/PostDetail'
// import PortfolioList from '../views/portfolios/PortfolioList'
// import ClawMachine from '../views/portfolios/clawmachine/ClawMachine'
// import CampusMap from '../views/portfolios/campusmap/CampusMap'

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
    path: '/user/profile/edit',
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/todos',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/lunchpicker',
    name: 'LunchPicker',
    component: LunchPicker,
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
  // {
  //   path: '/portfolios',
  //   name: 'PortfolioList',
  //   component: PortfolioList,
  // },
  // {
  //   path: '/portfolios/clawmachine',
  //   name: 'ClawMachine',
  //   component: ClawMachine,
  // },
  // {
  //   path: '/portfolios/campusmap',
  //   name: 'CampusMap',
  //   component: CampusMap,
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
