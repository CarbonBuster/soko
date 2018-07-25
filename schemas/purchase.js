exports.purchase = {
  properties: {
    productHash: { type: 'string' },
    quantity: { type: 'number' },
    metadata: { type: 'object' }
  },
  required: ['productHash'],
  type: 'object'
};
