# 06 - Type Ahead

> This is a demo built up from the practice in [JavaScript 30](https://github.com/wesbos/JavaScript30) without any framework.

[demo](https://mpragnarok.github.io/JavaScript30-Challenge/06_Type-Ahead/index.html)

Fetch JSON data.

### Step

1. Fetch JSON data.
2. Find the match string in array.
3. Display matches.

### Body.json()

parse raw body text as JSON.

And spread each data into array.

```js
 const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

    const cities = []
// the rawData have been converted from the raw data into JSON
    fetch(endpoint)
      .then(rawData => rawData.json())
      .then(data => {
        // spread each data into array
        cities.push(...data)
      })
```

### Array.prototype.map()

`map()` creates a new array.

```
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

```js
 function findMatches(wordToMatch, cities) {
      return cities.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
      })
    }
```

> 🔗Reference:
>
> [MDN-map()]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map )
>
> 

### numberWithCommas

```js
// add commas in numbers
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
```

