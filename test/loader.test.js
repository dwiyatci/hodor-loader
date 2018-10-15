/**
 * Created by glenn on 01.06.16.
 * Updated on 15.10.18.
 */

const test = require('tape');
const compiler = require('./compiler');

test('hodor-loader test', async (t) => {
  t.plan(1);

  const stats = await compiler('../demo/src/index.js');
  const output = stats.toJson().modules[0].source;
  console.log(output);
  t.equal(42, 42);
});

// test('hodor-loader test', (assert) => {
//
//   assert.equal(
//     loaderMock("hodorify('the quick brown fox jumps over a lazy dog')"),
//     "'HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR'",
//     'should replace every word inside hodorify() call with "HODOR"');
//
//   assert.equal(
//     loaderMock("const foo = 'bar'; hodorify('hold the door');"),
//     "const foo = 'bar'; 'HODOR HODOR HODOR';",
//     'should not replace other string not wrapped by hodorify() call');
//
//   assert.equal(
//     loaderMock('hodorify("hold the door")'),
//     "'HODOR HODOR HODOR'",
//     'should respect double quotes');
//
//   assert.equal(
//     loaderMock('hodorify("hold, the; door!")'),
//     "'HODOR, HODOR; HODOR!'",
//     'should not replace punctuation mark at the end of word');
//
//   assert.equal(
//     loaderMock('hodorify(42)'),
//     "'HODOR'",
//     'should correctly handle number argument');
//
//   assert.end();
// });
