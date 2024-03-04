//Definitions

let direction = { x: 0, y: 0 };
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const musicSound = new Audio("../music/music.mp3");
let speed = 2;
let lastPaintTime = 0;
let snake = [{ x: 13, y: 15 }];
food = [{ x: 13, y: 15 }];

//Funcitons

const main = (currentTime) => {
  window.requestAnimationFrame(main);
  if ((currentTime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = currentTime;
  gameEngine();
};

const gameEngine = () => {
  //Part 1: Updating the snake array and Food
  //Part 2: Display the snake and Food
  //Display the snake
  board.innerHTML = "";
  snake.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add("food");
    board.appendChild(snakeElement);
  });
  //Display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
};

//Logic

window.requestAnimationFrame(main);
