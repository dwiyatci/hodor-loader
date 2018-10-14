/**
 * Created by glenn on 14.10.18.
 */

class HelloWorldPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Hello World Plugin', (
      stats /* stats is passed as argument when done hook is tapped.  */
    ) => {
      console.log('Hello World!');
    });
  }
}

module.exports = HelloWorldPlugin;
