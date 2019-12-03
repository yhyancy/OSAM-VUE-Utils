export default [
  {
    path: '/reports/entitlementReqActivityReport',
    name: 'requestReport',
    component: () =>
          import('@/views/Report')
  },
  {
    path: '/requestsummary',
    name: 'summaryReport',
    component: () =>
          import('@/views/Report/Report_Summary')
  },
  {
    path: '/requestdetail',
    name: 'requestdetail',
    component: () =>
          import('@/views/Report/requestdetail')
  }
]
