import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import foot from '@/components/footPage/foot'
import about from '@/components/about/about'
import up from '@/components/up/up'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/foot',
      name:'foot',
      component:foot
    },
    {
      path:'/about',
      name:'about',
      component:about
    },
    {
      path:'/up',
      name:'up',
      component:up
    },
  ]
})
