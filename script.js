import Ball from "./Ball.js";
import Paddle from "./Paddle.js";

// Create instances of the Ball, Paddle, and Score elements
const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");

let lastTime;

// Update function that runs the game loop
function update(time) {
	// Check if it's not the first frame
	if (lastTime != null) {
		let delta = time - lastTime; // Calculate the time difference between frames
		ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]); // Update the ball's position and check for collisions with paddles
		computerPaddle.update(delta, ball.y); // Update the computer paddle's position based on the ball's y-coordinate

		// Update the hue value for the color animation
		const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));
		document.documentElement.style.setProperty("--hue", hue + delta * 0.01);

		if (isLose()) {
			handleLose(); // Handle the game over condition
		}
	}

	lastTime = time;
	window.requestAnimationFrame(update); // Call the update function on the next frame
}

// Check if the ball is outside the window boundaries
function isLose() {
	const rect = ball.rect();
	return rect.right >= window.innerWidth || rect.left <= 0;
}

// Handle the game over condition
function handleLose() {
	const rect = ball.rect();
	if (rect.right >= window.innerWidth) {
		playerScoreElem.textContent = parseFloat(playerScoreElem.textContent) + 1; // Increase player's score
	} else {
		computerScoreElem.textContent = parseFloat(computerScoreElem.textContent) + 1; // Increase computer's score
	}
	ball.reset(); // Reset the ball's position
	computerPaddle.reset(); // Reset the computer paddle's position
}

// Update the player paddle's position based on mouse movement
document.addEventListener("mousemove", e => {
	playerPaddle.position = (e.y / window.innerHeight) * 100;
});

window.requestAnimationFrame(update); // Start the game loop