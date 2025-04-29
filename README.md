# Bouncing Ball

A simple physics-based bouncing ball simulation built using JavaScript, HTML5 Canvas, and basic physics principles. This project demonstrates how to simulate gravity and collision in a 2D environment, where the ball bounces within a confined area.

## Features

- **Gravity Simulation**: The ball falls under the effect of gravity, accelerating as it moves down.
- **Bounce Mechanism**: The ball bounces off the walls with a coefficient of restitution (COR) that determines how much energy is retained after each bounce.
- **Drag Interaction**: You can click and drag the ball to set its starting position and velocity, allowing for interactive simulations.
- **Wall Boundaries**: The ball stays within the boundaries of the room and bounces off the walls (left, right, and bottom).
- **Smooth Animations**: The simulation runs smoothly using the `requestAnimationFrame` API, providing an optimal rendering loop.

## Technologies Used

- **JavaScript**: For physics calculations, DOM manipulation, and event handling.
- **HTML5 Canvas**: For rendering the ball and visual effects.
- **CSS**: For basic styling and layout.
- **Node.js**: For serving the HTML files locally.

## Getting Started

To run the bouncing ball simulation locally, follow these steps:

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.)
- Basic knowledge of HTML, CSS, and JavaScript
- Node.js installed (Visit [Node.js](https://nodejs.org/) to install)

### Steps

1. **Clone the repository to your local machine**:

    ```bash
    git clone https://github.com/sde-mull/Bouncing-Ball.git
    ```

2. **Install dependencies**:

    Navigate to the project directory and install `express`:

    ```bash
    cd bouncing-ball
    npm install express
    ```

3. **Run the Node.js server**:

    Start the server by running the following command:

    ```bash
    node main.js
    ```

4. **Open the simulation**:

    Once the server is running, open your browser and go to:

    ```http://localhost:3000```

    You can interact with the simulation by clicking and dragging the ball. You will see the ball bounce off the walls and interact with gravity as it moves.

## How It Works

- The ball is initially positioned at a starting point, and gravity is applied continuously to the ball’s velocity, causing it to accelerate downwards.
- Upon hitting a wall (the floor in this case), the ball’s velocity is modified according to the coefficient of restitution (COR), which controls the bounce energy.
- The user can drag the ball, which allows them to set the initial conditions of the simulation.
- The Canvas continuously updates to show the motion of the ball, recalculating its position based on the current velocity and gravity.


