var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload() {
  // Load images and animations here
  pathImg = loadImage("path_image.png");
  boyImg = loadAnimation("boy_animation1.png", "boy_animation2.png");
}

function setup() {
  createCanvas(400, 400);

  // Create the path sprite and set its properties
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  // Create the boy sprite and set its properties
  boy = createSprite(200, 300);
  boy.addAnimation("running", boyImg);
  boy.scale = 0.08;

  // Create the left boundary sprite and set its properties
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  // Create the right boundary sprite and set its properties
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);

  // Move the boy with the mouse using mouseX
  boy.x = mouseX;

  // Collide the boy with the edges of the canvas
  boy.collide(edges[3]);

  // Code to reset the path's position
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}
