// ProductData.js
const productData = [
  {
    id: 1,
    name: '1. Mobile Phones',
    children: [
      {
        id: 2,
        name: '* Apple',
        category: 'mobile',
        brand: 'Apple',
        parent_id: 1,
        children: [
          {
            id: 3,
            name: '- iPhone 8',
            parent_id: 2,
            children: [
              { id: 4, name: '128 GB', parent_id: 3, selectedName: 'Mobile Phones > Apple > iPhone 8 > 128GB', category: 'mobile', brand: 'Apple', color: 'Black' },
              { id: 5, name: '256 GB', parent_id: 3, selectedName: 'Mobile Phones > Apple > iPhone 8 > 256GB', category: 'mobile', brand: 'Apple', color: 'Gray' },
            ],
          },
          {
            id: 6,
            name: '- iPhone X',
            parent_id: 2,
            children: [
              { id: 7, name: '128 GB', parent_id: 6, selectedName: 'Mobile Phones > Apple > iPhone X > 128GB', category: 'mobile', brand: 'Apple', color: 'Black' },
              { id: 8, name: '256 GB', parent_id: 6, selectedName: 'Mobile Phones > Apple > iPhone X > 256GB', category: 'mobile', brand: 'Apple', color: 'Gray' },
            ],
          },
        ],
      },
      {
        id: 7,
        name: '* Android',
        children: [
          {
            id: 8,
            name: '- Real me',
            parent_id: 7,
            children: [
              { id: 9, name: '128 GB', parent_id: 8, selectedName: 'Mobile Phones > Android > Real me > 128GB', category: 'mobile', brand: 'Android', color: 'Black' },
              { id: 10, name: '256 GB', parent_id: 8, selectedName: 'Mobile Phones > Android > Real me > 256GB', category: 'mobile', brand: 'Android', color: 'Gray' },
            ],
          },
          {
            id: 11,
            name: '- Infinix',
            parent_id: 7,
            children: [
              { id: 12, name: '128 GB', parent_id: 11, selectedName: 'Mobile Phones > Android > Infinix > 128GB', category: 'mobile', brand: 'Android', color: 'Black' },
              { id: 13, name: '256 GB', parent_id: 11, selectedName: 'Mobile Phones > Android > Infinix > 256GB', category: 'mobile', brand: 'Android', color: 'Gray' },
            ],
          },
        ],
      },
      // Other brands and models
    ],
  },
  {
    id: 14,
    name: '2. Computers',
    children: [
      {
        id: 15,
        name: '* Windows',
        parent_id: 14,
        children: [
          { id: 16, name: '128 GB', parent_id: 15, selectedName: 'Computers > Windows > 128GB', category: 'Computers', brand: 'Windows', color: 'Black' },
          { id: 17, name: '256 GB', parent_id: 15, selectedName: 'Computers > Windows > 256GB', category: 'Computers', brand: 'Windows', color: 'Gray' },
        ],
      },
      {
        id: 18,
        name: '* MAC',
        parent_id: 14,
        children: [
          { id: 19, name: '128 GB', parent_id: 16, selectedName: 'Computers > MAC > 128GB', category: 'Computers', brand: 'Apple', color: 'Black' },
          { id: 20, name: '256 GB', parent_id: 16, selectedName: 'Computers > MAC > 256GB', category: 'Computers', brand: 'Apple', color: 'Gray' },
        ],
      },
    ]
  }
  // Other categories
];

export default productData;  