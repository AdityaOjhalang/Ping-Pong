const INITIAL_VELOCITY = 0.045;
const VELOCITY_INCREASE = 0.000001;

export default class Ball {
	constructor(ballElement) {
		this.ballElement = ballElement;
		this.reset();
	}

	// Get the current x-coordinate of the ball
	get x() {
		return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--x"));
	}

	// Get the current y-coordinate of the ball
	get y() {
		return parseFloat(getComputedStyle(this.ballElement).getPropertyValue("--y"));
	}

	// Set the x-coordinate of the ball
	set x(value) {
		this.ballElement.style.setProperty("--x", value);
	}

	// Set the y-coordinate of the ball
	set y(value) {
		this.ballElement.style.setProperty("--y", value);
	}

	// Get the bounding rectangle of the ball element
	rect() {
		return this.ballElement.getBoundingClientRect();
	}

	// Reset the ball's position, direction, and velocity
	reset() {
		this.x = 50;
		this.y = 50;
		this.direction = {
			x: 0
		};

		// Randomize the initial direction of the ball within specific limits
		while (
			Math.abs(this.direction.x) <= 0.2 ||
			Math.abs(this.direction.x) >= 0.9
		) {
			const heading = getRndInteger(0, 2 * Math.PI);
			this.direction = {
				x: Math.cos(heading),
				y: Math.sin(heading)
			};
		}

		this.velocity = INITIAL_VELOCITY;
	}

	// Update the ball's position and check for collisions
	update(delta, paddleRectsArray) {
		this.x += this.direction.x * this.velocity * delta;
		this.y += this.direction.y * this.velocity * delta;

		this.velocity += delta * VELOCITY_INCREASE;

		const position = this.rect();

		// Check if the ball hits the top or bottom boundary of the window
		if (position.bottom >= window.innerHeight || position.top <= 0) {
			this.direction.y *= -1;
		}

		// Check for collision with any paddle
		if (paddleRectsArray.some(r => checkCollision(r, position))) {
			this.direction.x *= -1;
		}
	}
}

// Check if two rectangles collide
function checkCollision(rect1, rect2) {
	return (
		rect1.left <= rect2.right &&
		rect1.right >= rect2.left &&
		rect1.top <= rect2.bottom &&
		rect1.bottom >= rect2.top
	);
}

// Get a random integer within a given range
function getRndInteger(min, max) {
	return Math.random() * (max - min) + min;
}