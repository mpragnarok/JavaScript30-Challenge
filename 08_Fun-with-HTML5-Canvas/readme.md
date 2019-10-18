# 08 - Fun with HTML5 Canvas


> This is a demo built up from the practice in [JavaScript 30](https://github.com/wesbos/JavaScript30) without any framework.

[demo](https://mpragnarok.github.io/JavaScript30-Challenge/08_Fun-with-HTML5-Canvas/index.html)

HTML5 Canvas.

## HTML5 Canvas

### setup for Canvas

```html
<body>

<canvas id="draw" width="1280" height="800"></canvas>
<script>
	const canvas = document.querySelector('#draw')
    // get canvas context as 2d
    const ctx = canvas.getContext('2d')
    // size of canvas same as window
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // color
    ctx.strokeStyle = '#BADA55'
    // line style setting
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 1
    ctx.globalCompositeOperation = 'multiply'
</script>
    
</body>
 
```



> 🔗Reference:
>
> [MDN-Canvas]( https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial )
>
> [HTML5 Canvas Tutorials](https://www.html5canvastutorials.com/)



> 🔗Reference:
>
> [Mother-effing hsl]( https://mothereffinghsl.com/ )

#### globalCompositeOperation

 property of the Canvas 2D API sets the type of compositing operation to apply when drawing new shapes 

> 🔗Reference:
>
> [MDN-CanvasRenderingContext2D.globalCompositeOperation]( https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation )

