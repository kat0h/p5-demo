let canvasSize = [300, 300]
let ballNum = 200
let ballRadius = 15
let balls = Array(ballNum)

class Ball {
    constructor(x, y, radius, isMove, col) {
        this.x = x
        this.y = y
        this.radius = radius
        this.isMove = isMove
        this.ballColor = col
    }
    draw() {
        if (this.isMove) {
            this.x = max(0, min(this.x + random(-5, 5), canvasSize[0]))
            this.y = max(0, min(this.y + random(-5, 5), canvasSize[1]))
        }
        noStroke()
        fill(this.ballColor)
        ellipse(this.x, this.y, this.radius / 2)
    }
    calcVel() {
    }
}

function setup() {
    createCanvas(canvasSize[0], canvasSize[1])
    balls[0] = new Ball(
        canvasSize[0] / 2, canvasSize[1] / 2, 20, false, color(0, 0, 0)

    )
    for (let i = 1; i < ballNum; i++) {
        balls[i] = new Ball(
            random(canvasSize[0]), random(canvasSize[1]), ballRadius, true, color(0, 0, 0)
        )
    }
}

function draw() {
    background(255)
    balls.forEach(function(value, _, _) { value.draw() })
    balls.forEach(function(value, index, array) {
        for (let i = 0; i < ballNum; i++) {
            if (index != i) {
                d = sqrt((value.x - array[i].x) ** 2 + (value.y - array[i].y) ** 2)
                if (!(value.isMove && array[i].isMove) && (d < ballRadius / 2)) {
                    value.isMove = false
                }
            }
        }
    })
}
