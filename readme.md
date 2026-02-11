# array-to-obj [![CI](https://github.com/chrisvogt/array-to-obj/actions/workflows/ci.yml/badge.svg)](https://github.com/chrisvogt/array-to-obj/actions/workflows/ci.yml) [![codecov](https://codecov.io/gh/chrisvogt/array-to-obj/badge.svg?branch=master)](https://codecov.io/gh/chrisvogt/array-to-obj?branch=master)

> Convert an array of objects into a keyed object


## Install

```
$ npm install array-to-obj
```


## Usage

#### Default key is `id`

```js
const arrayToObj = require('array-to-obj');

const districts = [
  {id: 1, name: 'Richmond'},
  {id: 2, name: 'Cow Hollow, Marina, Pacific Heights'}
];

arrayToObj(districts);

// {
//   1: { id: 1, name: 'Richmond' },
//   2: { id: 2, name: 'Cow Hollow, Marina, Pacific Heights' }
// }
```

#### Pass a string as a key selector

```js
const arrayToObj = require('array-to-obj');

const songs = [
  {title: 'Bluebird', artist: 'One Self'},
  {title: 'Sunshine', artist: 'Atmosphere'}
];

arrayToObj(songs, {
  key: 'title'
});

// {
//   Bluebird: { title: 'Bluebird', artist: 'One Self' },
//   Sunshine: { title: 'Sunshine', artist: 'Atmosphere' }
// }
```

#### Pass a function as a key selector

```js
const arrayToObj = require('array-to-obj');

const browsers = [
  {engine: 'Blink', name: 'Chrome'},
  {engine: 'Gecko', name: 'Firefox'}
];

arrayToObj(browsers, {
  key: browser => browser.engine.toLowerCase()
});

// {
//   blink: { engine: 'Blink', name: 'Chrome' },
//   gecko: { engine: 'Gecko', name: 'Firefox' }
// }
```

#### Try/catch in function selector

```js
const arrayToObj = require('array-to-obj');
const shortid = require('shortid');

const books = [
  {title: 'The Three-Body Problem', meta: {upc: 9781784971571}},
  {title: 'The Dark Forest'}
];

const converted = arrayToObj(books, {
  key: book => {
    try {
      return book.meta.upc;
    } catch (error) {
      return shortid.generate();
    }
  }
});
```

#### Pass a function as a key generator

```js
const arrayToObj = require('array-to-obj');
const shortid = require('shortid');

const movies = [
  {released: '2001', title: 'Spirited Away'},
  {released: '2004', title: 'Howl\'s Moving Castle'}
];

arrayToObj(sourceArray, {
  key: () => shortid.generate()
});
// {
//   qy5Tisvbu: { released: '2001', title: 'Spirited Away' },
//   kYzoS40SOn: { released: '2004', title: 'Howl\'s Moving Castle' }
// }
```


## API

### arrayToObj(input, [options])

#### input

Type: `array`

An array of objects to convert to an object.

#### options

Type: `Object`

##### key

Type: `string` or `function`<br>
Default: 'id'

The property to use as a key. The array index is used when the property is undefined.


## License

MIT © [Chris Vogt](https://chrisvogt.me)
