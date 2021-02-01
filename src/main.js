import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
// import VueNumerals from 'vue-numerals'

Vue.config.productionTip = false
Vue.use(Vuelidate)

Vue.directive('purple', {
  bind (el, binding, vnode) {
    el.style.color = '#6379F4'
  }
})

// Vue.use(VueNumerals) // default locale is 'en'

Vue.directive('content', {
  bind (el, binding, vnode) {
    el.style.backgroundColor = '#FFFFFF'
    el.style.minHeight = '650px'
    el.style.width = '100%'
    el.style.border = '2px solid white'
    el.style.borderRadius = '25px'
    el.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.05)'
    el.style.paddingTop = '5%'
    el.style.paddingLeft = '5%'
    el.style.paddingRight = '5%'
    el.style.paddingBottom = '5%'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
