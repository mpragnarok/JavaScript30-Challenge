# 03 - Blur photo with CSS variables and JS

> This is a demo built up from the practice in [JavaScript 30](https://github.com/wesbos/JavaScript30) without any framework.

![demo 2](G:/My Drive/coding/JavaScript30-Challenge/images/Demo_03.png)

[demo](https://mpragnarok.github.io/JavaScript30-Challenge/03_CSS-variables/index.html)

Blur and Spacing a photo with CSS and JS.

## Steps

1. Define reusable values `:root` and create usable variables in CSS.
2. Add event listener to controllers  when the mouse moves or value changes.
4. set new properties for image when the event is triggering.

## Note

### CSS

```css
 :root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
    }

    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }

    .h1 {
      color: var(--base);
    }

```



#### Cascading style

:root is CSS [pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) that matches the root element of a tree.

```css
:root { // 
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

> 🔗Reference:
>
> [MDN-:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

#### Cascading variables or CSS variables

Specific values to be **reused** throughout a document.

hey are set using custom property notation (e.g., **--main-color: black;**) and are accessed using the [`var()`](https://developer.mozilla.org/en-US/docs/Web/CSS/var) function (e.g., `color: var(--main-color);`).

```css
// define reusable variabels in css
:root {
            --base: #ffc600;
            --spacing: 10px;
            --blur: 10px;

        }

// access variables with var()
img {
    padding: var(--spacing);
}
```



> 🔗Reference:
>
> [MDN_-_CSS-custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### JavaScript

```js
const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
inputs.forEach(input => input.addEventListener('change', handleUpdate))
```



#### .querySelectorAll

Return all elements as Nodelist

Sometimes people convert Nodelist to array cause there's more feature we can apply

```js
const inputs = document.querySelectorAll('.controls input')
//return Nodelist
```

> 🔗Reference:
>
> [MDN-querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

#### .querySelector

return first element as an  array

```js
const element = document.querySelector(selectors);
```

> 🔗Reference:
>
> [MDN_querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

#### documentElement

return the Element that is the root element of the document, cause we setup CSS `custom variables` in `:root`, so we need to access the root element of the document.

```js
document.documentElement.style.setProperty()
```

> 🔗Reference:
>
> [MDN-documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)

but if we set up `custom variables` in `body`

```css
body {
    --base: #ffc600;
    --spacing: 10px;
    --blur: 10px;
}
```

we can get element and set style in a normal way

```js
document.querySelector('body').style.setProperty()
```

#### setProperty()

set a new value for a property.

```js
style.setProperty(propertyName, value, priority);
```

>🔗Reference:
>
>[MDN-setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)