/**
 * Created by glenn on 01/06/16.
 */

import test from 'tape';

const loader = require('./');

function noop() {
}

// Mock loader context (`this`) so that we have an environment
// that's close enough to Webpack in order to avoid crashes
// during testing. Alternatively we could code defensively
// and protect against the missing data.
const webpackContext = {
  cacheable: noop,
  exec     : noop,
};

// Bind the context. After this we can run the loader in our
// tests.
const loaderMock = loader.bind(webpackContext);

test('hodor-loader test', (assert) => {

  assert.equal(
    loaderMock("hodorify('the quick brown fox jumps over a lazy dog')"),
    "'HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR'",
    'should replace every word inside hodorify() call with "HODOR"');

  assert.equal(
    loaderMock("const foo = 'bar'; hodorify('hold the door');"),
    "const foo = 'bar'; 'HODOR HODOR HODOR';",
    'should not replace other string not wrapped by hodorify() call');

  assert.equal(
    loaderMock('hodorify("hold the door")'),
    "'HODOR HODOR HODOR'",
    'should respect double quotes');

  assert.equal(
    loaderMock('hodorify("hold, the; door!")'),
    "'HODOR, HODOR; HODOR!'",
    'should not replace punctuation mark at the end of word');

  assert.equal(
    loaderMock('hodorify(42)'),
    "'HODOR'",
    'should correctly handle number argument');

  assert.end();
});
