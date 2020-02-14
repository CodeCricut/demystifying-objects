"use strict";

const canvas1 = document.getElementById("canvas1");
const context1 = canvas1.getContext("2d");

// Objects usually represent real world objects.
let ball = {
    x: 100,
    y: 100,
    xspeed: Math.random() * 10,
    yspeed: Math.random() * 10,
    // In most cases, you can use this syntax for methods instead of draw: function() {}
    draw() {
        // When referencing properties on this object, you must go through 'this'
        context1.moveTo(this.x, this.y);
        context1.beginPath();
        context1.arc(this.x, this.y, 20, 0, 2 * Math.PI, false);
        context1.fillStyle = "#fff";
        context1.fill();
    },
    // you can even use functions that are outside of this object, and...
    move: unboundMoveFunction
};

function unboundMoveFunction() {
    // those objects can reference 'this' without any problem. If obj.f() is called, then 'this' refers to obj
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x < 0) {
        this.xspeed = Math.abs(this.xspeed);
    } else if (this.x > canvas1.width) {
        this.xspeed = -Math.abs(this.xspeed);
    }

    if (this.y < 0) {
        this.yspeed = Math.abs(this.yspeed);
    } else if (this.y > canvas1.height) {
        this.yspeed = -Math.abs(this.yspeed);
    }
}

// if we were to do this, then 'this' would be undefined in the function.
// unboundMoveFunction();

//

function setup() {
    canvas1.width = canvas1.parentElement.offsetWidth;
    canvas1.height = canvas1.parentElement.offsetHeight;
}

function draw() {
    requestAnimationFrame(draw);

    context1.fillStyle = "#4b4b4b";
    context1.fillRect(0, 0, canvas1.width, canvas1.height);

    ball.move();
    ball.draw();
}

setup();
draw();
