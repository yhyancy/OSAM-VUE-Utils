export default [
  {
    path: '/newsflash/viewNews',
    name: 'newsflash',
    meta: { title: 'newsflash', requiresAuth: true, roles: [22] },
    component: () =>
      import('@/views/Newsflash')
  }
]
