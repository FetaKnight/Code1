"use strict";
var Ballz;
(function (Ballz) {
    window.addEventListener("load", hndload);
    const balls = [];
    let timePreviousFrame = Date.now();
    function hndload() {
        // onclick = () => {
        for (let i = 0; i < 1; i++) {
            const ball = {
                element: document.createElement("span"),
                position: { x: 100 + 30 * i, y: 100 },
                velocity: { x: +10, y: +10 }
            };
            document.body.appendChild(ball.element);
            balls.push(ball);
        }
        move();
        function move() {
            const timeCurrent = Date.now();
            let timeDelta = timeCurrent - timePreviousFrame;
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
            function checkCollisionAll() {
                for (const a in balls) {
                    for (const b = a + 1; b < balls.length; b++)
                        ;
                }
            }
            function checkCollisionAll(_a, _b) {
                const aBall = balls[_a];
                const bBall = balls[_b];
                const xDelta = aBall.position.x - bBall.position.x;
                const yDelta = aBall.position.y - bBall.position.y;
                const delta = Math.hypot(xDelta, yDelta);
            }
        }
    }
})(Ballz || (Ballz = {}));
//# sourceMappingURL=Test5Animation.js.map