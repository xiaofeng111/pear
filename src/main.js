// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('to:', to)
  if (to.path === '/login') {
    next()
  } else {
    console.log(11111)
    if (to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {
      console.log(22222)
      next({ path: '/login' })
    } else {
      console.log(33333333)
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(VueResource)
