# 05 - Flex Panel Gallery

> This is a demo built up from the practice in [JavaScript 30](https://github.com/wesbos/JavaScript30) without any framework.

[demo](https://mpragnarok.github.io/JavaScript30-Challenge/05_Flex-Panel-Gallery/index.html)

Flexbox and CSS practicing.

### Step

1. Display flexbox in `panels`
2. setup `flex` and `transition `
3. JavaScript: add function to add a class or remove a class to trigger `transition` and `flex`

## CSS

### flex

make element evenly distribute in the browser.

The `flex` property is a shorthand property for the `flex-grow`, `flex-shrink`, and `flex-basis` properties.

```css
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex: 0 0 200px">3</div>
  <div>4</div>
</div>
```

> 🔗Reference:
>
> [W3Schools-flex](https://www.w3schools.com/css/css3_flexbox.asp)

## CSS combinators

- descendant selector (space)
- child selector (>)
- adjacent sibling selector (+)
- general sibling selector (~)

#### > (Child Selector)

 selects all elements that are the children of a specified element.

```css
div > p {
  background-color: yellow;
}
```

> 🔗Reference:
>
> [W3Schools_CSS-Child-Selector](https://www.w3schools.com/css/css_combinators.asp)

### CSS pseudo-class

> 🔗Reference:
>
> [MDN-pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

#### :first-child

first element among a group of sibling elements.

```css
p:first-child {
  color: lime;
}
```

> 🔗Reference:
>
> [MDN-:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)

### transform

transform methods:

- `translate()`: move element from current position(according X-axis, Y-axis)
- `rotate()`: rotate element clockwise or counter-clockwise from given degree
- `scaleX()`
- `scaleY()`
- `scale()`: increase or decrease the size of element
- `skewX()`
- `skewY()`
- `skew()`: transformation that skews an element in the horizontal direction on the 2D plane.
- `matrix()`: `matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())`

```css
   .panel>*:first-child {
      transform: translateY(-100%);
    }
```



> 🔗Reference:
>
> [W3Schools_transform](https://www.w3schools.com/css/css3_2dtransforms.asp)
>
> [MDN-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function)

## JavaScript

`toggleOpen() `will run on the page load
`toggleOpen` will give the reference to the function, it'll find the function and run

```js

const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    this.classList.toggle('open')
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))

```

