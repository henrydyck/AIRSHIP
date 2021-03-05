
var r;
var cannonGroup;
var player1, cargo1;
var enemy1;
var playerImg, bigEnemyImg, smallEnemyImg, cargoImg, baseImg, bg;

//Hovering variables
var i = 0, j = 0;

function preload(){

  playerImg=loadImage("images/player.png");
  bigEnemyImg = loadImage ("images/bigEnemy.png");
  smallEnemyImg = loadImage ("images/smallEnemy.png");
  cargoImg = loadImage ("images/cargo.png");
  baseImg = loadImage ("images/base.png");
  //bg = loadImage ("images/base.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  player1= new Player();
  player1.object.addImage(playerImg);
  player1.object.scale = 0.5;

  //cargo1= new Player();
  //cargo1.object.addImage(cargoImg)
  cannonGroup=createGroup();
  
  enemy1= new Enemy(width-200, 300, 30, 30);
}

function draw() {
  background("green"); 
  //BATTLE REGION

  player1.move();
  player1.attack();
  enemy1.move();
  enemy1.dead();
    
  //10m line - attack line for the base
  line(0, height-200, width, height-200);

  //Base Region
  image(baseImg, 800, height-188, width-800, 200);

  drawSprites();
}