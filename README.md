# Ping-Pong Game

A classic game of Ping-Pong implemented using JavaScript and CSS. The game features a player-controlled paddle and a computer-controlled paddle trying to hit a bouncing ball.

## How the Project Works

### Structure:

1. **Ball.js**: This file contains the logic for the ball's movement, including its velocity, direction, and collision detection.
2. **Paddle.js**: This file defines the behavior of the paddles, including their movement and position.
3. **index.html**: The main HTML file that structures the game elements.
4. **script.js**: The main script that integrates the Ball and Paddle classes and controls the game loop.
5. **styles.css**: Contains the styling for the game elements.

### Code Overview:

- **Ball**:
  - The ball has properties like x and y coordinates, direction, and velocity.
  - The `update` method updates the ball's position and checks for collisions.
  - The ball's direction changes when it hits the top/bottom of the window or any paddle.
  - [View Ball.js](https://github.com/AdityaOjhalang/Ping-Pong/blob/main/Ball.js)

- **Paddle**:
  - The paddle has a position property.
  - The `update` method of the computer paddle adjusts its position based on the ball's y-coordinate.
  - [View Paddle.js](https://github.com/AdityaOjhalang/Ping-Pong/blob/main/Paddle.js)

- **Game Loop**:
  - The game loop is controlled by the `update` function in `script.js`.
  - The ball and computer paddle positions are updated in each frame.
  - The game checks for a lose condition (ball going out of bounds) and updates scores accordingly.
  - [View script.js](https://github.com/AdityaOjhalang/Ping-Pong/blob/main/script.js)

### Styling:

The game has a dynamic color theme that changes over time. The paddles and ball have a contrasting color to the background for better visibility. The score is displayed at the top of the screen.

- [View styles.css](https://github.com/AdityaOjhalang/Ping-Pong/blob/main/styles.css)

## How to Play:

1. Move your mouse up and down to control the left paddle.
2. Try to hit the ball with your paddle.
3. The computer-controlled paddle on the right will also try to hit the ball.
4. If the ball goes past a paddle, the opposite side scores a point.
5. The game resets after each point.

## Getting Started:

1. Clone the repository.
2. Open the `index.html` file in your browser to start the game.

## Contributions:

Feel free to contribute to the game, suggest improvements, or report any issues!

