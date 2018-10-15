/**
 * Created by glenn on 01.06.16.
 * Updated on 14.10.18.
 */

// const { getOptions } = require('loader-utils');
// const validateOptions = require('schema-utils');
//
// const schema = {
//   type: 'object',
//   properties: {
//     test: {
//       type: 'string'
//     }
//   }
// };
const falafel = require('falafel');

module.exports = function hodorLoader(source) {
  // const options = getOptions(this);
  // console.log(options);

  // validateOptions(schema, options, 'Hodor Loader');

  // Apply some transformations to the source...
  // console.log(source);
  const transformed = falafel({ source }, (node) => {
    if (node.type === 'Literal' && typeof node.value === 'string') {
      node.update(node.source().replace(/\w+/g, 'HODOR'));
    }

    if (node.type === 'TemplateLiteral') {
      node.update(node.source().replace(/\w+|\${.+}/g, 'HODOR'));
    }
  });
  // console.log(transformed);

  return transformed.toString();
};
