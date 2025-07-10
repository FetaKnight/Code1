namespace Ballz {
    type Vector = { x: number, y: number };
    type Ball = {
        element: HTMLSpanElement
        position: Vector,
        velocity: Vector
    }

    window.addEventListener("load", hndload);
    const balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();


    function hndload(): void {
        // onclick = () => {
        for (let i: number = 0; i < 1; i++) {

            const ball: Ball = {
                element: document.createElement("span"),
                position: { x: 100 + 30 * i, y: 100 },
                velocity: { x: +10, y: +10 }
            };
            document.body.appendChild(ball.element);

            balls.push(ball);
        }
        move();


function move(): void {
    const timeCurrent: number = Date.now();
    let timeDelta: number = timeCurrent - timePreviousFrame;
    timeDelta /= 1000;
    console.log(timeDelta);

    for (let ball of balls) {
        ball.position.x += ball.velocity.x * timeDelta;
        ball.position.y += ball.velocity.y * timeDelta;

        ball.position.x = (ball.position.x + window.innerWidth) % innerWidth;
        ball.position.y = (ball.position.y + window.innerHeight) % innerHeight;

        ball.element.style.transform = "matrix(10, 0, 0, 10," + ball.position.x + ", " + ball.position.y + ")";
    }
    timePreviousFrame = timeCurrent;
    //setTimeout(move, 16);
    requestAnimationFrame(move);

    function checkCollisionAll(): void {
        for (const a in balls) {
            for (const b: number = a + 1; b < balls.length; b++)
    
            }
    }

function checkCollisionAll(_a: number, _b: number): void {
        const aBall: Ball = balls[_a];
        const bBall: Ball = balls[_b];

        const xDelta: number = aBall.position.x - bBall.position.x
        const yDelta: number = aBall.position.y - bBall.position.y
        const delta: number = Math.hypot(xDelta, yDelta)

        }
    }
}
}