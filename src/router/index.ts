import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/layout/main.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'page1',
        component: () => import('@/views/page1/index.vue')
      },
      {
        path: 'page2',
        component: () => import('@/views/page2/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
