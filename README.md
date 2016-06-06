# hodor-loader
```
 _| | |_  _                 _        _     _      _                  _                           
|_  .  _|| |_      ___     | |    __| |   | |_   | |_      ___    __| |    ___     ___      _ _  
|_     _|| ' \    / _ \    | |   / _` |   |  _|  | ' \    / -_)  / _` |   / _ \   / _ \    | '_| 
  |_|_|  |_||_|   \___/   _|_|_  \__,_|   _\__|  |_||_|   \___|  \__,_|   \___/   \___/   _|_|_  
_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| 
"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 
```

This [webpack](https://github.com/webpack/webpack) loader allows statically replacing string surrounded by `hodorify()` syntax in JavaScript source code with [Hodor](http://awoiaf.westeros.org/index.php/Hodor) before it gets bundled and interpreted.

Smells like an experimental manipulative Lexer, huh?!

**Heads-up:** I simply do this for fun; use at your own risk.

![Image of Hodor by Jack Spellman](hodor.jpg)

> Hold the door! Holddoor! Hodor! https://youtu.be/5DoBY8M_bCg

### Why?
- HODOR IS ~~**NOT**~~ DEAD.
- [You can’t beat Tape :question:](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4)

## Installation
```sh
npm install hodor-loader --save-dev
```

## Usage
[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## Example
Given this config:

```javascript
{
  module: {
    loaders: [
      {
        test  : /app\.js/,
        loader: 'hodor',
      },
    ],
  },
}
```

It will transform `app.js` source code

```javascript
console.log(hodorify('hello, world'));

document.querySelector('#app').textContent = hodorify('the quick brown fox jumps over a lazy dog');

//alert(hodorify("hold the door"));

document.writeln(hodorify("hold, the; door!"));
```

...into:

```javascript
console.log('HODOR, HODOR');

document.querySelector('#app').textContent = 'HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR HODOR';

//alert('HODOR HODOR HODOR');

document.writeln('HODOR, HODOR; HODOR!');
```

## Author
Glenn Dwiyatcita ([@dwiyatci](http://tiny.cc/dwiyatci))

## License
WTFPL – Do What the Fuck You Want to Public License.

See [LICENSE.txt](LICENSE.txt). 

![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-1.png)
