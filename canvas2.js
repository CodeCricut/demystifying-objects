"use strict";

const canvas2 = document.getElementById("canvas2");
const context2 = canvas2.getContext("2d");

// Objects usually represent real world objects.
let square = {
    x: 100,
    y: 100,
    xspeed: Math.random() * 10,
    yspeed: Math.random() * 10,
    // In most cases, you can use this syntax for methods instead of draw: function() {}
    draw: () => {
        // Inside arrow functions, 'this' refers to whatever 'this' is in the outermost 'normal' function.
        // We have to explicitly reference the square object to use its properties.
        context2.moveTo(square.x, square.y);
        context2.fillStyle = "#abc";
        context2.fillRect(square.x, square.y, 20, 20);
    },
    message: "inside square",
    move() {
        let message = "inside move";
        let sayMessage = () => console.log(this.message);
        // sayMessage(); // inside move; 'this' in an arrow function will be the first "normal" function parent

        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x < 0) {
            this.xspeed = Math.abs(this.xspeed);
        } else if (this.x > canvas2.width) {
            this.xspeed = -Math.abs(this.xspeed);
        }

        if (this.y < 0) {
            this.yspeed = Math.abs(this.yspeed);
        } else if (this.y > canvas2.height) {
            this.yspeed = -Math.abs(this.yspeed);
        }
    }
};

// if we were to do this, then 'this' would be undefined in the function.
// unboundMoveFunction();

//

function setup2() {
    canvas2.width = canvas2.parentElement.offsetWidth;
    canvas2.height = canvas2.parentElement.offsetHeight;
}

function draw2() {
    requestAnimationFrame(draw2);
    context2.fillStyle = "#4b4b4b";
    context2.fillRect(0, 0, canvas2.width, canvas2.height);

    square.move();
    square.draw();
}

setup2();
draw2();
