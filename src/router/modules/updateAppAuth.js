export default [
  {
    path: '/updateappauth',
    name: 'updateappauth',
    meta: { title: 'updateappauth', requiresAuth: true, roles: [22, 28, 21, 20, 18, 17, 16, 29] },
    component: () =>
          import('@/views/Register/UpdateAppAuth.vue')
  }
]
