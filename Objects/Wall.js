class Wall {
	constructor(xpos, ypos, height, width, color) {
		this.xpos = xpos;
		this.ypos = ypos;
		this.height = height;
		this.width = width;
		this.color = color;
	}

	draw(context) {
		context.fillStyle = this.color;
		context.fillRect(this.xpos, this.ypos, this.width, this.height);
	}
}

export default Wall;