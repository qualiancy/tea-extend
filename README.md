# tea-extend [![Build Status](https://secure.travis-ci.org/qualiancy/tea-extend.png?branch=master)](https://travis-ci.org/qualiancy/tea-extend)

> Shallow object merge utility.

## Installation

### Node.js

`tea-extend` is available on [npm](http://npmjs.org).

    $ npm install tea-extend

### Component

`tea-extend` is available as a [component](https://github.com/component/component).

    $ component install qualiancy/tea-extend

## Usage

### extend (destination, source, ...)

* **@param** _{Object}_ destination 
* **@param** _{Object}_ sources ...
* **@return** _{Object}_  destination extended

For each source, shallow merge its key/values to the
destinatino. Sources are read in order, meaning the same
key in a later source will overwrite the key's value earlier
set.

```js
var extend = require('tea-extend');

// sample objects
var a = { hello: 'world' }
  , b = { speak: 'loudly' };

// change a
extend(a, b);

// shallow clone to c
var c = extend({}, a);
```

## License

(The MIT License)

Copyright (c) 2012 Jake Luer <jake@qualiancy.com> (http://qualiancy.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
