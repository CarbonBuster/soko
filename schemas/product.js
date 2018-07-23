exports.product = {
  properties: {
    name: { type: 'string' },
    displayName: { type: 'string' },
    description: { type: 'string' },
    images: { $ref: 'definitions.js/product-images' },
    price: { $ref: 'definitions.js/price' },
    minimumQuantity: { type: 'number' },
    maximumQuantity: { type: 'number' },
    defaultQuantity: { type: 'number' },
    totalSupply: { type: 'number' }
  },
  required: ['name','price'],
  type: 'object'
};
