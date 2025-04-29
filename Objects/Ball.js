import Room from "./Room.js"

class Ball {
	constructor(xpos, ypos, radius, color) {
		this.xpos = xpos;
		this.ypos = ypos;
		this.radius = radius;
		this.color = color;
		this.gravityVelocity = 0;
		this.Cor = 0.7;
		this.friction = 0.99;
		this.isDragging = false;
		this.offsetX = 0;
		this.offsetY = 0;
		this.velocityX = 0;
		this.prevMouseX = 0;
		this.prevMouseY = 0;
	}

	isPointInside(x, y) {
		const dx = x - this.xpos;
		const dy = y - this.ypos;
		return dx * dx + dy * dy <= this.radius * this.radius;
	}
	
	startDrag(mouseX, mouseY) {
		this.isDragging = true;
		this.offsetX = mouseX - this.xpos;
		this.offsetY = mouseY - this.ypos;
		this.gravityVelocity = 0;
	}
	
	drag(mouseX, mouseY) {
		if (this.isDragging) {
			this.prevMouseX = this.xpos;
			this.prevMouseY = this.ypos;
		
			this.xpos = mouseX - this.offsetX;
			this.ypos = mouseY - this.offsetY;
		}
	}
	
	stopDrag() {
		this.isDragging = false;
	
		this.velocityX = (this.xpos - this.prevMouseX) * 20;
		this.velocityY = (this.ypos - this.prevMouseY) * 20;
	}

	draw(context) {
		context.beginPath();
		context.fillStyle = this.color; 
		context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
		context.fill();
		context.stroke();
	}

	update(deltaTime){
		if (this.isDragging) return;

		this.gravityVelocity += Room.gravity * deltaTime;

		this.xpos += this.velocityX * deltaTime;
		this.ypos += this.gravityVelocity * deltaTime;
			
		if ((this.ypos + this.radius + Room.wallHeight) > Room.height){
			this.ypos -= (this.ypos + this.radius + Room.wallWidth) - Room.height;
			this.gravityVelocity *= -this.Cor;
		}

		const leftBound = Room.wallWidth + this.radius;
		const rightBound = Room.width - Room.wallWidth - this.radius;

		if (this.xpos < leftBound) {
			this.xpos = leftBound;
			this.velocityX *= -this.Cor;
		}
	
		if (this.xpos > rightBound) {
			this.xpos = rightBound;
			this.velocityX *= -this.Cor;
		}

		if ((this.ypos + this.radius + Room.wallHeight) ==  Room.height){
			this.velocityX *= this.friction;
		}
	}
}

export default Ball;