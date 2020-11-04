/**
 * Created by glenn on 01.06.16.
 * Last updated on 15.10.18.
 */

const test = require('tape');
const loader = require('../index');
// const compiler = require('./compiler');
//
// test('hodor-loader test', async (t) => {
//   t.plan(1);
//
//   const stats = await compiler('../demo/src/index.js');
//   const output = stats.toJson().modules[0].source;
//   console.log(output);
//   t.equal(42, 42);
// });

test('hodor-loader test', (t) => {
  t.equal(
    loader('const x = "the quick brown fox jumps over a lazy dog";'),
    'const x = "HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR";',
    'should replace every word in string literal with "HODOR"'
  );

  t.equal(
    loader('document.writeln("hold, the; door!");'),
    'document.writeln("HODOR, HODOR; HODOR!");',
    'should respect punctuation marks'
  );

  t.equal(
    loader('console.log(`the answer is ${x}`);'),
    'console.log(`HODOR HODOR HODOR HODOR`);',
    'should handle template literal correctly'
  );

  t.equal(
    loader('const s = "hey there" + 42 + "verunka"'),
    'const s = "HODOR HODOR" + 42 + "HODOR"',
    'should handle string concatenation correctly'
  );

  t.equal(loader('let x = 42;'), 'let x = 42;', 'should not pick up number literal');

  t.equal(
    loader('/* Created by glenn on 01.06.16. */ // const x = "tough and competent";'),
    '/* Created by glenn on 01.06.16. */ // const x = "tough and competent";',
    'should not pick up comments'
  );

  t.end();
});
