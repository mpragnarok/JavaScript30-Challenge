# 04 - Array Cardio Day 1

> This is a demo built up from the practice in [JavaScript 30](https://github.com/wesbos/JavaScript30) without any framework.

[demo](https://mpragnarok.github.io/JavaScript30-Challenge/03_CSS-variables/index.html)

Array methods practicing.

### Data

```js

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

```



### Array.filter()

return a new array with the condition you setup

```js
   // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const fifteen = inventors.filter(inventor=>
    (inventor.year >= 1500 && inventor.year < 1600))
    console.table(fifteen)
```

> 🔗Reference:
>
> [MDN-filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### Array.map()

return a new array in a same length

```js
// 2. Give us an array of the inventors' first and last names
    
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.log(fullNames)
```

```js
// example from MDN
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```



> 🔗Reference:
>
> [MDN-map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Array.sort()

```js
// Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const ordered = inventors.sort(function(a,  b){
      if(a.year > b.year) {
        return 1
      } else {
        return -1
      }
    })
    console.table(ordered)
    // in arrow and compare function
    const orderedArrow = inventors.sort((a, b)=> a.year - b.year ? 1 : -1)
    console.table(orderedArrow)

    // 5. Sort the inventors by years lived
    const oldest = inventors.sort(function(a, b) {
      const lastGuy = a.passed - a.year
      const nextGuy = b.passed - b.year
      return lastGuy > nextGuy ? -1 : 1
        // return -1, "a" comes first
      console.table(oldest)
    })
```

`? `: return

`: `: else

#### compare function:

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}


```

#### compare function simply subtract `b ` from `a`

```js
function compareNumbers(a, b) {
  return a - b;
}

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```

#### The meaning of return 0, 1, -1

If `compareFunction` is supplied, all non-`undefined` array elements are sorted according to the return value of the compare function (all `undefined` elements are sorted to the end of the array, with no call to `compareFunction`). If `a` and `b` are two elements being compared, then:

- If `compareFunction(a, b)` is **less than 0**, sort `a` to an index lower than `b` (i.e. **`a` comes first**).
- If `compareFunction(a, b)` **returns 0**, **leave `a` and `b` unchanged with respect to each other**, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
- If `compareFunction(a, b)` is **greater than 0**, sort `b` to an index lower than `a` (i.e. **`b` comes first**).
- `compareFunction(a, b)` must always return the same value when given a specific pair of elements `a` and `b` as its two arguments. If inconsistent results are returned, then the sort order is undefined.

> 🔗Reference:
>
> [MDN-sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

### Array.reduce()

build something on every single one

```js
// Array.prototype.reduce()
// 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total , inventor) => {
      return total + (inventor.passed - inventor.year)
    }, 0)
    console.log(totalYears)
//=> 861
```

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

##### If `initialValue` is provided:

 in the call to `reduce()`, then `accumulator` will be equal to `initialValue`, and `currentValue` will be equal to the first value in the array. 

##### If no `initialValue` is provided:

then `accumulator` will be equal to the first value in the array, and `currentValue`will be equal to the second.

> 🔗Reference:
>
> [MDN-reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

#### How reduce() works

```js
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
});
```

| `callback`  | `accumulator` | `currentValue` | `currentIndex` | `array`           | return value |
| :---------- | :------------ | :------------- | :------------- | :---------------- | :----------- |
| first call  | `0`           | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `1`          |
| second call | `1`           | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `3`          |
| third call  | `3`           | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `6`          |
| fourth call | `6`           | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `10`         |

>🔗Reference:
>
>[reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#How_reduce()_works)

### 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

you can call `querySelector `in any existing **DOM** elements to look inside

```js
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category')
const links = Array.from(category.querySelectorAll('a'))
// you can call querySelector in any existing DOM elements to look inside
// querySelector will return NodeList, so we have to convert them into array
const de = links
      .map(link => link.textContent)
      .filter(streetName => streetName.includes('de'))

```



#### Array.from()

create a new array

 `querySelector `will return **NodeList**, so we have to convert them into **array** with `Array.from()`

```js
   // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    const category = document.querySelector('.mw-category')
    const links = Array.from(category.querySelectorAll('a'))
    
    const de = links.map(link => link.textContent)

```

> 🔗Reference:
>
> [MDN-array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

### [...] ES6 spread

spread every single item into the array

spread will take every item out of something and iterable

```js
 const category = document.querySelector('.mw-category')
    const links = [...category.querySelectorAll('a')]
```

### 7. sort people name Exercise alphabetically

#### Step

1. `.sort()`
2. `split `the name with comma and space
3. de-structure array

```js
// 7. sort Exercise
// Sort the people alphabetically by last name
    const alpha = people.sort(function(lastOne, nextOne) {
      const [aLast, aFirst] = lastOne.split(', ') //de-structure array
      const [bLast, bFirst] = nextOne.split(', ')
      return aLast > bLast ? 1 : -1
    })
    console.log(alpha)

```

#### destructuring array

```js

    var greeting, pronoun;
    [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

    console.log(greeting);//"Hello"
    console.log(pronoun);//"I"
```

> 🔗Reference:
>
> https://dev.to/sarah_chima/destructuring-assignment---arrays-16f

#### sort in Object with value and alphabetic

```js
// sort in Object with value and alphabetic
    var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic', value: 13 },
      { name: 'Zeros', value: 37 }
    ];

    // sort by value
    items.sort(function(a, b) {
      return a.value - b.value;
    });

    // sort by name
    const sortByName = items.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    console.table(sortByName)
    // A table list name in a->z
```

> 🔗Reference:
>
> [MDN-sort in Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description)



### 8. Reduce Exercise to create  counting for Object item

```js
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
    const transportation = data.reduce((obj, item) => {
      if (!obj[item]) {
        obj[item] = 0
      }
      obj[item]++
      return obj
    }, {})
    console.log(transportation)
```

