export default [
  {
    path: '/summaryRequest',
    name: 'SummaryRequest',
    meta: { title: 'Summaryrequest', requiresAuth: true, roles: [22, 28, 21, 20, 29] },
    component: () =>
          import('@/views/Request')
  },
  {
    path: '/summaryRequestDetail',
    name: 'summaryRequestDetail',
    meta: { title: 'Summaryrequest', requiresAuth: true, roles: [22, 28, 21, 20, 29] },
    component: () =>
        import('@/views/Request/RequestDetail')
  }
]
