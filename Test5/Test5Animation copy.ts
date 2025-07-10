namespace Ballz {
    type Vector = { x: number, y: number };

    type Ball = {
        element: HTMLSpanElement;
        position: Vector;
        velocity: Vector;
    };

    window.addEventListener("load", hndLoad);

    const balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();

    function hndLoad(): void {

        for (let i: number = 0; i < 1; i++) {
            createBall(100 + 30 * i, 100);
        }


        document.body.addEventListener("click", (event: MouseEvent) => {
            const target = event.target as HTMLElement;


            if (!target.classList.contains("ball")) {
                createBall(event.clientX, event.clientY);
            }
        });

        move();
    }

    function createBall(x: number, y: number): void {
        const ballElement = document.createElement("span");
        ballElement.classList.add("ball");
        ballElement.style.position = "absolute";
        ballElement.style.width = "20px";
        ballElement.style.height = "20px";
        ballElement.style.borderRadius = "50%";
        // ballElement.style.backgroundColor = randomColor();
        ballElement.style.pointerEvents = "auto";
        ballElement.style.cursor = "pointer";


        ballElement.addEventListener("click", (e: MouseEvent) => {
            e.stopPropagation();
            removeBall(ballElement);
        });

        document.body.appendChild(ballElement);

        const ball: Ball = {
            element: ballElement,
            position: { x: x, y: y },
            velocity: {
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200
            }
        };

        balls.push(ball);
    }

    function removeBall(element: HTMLSpanElement): void {
        element.remove();
        const index = balls.findIndex(b => b.element === element);
        if (index >= 0) {
            balls.splice(index, 1);
        }
    }
    function update(): void {
        const timeCurrent: number = Date.now();
        let timeDelta: number = timeCurrent = timePreviousFrame;
        timeDelta /= 1000;

        move(timeDelta);
        checkCollisiononAll()


    }

    function move(): void {
        const timeCurrent: number = Date.now();
        let timeDelta: number = timeCurrent - timePreviousFrame;
        timeDelta /= 1000;

        for (let ball of balls) {
            ball.position.x += ball.velocity.x * timeDelta;
            ball.position.y += ball.velocity.y * timeDelta;


            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;

            ball.element.style.transform =
                "matrix(1, 0, 0, 1, " + ball.position.x + ", " + ball.position.y + ")";
        }

        timePreviousFrame = timeCurrent;
        requestAnimationFrame(move);
    }

    //function randomColor(): string {
    // const hue = Math.floor(Math.random() * 360);
    // return `hsl(${hue}, 80%, 50%)`;

}

function checkCollisiononAll(): void {
    for (const a in balls) {
        for (const b: number = a + 1; b < balls.length; b++)
    
        }
}
