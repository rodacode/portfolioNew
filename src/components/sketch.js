export default function (sketch) {
    var width = 0;
    var height = 0;
    sketch.setup = function () {
        width = document.getElementById('sketch').clientWidth;
        height = document.getElementById('sketch').clientHeight;
        sketch.createCanvas(width, height);
    }
    sketch.draw = function () {
        sketch.background(255, 255, 255, 30);
        sketch.noStroke();
        sketch.fill(sketch.random(0, 155), sketch.random(100, 255), sketch.random(0, 155), sketch.random(0, 25));
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 110, 110);

    }
    sketch.windowResized = function () {
        width = document.getElementById('sketch').clientWidth;
        height = document.getElementById('sketch').clientHeight;
        sketch.resizeCanvas(width, height);
    }
}