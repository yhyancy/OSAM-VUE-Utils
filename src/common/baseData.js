module.exports = {
  irrole: [
    {
      'id': 0,
      'name': 'All',
      'description': 'All'
    },
    {
      'id': 16,
      'name': 'AppUser',
      'description': 'View Order Status'
    },
    {
      'id': 17,
      'name': 'AppViewer',
      'description': 'View order status (AppViewer)'
    },
    {
      'id': 18,
      'name': 'AppOwner',
      'description': 'Become an application owner (AppOwner)'
    },
    {
      'id': 19,
      'name': 'CSR',
      'description': 'Approve and entitle customers within a center (CSR)'
    },
    {
      'id': 20,
      'name': 'Center Coordinator',
      'description': 'Coordinate entitlement requests within a center (Coordinator)'
    },
    {
      'id': 21,
      'name': 'Customer Support OnLine Entitlement Coordinator',
      'description': 'Manage entitlement requests nationwide (Customer Support OnLine)'
    },
    {
      'id': 22,
      'name': 'AM Owner',
      'description': 'Become an application owner (AM Owner)'
    },
    {
      'id': 28,
      'name': 'Entitlement Manager',
      'description': 'Entitlement Viewer'
    },
    {
      'id': 29,
      'name': 'External Admin',
      'description': 'External Admin'
    }
  ],
  csocenter: [
    {
      'id': 24,
      'name': 'Business Partners'
    },
    {
      'id': 25,
      'name': 'Commercial/State and Local'
    },
    {
      'id': 26,
      'name': 'Federal Government'
    },
    {
      'id': 30,
      'name': 'Lenovo'
    }
  ],
  relationship: [{
    'id': 'B',
    'name': 'Business partners'
  },
  {
    'id': 'S',
    'name': 'Small or Medium Business'
  },
  {
    'id': 'E',
    'name': 'IBM or Lenovo employee'
  },
  {
    'id': 'I',
    'name': 'Individual'
  },
  {
    'id': 'L',
    'name': 'Large Enterprise'
  }
  ],
  roletoapplication:
  {
    osol: [
      { 'id': 16, 'name': 'AppUser' },
      { 'id': 17, 'name': 'AppViewer' },
      { 'id': 18, 'name': 'AppOwner' }
    ],
    osam: [
      { 'id': 20, 'name': 'Center Coordinator' },
      { 'id': 21, 'name': 'Customer Support OnLine Entitlement Coordinator' },
      { 'id': 22, 'name': 'AM Owner' },
      { 'id': 28, 'name': 'Entitlement Manager' },
      { 'id': 29, 'name': 'External Admin' }
    ]
  }
}
