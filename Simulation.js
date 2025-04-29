import Ball from "./Objects/Ball.js";
import Room from "./Objects/Room.js";
import CanvasEnv from "./Objects/Canvas.js";
import Wall from "./Objects/Wall.js";

class Simulation {
	constructor(canvasId, dimension) {

		this.lastTime = 0;

		this.canvas = new CanvasEnv(canvasId, dimension);

		this.leftWall = new Wall(0, 0, Room.height, Room.wallWidth, Room.wallColor);
		this.rightWall = new Wall(Room.width - Room.wallWidth, 0, Room.height, Room.wallWidth, Room.wallColor);
		this.floor = new Wall(0, Room.height - Room.wallWidth, Room.wallHeight, Room.width, Room.wallColor);

		this.ball = new Ball(300, 55, 50, "orange");

		this.update = this.update.bind(this);

		this.canvas.canvasDimensions(Room.width, Room.height, Room.backgroundColor);
	}

	start() {
		requestAnimationFrame(this.update);
		const canvasElement = this.canvas.getCanvas();

		let draggingBall = null;
		let offsetX = 0;
    	let offsetY = 0;

		canvasElement.addEventListener("mousedown", (e) => {
			const rect = canvasElement.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;
		
	
			if (this.ball.isPointInside(mouseX, mouseY)) {
				draggingBall = this.ball;
				this.ball.startDrag(mouseX, mouseY);
			}

		});
		
		canvasElement.addEventListener("mousemove", (e) => {
			const rect = canvasElement.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;

			
			if (this.ball.isPointInside(mouseX, mouseY)) {
				canvasElement.style.cursor = "pointer";
				if (draggingBall) {
					draggingBall.x = mouseX - offsetX;
            		draggingBall.y = mouseY - offsetY;
					draggingBall.drag(mouseX, mouseY);
				}
			} else {
				canvasElement.style.cursor = "default";
			}
		});
		
		canvasElement.addEventListener("mouseup", () => {
			if (draggingBall) {
				draggingBall.stopDrag();
				draggingBall = null;
			}
		});

		canvasElement.addEventListener("mouseleave", () => {
			if (draggingBall) {
				draggingBall.stopDrag();
				draggingBall = null;
			}
		});
	}

	

	draw(){
		this.canvas.clearCanvas();

		this.rightWall.draw(this.canvas.getContext());
		this.leftWall.draw(this.canvas.getContext());
		this.floor.draw(this.canvas.getContext());

		
		this.ball.draw(this.canvas.getContext());
	}

	update(timestamp) {
		const deltaTime = (timestamp - this.lastTime) / 1000;
		this.lastTime = timestamp;
		this.draw();

		
		this.ball.update(deltaTime);
		
		requestAnimationFrame(this.update);
	}
}

export default Simulation;