"use strict";
window.addEventListener("load", hndload);
const tank = [];
let timePreviousFrame = Date.now();
function hndload() {
    // onclick = () => {
    for (let i = 0; i < 1; i++) {
        const tank = {
            element: document.createElement("span"),
            position: { x: 100 + 30 * i, y: 100 },
            velocity: { x: +10, y: +10 },
            rotation: 0
        };
        document.body.appendChild(tank.element);
    }
    move();
}
document.body.appendChild(tank.element);
//start game loop
update(0);
function update(_time) {
    let timeDelta = _time - timePreviousFrame;
    timeDelta /= 1000;
    function move(_timeDelta) {
        tank.rotation += 1;
        const matrix = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 });
        tank.element.style.transform = matrix;
    }
    timePreviousFrame = timeCurrent;
    requestAnimationFrame(move);
    function createMatrix(_translation, _rotation, _scale) {
        const sin = Math.sin(Math.PI * _rotation / 180);
        const cos = Math.cos(Math.PI * _rotation / 180);
        const matrix = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
        return "matrix(" + matrix.toString() + ")";
    }
}
//# sourceMappingURL=Test6.js.map