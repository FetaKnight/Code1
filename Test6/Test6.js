"use strict";
var CarControl;
(function (CarControl) {
    let timePreviousFrame = 0;
    let isWKeydown = false;
    let isSKeydown = false;
    let tank;
    window.addEventListener("load", handleLoad);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    function handleLoad() {
        tank = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: 0,
            rotation: 0
        };
        document.body.appendChild(tank.element);
        document.addEventListener("mousemove", handleMouseMove);
        updateloop(0);
    }
    function handleKeyDown(_event) {
        switch (_event.key) {
            case "w":
            case "ArrowUp":
                isWKeydown = true;
                break;
            case "s":
            case "ArrowDown":
                isSKeydown = true;
                break;
        }
    }
    function handleKeyUp(_event) {
        switch (_event.key) {
            case "w":
            case "ArrowUp":
                isWKeydown = false;
                break;
            case "s":
            case "ArrowDown":
                isSKeydown = false;
                break;
        }
    }
    //Handle Mouse Movement
    function handleMouseMove(_event) {
        tank.rotation += _event.movementX;
    }
    //Updating the main Loop
    function updateloop(_time) {
        let timeDelta;
        timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        processMovementInput();
        console.log(isWKeydown);
        RotateCar(timeDelta);
        timePreviousFrame = _time;
        requestAnimationFrame(updateloop);
    }
    //Rotating the car
    function RotateCar(_timeDelta) {
        const radians = Math.PI * tank.rotation / 180;
        tank.position.x += tank.velocity * Math.cos(radians) * _timeDelta;
        tank.position.y += tank.velocity * Math.sin(radians) * _timeDelta;
        const matrix = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 });
        tank.element.style.transform = matrix;
    }
    function createMatrix(_translation, _rotation, _scale) {
        const sin = Math.sin(Math.PI * _rotation / 180);
        const cos = Math.cos(Math.PI * _rotation / 180);
        const matrix = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
        return "Matrix(" + matrix.toString() + ")";
    }
    function processMovementInput() {
        if (isWKeydown && !isSKeydown) {
            tank.velocity = 100;
        }
        else if (isSKeydown && !isWKeydown) {
            tank.velocity = -100;
        }
        else {
            tank.velocity = 0;
        }
    }
})(CarControl || (CarControl = {}));
//# sourceMappingURL=Test6.js.map