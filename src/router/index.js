import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Love from '@/components/Love'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/Love',
      name: 'Love',
      component: Love
    }
  ]
})
