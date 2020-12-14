import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/auth/index.vue'
import Login from '../views/auth/login/index.vue'
import Register from '../views/auth/register/index.vue'
import Main from '../views/main/index.vue'
import Home from '../views/main/home/index.vue'
import Receiver from '../views/main/receiver/index.vue'
import Personal from '../views/main/personal/index.vue'
import History from '../views/main/history/index.vue'
import Profile from '../views/main/profile/index.vue'
import Transfer from '../views/main/Transfer/index.vue'
import Status from '../views/main/status/index.vue'
import Password from '../views/main/password/index.vue'
import store from '../store/index'
import ProfileChanged from '../views/main/profile2/index.vue'
import managePhone from '../views/main/managePhone/managePhone.vue'
import managePhoneChange from '../views/main/managePhoneChange/index.vue'
import Addphone from '../views/main/addphone/addphone.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: { requiresVisitor: true }
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: { requiresVisitor: true }
      }
    ]
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: 'receiver',
        name: 'Receiver',
        component: Receiver,
        meta: { requiresAuth: true }
      },
      {
        path: 'personal',
        name: 'Personal',
        component: Personal,
        meta: { requiresAuth: true }
      },
      {
        path: 'history',
        name: 'History',
        component: History,
        meta: { requiresAuth: true }
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true }
      },
      {
        path: 'profile-changed',
        name: 'ProfileChanged',
        component: ProfileChanged,
        meta: { requiresAuth: true }
      },
      {
        path: 'receiver-transfer',
        name: 'Transfer',
        component: Transfer,
        meta: { requiresAuth: true }
      },
      {
        path: 'receiver-transfer-status',
        name: 'Status',
        component: Status,
        meta: { requiresAuth: true }
      },
      {
        path: 'change-password',
        name: 'Password',
        component: Password,
        meta: { requiresAuth: true }
      },
      {
        path: 'manage-phone',
        name: 'managePhone',
        component: managePhone,
        meta: { requiresAuth: true }
      },
      {
        path: 'manage-phone-change',
        name: 'managePhoneChange',
        component: managePhoneChange,
        meta: { requiresAuth: true }
      },
      {
        path: 'addphone',
        name: 'Addphone',
        component: Addphone,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('pindah halaman')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/main/home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
