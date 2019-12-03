import Welcome from '@/views/Welcome.vue'

// 'appViewer': '17',
// 'appOwner': '18',
// 'amOwner': '22',
// 'entitlementManager': '28',
// 'centerCoordinator': '20',
// 'customerSupport': '21',
// 'appUser': '16',
// 'externalAdmin': '29'

export default [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    meta: { title: 'home', requiresAuth: true, roles: [22, 21, 18] },
    component: () =>
        import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'about', requiresAuth: true, roles: [22, 28, 21, 20] },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]
