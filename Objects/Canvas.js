import Room from "./Room.js";

class CanvasEnv {

	constructor(element, dimensions){
		this.canvas = document.getElementById(element);
		this.context = this.canvas.getContext(dimensions);
	}

	//getters
	getContext(){
		return this.context;
	}

	getCanvas(){
		return this.canvas;
	}

	//Set room dimensions
	canvasDimensions(width, height, backgroundColor){
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style.background= backgroundColor;
	}

	clearCanvas(){
		this.context.clearRect(0, 0, Room.width, Room.height);
	}
}

export default CanvasEnv;