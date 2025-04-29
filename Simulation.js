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

		this.ball = [];

		this.update = this.update.bind(this);

		this.canvas.canvasDimensions(Room.width, Room.height, Room.backgroundColor);
	}

	start() {
		requestAnimationFrame(this.update);
		const canvasElement = this.canvas.getCanvas();

		for (var index = 0; index < 3; index++){
			this.ball.push(new Ball(300 * index, 55, 25, "orange"))
		}

		canvasElement.addEventListener("mousedown", (e) => {
			const rect = canvasElement.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;
		
			for (var index = 0; index < 3; index++){
				if (this.ball[index].isPointInside(mouseX, mouseY)) {
					this.ball[index].startDrag(mouseX, mouseY);
				}
			}
		});
		
		canvasElement.addEventListener("mousemove", (e) => {
			const rect = canvasElement.getBoundingClientRect();
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;

			for (var index = 0; index < 3; index++){
			if (this.ball[index].isPointInside(mouseX, mouseY)) {
				canvasElement.style.cursor = "pointer";
			} else {
				canvasElement.style.cursor = "default";
			}
		
			
				this.ball[index].drag(mouseX, mouseY);
			}
		});
		
		canvasElement.addEventListener("mouseup", () => {
			for (var index = 0; index < 3; index++){
				this.ball[index].stopDrag();
			}
		});
	}

	draw(){
		this.canvas.clearCanvas();

		this.rightWall.draw(this.canvas.getContext());
		this.leftWall.draw(this.canvas.getContext());
		this.floor.draw(this.canvas.getContext());

		for (var index = 0; index < 3; index++){
			this.ball[index].draw(this.canvas.getContext());
		}
	}

	update(timestamp) {
		const deltaTime = (timestamp - this.lastTime) / 1000;
		this.lastTime = timestamp;
		this.draw();

		for (var index = 0; index < 3; index++){
			this.ball[index].update(deltaTime);
		}

		requestAnimationFrame(this.update);
	}
}

export default Simulation;