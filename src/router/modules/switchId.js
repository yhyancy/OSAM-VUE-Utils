export default [
  {
    path: '/switchid',
    name: 'switchid',
    meta: { title: 'switchid', requiresAuth: true, roles: [22] },
    component: () =>
        import('@/views/SwitchId.vue')
  }
]
