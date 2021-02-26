var player1;
var enemy1;
var playerImg, bigEnemyImg, smallEnemyImg, cargoImg, baseImg;


function preLoad(){

  playerImg=loadImage("images/player.png");
  bigEnemyImg = loadImage ("images/bigEnemy.png");
  smallEnemyImg = loadImage ("images/smallEnemy.png");
  cargoImg = loadImage ("images/cargo.png");
  baseImg = loadImage ("images/base.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player1= new Player();
  //player1.object.addImage(playerImg);
  
  enemy1= new Enemy(width-200, 300, 30, 30);
}

function draw() {
  background("green"); 
  image(baseImg, 0, height-150, 200, 150);
  //BATTLE REGION

  player1.move();

  //10m line - attack line for the base
  line(0, height-200, width, height-200);

  //Base Region
  rect(0, height-150, width, 150);

  drawSprites();
}