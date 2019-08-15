# 02 - JS and CSS Clock

> This is a demo built up from the practice in [JavaScript 30](https://github.com/wesbos/JavaScript30) without any framework.

![demo 2](../images/Demo_02.png)

[demo](https://mpragnarok.github.io/JavaScript30-Challenge/02_JS-and-CSS-Clock/index.html)

Display clock in browser of real life.

## Steps

1. Get the Date time

2. Convert seconds, minutes and hours from number into the degree.

3. make the second hand, min hand and hour hand rotated by the degree value.

## Note

### CSS

##### transform-orgin

change the position of transform element

```css
div {
  transform: rotate(45deg);
  transform-origin: 20% 40%;
}
```

> 🔗Reference:
> 
> [W3school-transform-origin](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp)

##### transition-timing-function

speed curve of the transition effect

```css
/* make hand go forward and back int the trasition */
transition-timing-function: cubic-bezier(0.42, 0, 0, 2.45);
```

> 🔗Reference:
> 
> [W3school-transition-timing-function](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)

### JavaScript

##### setInterval

`setInterval(*function, milliseconds, param1, param2, ...*)`

```javascript
setInterval(function(){ alert("Hello"); }, 3000);
```

> 🔗Reference:
> 
> [W3school-setInteval](https://www.w3schools.com/jsref/met_win_setinterval.asp)

##### Date.getSeconds

returns the seconds of a date as a number(0-59)

```javascript
const now = new Date();

const seconds = now.getSeconds();
```

| Method            | Description                               |
| ----------------- | ----------------------------------------- |
| getFullYear()     | year(yyyy)                                |
| getMonth()        | month(0-11)                               |
| getDate()         | day(1-31)                                 |
| getHours()        | hour(0-23)                                |
| getMinutes()      | minute(0-59)                              |
| getSeconds()      | second(0-59)                              |
| getMilliseconds() | millisecond(0-999)                        |
| getTime()         | time (milliseconds since January 1, 1970) |
| getDay()          | weekday(0-6)                              |
| Date.now()        | get the time                              |

> 🔗Reference:
> 
> [W3school-Get-Date-Methods](https://www.w3schools.com/js/js_date_methods.asp)

##### DOM style

custom CSS style with DOM element

`element.style.property = value`

```javascript
document.getElementById("myH1").style.color = "red";
```

> 🔗Reference:
> 
> [W3schools-DOM style](https://www.w3schools.com/jsref/prop_html_style.asp)
