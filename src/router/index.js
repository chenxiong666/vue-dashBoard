import Vue from 'vue'
import Router from 'vue-router'
// import HelloWord from '@/components/hello'
import System from '@/pages/system'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: System
    }
  ]
})
