import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods.vue'
import Ratings from '@/components/ratings/ratings.vue'
import Seller from '@/components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      // 重定向
      redirect: "/goods"
    }, {
      path: '/goods',
      component: Goods,
    }, {
      path: '/ratings',
      component: Ratings,
    }, {
      path: '/seller',
      component: Seller,
    }
  ]
})
