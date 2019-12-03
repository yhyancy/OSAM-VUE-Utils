export default [
  {
    path: '/ValidationReport',
    name: 'ValidationReport',
    meta: { title: 'ValidationReport', requiresAuth: true, roles: [22, 21, 18, 29] },
    component: () =>
    import('@/views/Validation/ValidationReport')
  },
  {
    path: '/ValidationLogout',
    name: 'ValidationLogout',
    meta: { title: 'ValidationLogout', requiresAuth: true, roles: [22, 21, 18, 29] },
    component: () =>
    import('@/views/Validation/ValidationLogout')
  }
]
