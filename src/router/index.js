import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/404Error.vue'),
  },
  { name: 'Home', path: '/', component: () => import('@/pages/HomePage.vue') },
  {
    name: 'AuthPage',
    path: '/auth',
    redirect: '/auth/login',
    component: () => import('@/pages/auth/AuthPage.vue'),
    children: [
      {
        name: 'LoginPage',
        path: 'login',
        component: () => import('@/pages/auth/LoginPage.vue'),
      },
      {
        name: 'RegisterPage',
        path: 'register',
        component: () => import('@/pages/auth/RegisterPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
