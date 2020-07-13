  
    // clears the canvas and then iterates and then draws the new fractal
    // redraw = () => {
    //     resizeCanvas()
    //     this.reset()
    //     console.log(document.getElementById("iterations").value)
    //     this.draw()
    //   }

draw = () => {
    var canvas = document.getElementById("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 21;

    var ctx = canvas.getContext("2d");

    var vector = {x: 10, y: 0}
    var current;
    switch(type) {
        case 'dragon':
            current = {x: canvas.width/2, y: canvas.height/2};
            break;
        case 'gosper':
            current = {x: canvas.width * 3/4, y: canvas.height * 1/10};
            break;
        case 'koch':
            current = {x: 0, y: canvas.height - 5};
            break;
        default:
            break;
    }
    var hold;
    ctx.moveTo(current.x, current.y);
    for (i = 0; i < fractal.length; i++){
        switch(fractal.charAt(i)) {
        case "A":
        case "B":
            ctx.lineTo(current.x + vector.x, current.y + vector.y);
            current.x += vector.x;
            current.y += vector.y;
            break;
        case "F":
            ctx.lineTo(current.x + vector.x, current.y + vector.y);
            current.x += vector.x;
            current.y += vector.y;
            break;
        case "-":
            hold = vector.x;
            vector.x = vector.x * Math.cos(angle) - vector.y * Math.sin(angle);
            vector.y = hold * Math.sin(angle) + vector.y * Math.cos(angle);
            break;
        case "+":
            hold = vector.x;
            vector.x = vector.x * Math.cos(-1 * angle) - vector.y * Math.sin(-1 * angle);
            vector.y = hold * Math.sin(-1 * angle) + vector.y * Math.cos(-1 * angle);
            break;
        default:
            break;
        }
    }
    ctx.stroke();
}

draw();

