export default [
  {
    path: '/register',
    name: 'register',
    component: () =>
        import('@/views/Register')
  },
  {
    path: '/regwarning',
    name: 'regwarning',
    component: () =>
        import('@/views/Register/RegisterWarning')
  }
]
