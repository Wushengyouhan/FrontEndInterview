const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

let result = str.matchAll(regexp)
let array = [...result]
console.log(array);

/*
[
  [
    'test1',
    'e',
    'st1',
    '1',
    index: 0,
    input: 'test1test2',
    groups: undefined
  ],
  [
    'test2',
    'e',
    'st2',
    '2',
    index: 5,
    input: 'test1test2',
    groups: undefined
  ]
]
*/