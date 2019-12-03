export default [
  {
    path: '/allusers',
    name: 'allusers',
    meta: { title: 'allusers', requiresAuth: true, roles: [22, 21, 20, 29] },
    component: () =>
        import('@/views/Allusers')
  },
  {
    path: '/displaylist',
    name: 'displaylist',
    meta: { title: 'allusers', requiresAuth: true, roles: [22, 21, 20, 29] },
    component: () =>
        import('@/views/Allusers/DisplayList')
  },
  {
    path: '/editoneuser',
    name: 'editoneuser',
    meta: { title: 'allusers', requiresAuth: true, roles: [22, 21, 20, 29] },
    component: () =>
        import('@/views/Allusers/EditOneUser')
  }
]
