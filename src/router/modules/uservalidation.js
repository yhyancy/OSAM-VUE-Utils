export default [
  {
    path: '/uservalidation',
    name: 'uservalidation',
    meta: { title: 'uservalidation', requiresAuth: true, roles: [22, 21, 18] },
    component: () =>
    import('@/views/Validation/ValidationReport')
  },
  {
    path: '/ValidationLogout',
    name: 'ValidationLogout',
    component: () =>
    import('@/views/Validation/ValidationLogout')
  }
]
