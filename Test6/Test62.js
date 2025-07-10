"use strict";
var Tankz;
(function (Tankz) {
    window.addEventListener("load", hndload);
    let timePreviousFrame = Date.now();
    const tank = {
        element: document.createElement("span"),
        position: { x: 200, y: 200 },
        velocity: { x: 0, y: 0 },
        rotation: 0
    };
    function hndload() {
        document.body.appendChild(tank.element);
        // document.body.addEventListener("mousemove", hndMouseMove);
        document.body.addEventListener("keydown", hndKeys);
        document.body.addEventListener("keyup", hndKeys);
    }
    update(0);
    // function hndMouseMove(_event: MouseEvent): void{
    //     tank.rotation += _event.movementX;
    // }
    let wPressed = false;
    const keys = {};
    function hndKeys(_event) {
        const down = _event.type == "keydown";
        keys[_event.key] = down;
        if (_event.key == "w")
            wPressed = down;
        if (_event.type == "keyup") {
            tank.velocity.x = 0;
            tank.velocity.y = 0;
            return;
        }
        switch (_event.key) {
            case "W:":
            case "ArrowUp":
                let radians = Math.PI * tank.rotation / 180;
                tank.velocity.x = 100 * Math.cos(radians);
                tank.velocity.y = 100 * Math.sin(radians);
                break;
        }
        switch (_event.key) {
            case "S:":
            case "ArrowDown":
                let radians = Math.PI * tank.rotation / 180;
                tank.velocity.x = -100 * Math.cos(radians);
                tank.velocity.y = -100 * Math.sin(radians);
                break;
        }
    }
    function update(_time) {
        let timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        move(timeDelta);
        timePreviousFrame = _time;
        requestAnimationFrame(update);
    }
    function checkKey(_key) {
        return keys[_key];
    }
    // function processINput(): void {
    //     tank.velocity = 0;
    //     if (checkKey("w"))
    //         tank.velocity = 100;
    // }
    function move(_timeDelta) {
        tank.position.x += tank.velocity.x * _timeDelta;
        tank.position.y += tank.velocity.y * _timeDelta;
        tank.rotation += 1;
        const matrix = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 });
        tank.element.style.transform = matrix;
    }
    function createMatrix(_translation, _rotation, _scale) {
        const sin = Math.sin(Math.PI * _rotation / 180);
        const cos = Math.cos(Math.PI * _rotation / 180);
        const matrix = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
        return "matrix(" + matrix.toString() + ")";
    }
    // for (let tank of tanks) {
    //                 tank.position.x += tank.velocity.x * _timeDelta;
    //                 tank.position.y += tank.velocity.y * _timeDelta;
    //                 tank.position.x = (tank.position.x + window.innerWidth) % innerWidth;
    //                 tank.position.y = (tank.position.y + window.innerHeight) % innerHeight;
    //                 tank.element.style.transform = "matrix(10, 0, 0, 10," + tank.position.x + ", " + tank.position.y + ")"; }
})(Tankz || (Tankz = {}));
//# sourceMappingURL=Test62.js.map