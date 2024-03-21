import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import foot from '@/components/footPage/foot'
import about from '@/components/about/about'
import up from '@/components/up/up'
import detail from '@/components/detail/detail'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/foot',
    name: 'foot',
    component: foot
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/up',
    name: 'up',
    component: up
  },
  {
    path:'/detail',
    name:'detail',
    component:detail
  }
]
const router  = new Router({
  routes
})
export default router;
