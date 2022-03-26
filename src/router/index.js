import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import isAuthenticatedGuard from '../modules/auth/router/auth-guard'
import isNotAuthenticatedGuard from '../modules/auth/router/auth-isnot'
import routeAuth from '../modules/auth/router'
import routeProposal from '../modules/proposal/router'
import routeVote from '../modules/vote/router'
import routeUsers from '../modules/users/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/auth",
  }, 
  {
    path: '/redirecto',
    name:'redirecto',
    redirect: "/proposal",
  }, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/auth',
    beforeEnter: [ isNotAuthenticatedGuard ],
    ...routeAuth
  },
  {
    path: '/proposal',
    beforeEnter: [ isAuthenticatedGuard ],
    ...routeProposal
  },
  {
    path: '/vote',
    beforeEnter: [ isAuthenticatedGuard ],
    ...routeVote
  },
  {
    path: '/users',
    beforeEnter: [ isAuthenticatedGuard ],
    ...routeUsers
  },
  {path:'/:patchMatch(.*)*', component:Home}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
