import { createRouter, createWebHashHistory } from 'vue-router'
import useAuthUser from '@/composables/useAuthUser'

const routes = [
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/404Error.vue'),
  },
  {
    name: 'HomePage',
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'CategoriesPage',
    path: '/categories',
    component: () => import('@/pages/CategoriesPage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'NewCategoryPage',
    path: '/categories/new',
    component: () => import('@/pages/NewCategoryPage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: 'AddPlacesCategoryPage',
    path: '/categories/:id/places',
    component: () => import('@/pages/AddPlacesCategoryPage.vue'),
    meta: {
      requiresAuth: true,
    },
  },
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
      {
        name: 'EmailConfirmation',
        path: 'email-confirmation',
        component: () => import('@/pages/auth/EmailConfirmation.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(to => {
  const { isLoggedIn } = useAuthUser()
  if (!isLoggedIn() && to.meta.requiresAuth) {
    return { name: 'LoginPage' }
  }
})

export default router
