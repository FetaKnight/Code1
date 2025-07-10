namespace Tankz {
    type Vector = { x: number, y: number };
    type Tank = {
        element: HTMLSpanElement
        position: Vector,
        velocity: Vector,
        rotation: number
    }
    

    window.addEventListener("load", hndload);
    let timePreviousFrame: number = Date.now();
    const tank: Tank = {
        element: document.createElement("span"),
        position: { x: 200, y: 200 },
        velocity: { x: 0, y: 0 },
        rotation: 0
    }

    function hndload(): void {
    document.body.appendChild(tank.element);
    // document.body.addEventListener("mousemove", hndMouseMove);
    document.body.addEventListener("keydown", hndKeys);
    document.body.addEventListener("keyup", hndKeys);
}
update(0);


// function hndMouseMove(_event: MouseEvent): void{
//     tank.rotation += _event.movementX;
// }

let wPressed: boolean = false
const keys: {[key: string]: boolean} = {};
function hndKeys(_event: KeyboardEvent): void{
    const down: boolean = _event.type == "keydown"
       keys[_event.key] = down;
    
    if (_event.key == "w")
        wPressed = down;
    
    
    
    if (_event.type == "keyup") {
        tank.velocity.x = 0;
        tank.velocity.y = 0;
        return;
    }

    switch(_event.key) {
    case "W:":
    case "ArrowUp":
        let radians: number = Math.PI * tank.rotation / 180;
        tank.velocity.x = 100 * Math.cos(radians);
        tank.velocity.y = 100 * Math.sin(radians);
        break;
    
}

    switch(_event.key) {
    case "S:":
    case "ArrowDown":
        let radians: number = Math.PI * tank.rotation / 180;
        tank.velocity.x = -100 * Math.cos(radians);
        tank.velocity.y = -100 * Math.sin(radians);
        break;
    
    }
}


function update(_time: number): void{
let timeDelta: number = _time - timePreviousFrame;
timeDelta /= 1000
move(timeDelta)
timePreviousFrame = _time;
requestAnimationFrame(update);
}

function checkKey(_key: string): boolean {
    return keys[_key]
}


// function processINput(): void {
//     tank.velocity = 0;
//     if (checkKey("w"))
//         tank.velocity = 100;
// }


function move(_timeDelta: number): void {
tank.position.x += tank.velocity.x * _timeDelta;
tank.position.y += tank.velocity.y * _timeDelta;
tank.rotation += 1;
const matrix: string = createMatrix(tank.position, tank.rotation, {x: 40, y: 20})
tank.element.style.transform = matrix;
}
    


function createMatrix(_translation: Vector, _rotation: number, _scale: Vector): string {
const sin: number = Math.sin(Math.PI * _rotation / 180);
const cos: number = Math.cos(Math.PI * _rotation / 180);
const matrix: number[] = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];

return "matrix(" + matrix.toString() + ")"
}

// for (let tank of tanks) {
//                 tank.position.x += tank.velocity.x * _timeDelta;
//                 tank.position.y += tank.velocity.y * _timeDelta;
//                 tank.position.x = (tank.position.x + window.innerWidth) % innerWidth;
//                 tank.position.y = (tank.position.y + window.innerHeight) % innerHeight;
//                 tank.element.style.transform = "matrix(10, 0, 0, 10," + tank.position.x + ", " + tank.position.y + ")"; }

}
