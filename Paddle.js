const SPEED = 0.02;

export default class Paddle {
	constructor(paddleElem) {
		this.paddleElem = paddleElem;
		this.reset();
	}

	// Get the current position of the paddle
	get position() {
		return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"));
	}

	// Set the position of the paddle
	set position(value) {
		this.paddleElem.style.setProperty("--position", value);
	}

	// Get the bounding rectangle of the paddle element
	rect() {
		return this.paddleElem.getBoundingClientRect();
	}

	// Update the paddle's position based on the ball's height
	update(delta, ballHeight) {
		this.position += delta * SPEED * (ballHeight - this.position);
	}

	// Reset the paddle's position to the center
	reset() {
		this.position = 50;
	}
}