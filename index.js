/**
 * Created by glenn on 01/06/16.
 */

module.exports = function (source) {

  // Mark the loader as cacheable (same result for same input).
  this.cacheable();

  function replacer(match, p1) {
    return `'${
      p1
        .replace(/['"]/g, '')
        .split(' ')
        .map(word => word.replace(/^.*?([.,;:?!]|$)/, 'HODOR$1'))
        .join(' ')
      }'`;
  }

  source = source.replace(/hodorify\((.*?)\)/gi, replacer);

  //source = function hodorify(str) {
  //    return str
  //      .split(' ')
  //      .map(word => word.replace(/^.*?([.,;:?!]|$)/, 'HODOR$1')))
  //      .join(' ');
  //  }.toString() + source;

  return source;
};
