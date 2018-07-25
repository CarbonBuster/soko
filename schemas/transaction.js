exports.transaction = {
  properties: {
    signers: { $ref: 'definitions.js/signers' }
  },
  required: ['signers'],
  type: 'object'
};
