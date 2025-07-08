namespace Tankz {
    type Vector = { x: number, y: number };
    type Tank = {
        element: HTMLSpanElement
        position: Vector,
        velocity: Vector,
        rotation: number
    }
    
}
    window.addEventListener("load", hndload);
    const tank: Tank[] = [];
    let timePreviousFrame: number = Date.now();


    function hndload(): void {
        // onclick = () => {
        for (let i: number = 0; i < 1; i++) {

            const tank: Tank = {
                element: document.createElement("span"),
                position: { x: 100 + 30 * i, y: 100 },
                velocity: { x: +10, y: +10 }
                rotation:0
            };
            document.body.appendChild(tank.element);
        }
        move();
}
document.body.appendChild(tank.element)

    //start game loop
    update(0);


function update(_time: number): void{
let timeDelta: number = _time - timePreviousFrame;
timeDelta /= 1000

function move(_timeDelta: number): void {
tank.rotation += 1;
const matrix: string = createMatrix(tank.position, tank.rotation, {x: 40, y: 20})
tank.element.style.transform = matrix;
}
    
timePreviousFrame = timeCurrent;
requestAnimationFrame(move);

function createMatrix(_translation: Vector, _rotation: number, _scale: Vector): string {
const sin: number = Math.sin(Math.PI * _rotation / 180);
const cos: number = Math.cos(Math.PI * _rotation / 180);
const matrix: number[] = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];

return "matrix(" + matrix.toString() + ")"

    }

}