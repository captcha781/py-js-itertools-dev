### ITERTOOL-JS

## Installation:
### npm i itertool-js

## Usage:
 ``` javascript
 const iter = require('itertool-js')
 ```

## About:
This npm package is created to bring some functionalites from **Python's Itertools** library.
This package has the functionalities like combinations and permutations from "Python's Itertools" Library.
## Fucntions
 ``` javascript
 combinations(value)
 
 combinations("ABCD") or combinations(['a','b','c','d']) => [ possible unique combinations ]
 
 ```
 The value may be a string or 1 Dimensional array, this function returns an array of possible **unique** combinations.
 
 ``` javascript
 combinations_withreplacement(value)
 
 combinations_withreplacement("ABCD") or combinations_withreplacement(['a','b','c','d']) => [ all possible combinations ]
 ```
 The value may be a string or 1 Dimensional array, this function returns an array of possible **all** combinations.
 
 
 ``` javascript
 permutations(value)
 
 permutations("ABCD") => [ all possible permutations ]
 ```
 The value must be a string , this function returns an array of possible **all** permutations of a given string.
 
### Oher Minor Functions
``` javascript
accumulate(array) => return array
chain(string) => return array
compress(['a','b','c','d','e','f'], [1, 0, 1, 1, 0, 0]) => ['a', 'c', 'd']
count(start, step, end) => array
cycle(string,end) => array
from_iterables(iterable(contains all strings [may be multidimentional])) => return array( of single elements)
product(string) => return array of all possible pairs
repeat(item, n) => return array of items for n times
```

