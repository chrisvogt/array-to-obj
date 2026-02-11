import test from 'ava';
import arrayToObj from './lib/index.js';

test('guards against invalid input types', t => {
  const error = t.throws(() => {
    arrayToObj(123);
  }, {instanceOf: TypeError});

  t.is(error.message, 'Expected an array, got number');
});

test('it uses the id as object keys by default', t => {
  const dogs = [
    {id: 'first-dog', breed: 'Retriever'},
    {id: 'second-dog', breed: 'Catahoula'},
  ];

  t.deepEqual(arrayToObj(dogs), {
    'first-dog': {id: 'first-dog', breed: 'Retriever'},
    'second-dog': {id: 'second-dog', breed: 'Catahoula'},
  });
});

test('it accepts a string as a key selector', t => {
  const options = {key: 'name'};
  const dogs = [
    {created: '2018-09-13T07:00:00.000Z', name: 'Alex'},
    {created: '2018-09-14T09:00:00.000Z', name: 'Jesse'},
  ];

  t.deepEqual(arrayToObj(dogs, options), {
    Alex: {created: '2018-09-13T07:00:00.000Z', name: 'Alex'},
    Jesse: {created: '2018-09-14T09:00:00.000Z', name: 'Jesse'},
  });
});

test('it accepts a key selector function', t => {
  const options = {key: dog => dog.breed.toLowerCase()};
  const dogs = [
    {name: 'Alex', breed: 'Retriever'},
    {name: 'Fingers', breed: 'Catahoula'},
  ];

  t.deepEqual(arrayToObj(dogs, options), {
    retriever: {breed: 'Retriever', name: 'Alex'},
    catahoula: {breed: 'Catahoula', name: 'Fingers'},
  });
});

test('falls back to the array index as a key', t => {
  const options = {key: dog => dog.fake};
  const dogs = [
    {breed: 'Retriever'},
    {breed: 'Catahoula'},
  ];

  const result = arrayToObj(dogs, options);

  t.deepEqual(result, {
    0: {breed: 'Retriever'},
    1: {breed: 'Catahoula'},
  });
});
