# hodor-loader

```
 _| | |_  _                 _        _     _      _                  _
|_  .  _|| |_      ___     | |    __| |   | |_   | |_      ___    __| |    ___     ___      _ _
|_     _|| ' \    / _ \    | |   / _` |   |  _|  | ' \    / -_)  / _` |   / _ \   / _ \    | '_|
  |_|_|  |_||_|   \___/   _|_|_  \__,_|   _\__|  |_||_|   \___|  \__,_|   \___/   \___/   _|_|_
_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|
"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'
```

[![travis build](https://img.shields.io/travis/dwiyatci/hodor-loader.svg)](https://travis-ci.org/dwiyatci/hodor-loader)
[![codecov coverage](https://img.shields.io/codecov/c/github/dwiyatci/hodor-loader.svg)](https://codecov.io/gh/dwiyatci/hodor-loader)
[![version](https://img.shields.io/npm/v/hodor-loader.svg)](https://www.npmjs.com/package/hodor-loader)
[![downloads](https://img.shields.io/npm/dt/hodor-loader.svg)](http://npm-stat.com/charts.html?package=hodor-loader)
[![WTFPL License](https://img.shields.io/badge/license-WTFPL-red.svg)](https://raw.githubusercontent.com/dwiyatci/hodor-loader/master/LICENSE.txt)

This [webpack](https://webpack.js.org) loader allows statically replacing string literal and literal template syntax in JavaScript source code with [Hodor](http://awoiaf.westeros.org/index.php/Hodor) before it gets bundled and interpreted.

Smells like an experimental manipulative Lexer, huh?!

**Heads-up:** I simply do this for fun; use at your own risk.

![Image of Hodor by Jack Spellman](hodor.jpg)

> Hold the door! Holddoor! Hodor! https://youtu.be/5DoBY8M_bCg

### Why?

- HODOR IS ~~**NOT**~~ DEAD.
- [You can’t beat Tape ⁉️](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)

## Installation

```bash
npm isntall hodor-loader --save-dev
```

## Usage

[Documentation: Using loaders](https://webpack.js.org/concepts/#loaders)

## Example

Given this webpack config:

```javascript
{
  // ...,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: 'hodor-loader'
      }
    ]
  },
  // ...
}
```

It will transform the matching JS file source code, e.g.

```javascript
console.log('hello, world');

document.querySelector('#app').textContent = 'the quick brown fox jumps over a lazy dog';

// alert("hold the door");

document.writeln('hold, the; door!');

const x = 42;
console.log(`the answer is ${x}`);
```

...into:

```javascript
console.log('HODOR, HODOR');

document.querySelector('#HODOR').textContent =
  'HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR';

// alert("hold the door");

document.writeln('HODOR, HODOR; HODOR!');

const x = 42;
console.log(`HODOR HODOR HODOR HODOR`);
```

## Author

Glenn Dwiyatcita ([@dwiyatci](http://tiny.cc/dwiyatci))

## License

WTFPL – Do What the Fuck You Want to Public License.

See [LICENSE.txt](LICENSE.txt).

![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-1.png)
