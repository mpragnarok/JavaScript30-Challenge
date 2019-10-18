# 07 - Array Cardio Day 2

> This is a demo built up from the practice in [JavaScript 30](https://github.com/wesbos/JavaScript30) without any framework.

[demo](https://mpragnarok.github.io/JavaScript30-Challenge/07_Array-Cardio-Day2/index.html)

Array method practice.

## JavaScript Array method

### Array.prototype.some()

Test at least one element in the array passes the test and return a Boolean value.

```js
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true

```

> 🔗Reference:
>
> [MDN-Array.some()]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some )

### Array.prototype.every()



### Array.prototype.find()

return the first element in the array

```js
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
```

> 🔗Reference:
>
> [MDN-Array.find()]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find )

### Array.prototype.findIndex()

return the index of the first element in the array

```js
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

> 🔗Reference:
>
> [MDN-Array.findIndex()]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex )

## Delete item in array

### Array.prototype.splice()

```
var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
Create a snippet
```

#### `item1, item2, ...` Optional

The elements to add to the array, beginning from `start`. If you do not specify any elements, `splice()` will only remove elements from the array.



```js
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
```

> 🔗Reference:
>
> [MDN-Array.splice()]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice  )

### Array.prototype.slice()

create an new array with .slice(), popular in the Redux world

```js
    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]
    //  [{ text: 'Love this!', id: 523423}, { text: 'You are the best', id: 2039842}, {text: 'Ramen is my fav food ever', id: 123523}, {text: 'Nice Nice Nice!', id: 542328}]
```

