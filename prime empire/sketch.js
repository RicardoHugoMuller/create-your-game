var player, playerImg;
var ground;
var backgroundImg, moitaImg, espinhoImg;
var moita, espinho;
var vidas=185;
var grupoespinhos;
function preload(){
 playerImg = loadImage("player1.png");
 backgroundImg = loadImage("fundo.png");
 espinhoImg = loadImage("espinho.png");
 moitaImg = loadImage("moita.png");
}

function setup() {
  createCanvas(2560, 969);
  player = createSprite (600, 750);
  player.addImage (playerImg);

  ground = createSprite (1500, 750, 3000, 9);
  ground.visible = false;
  moita = createSprite (2000, 700);
  moita.addImage(moitaImg);
  grupoespinhos = new Group();
}

function draw() {
  
  background(backgroundImg);
  if (keyDown("d")){
  player.x = player.x +5
  }
  if (keyDown("a")){
    player.x = player.x -5
  }
  if (keyDown("w")){
    player.velocityY = -15
  }
  player.velocityY += 0.5
  player.collide (ground);

  if(player.isTouching(grupoespinhos)&& vidas > 0){
    vidas = vidas-185 / 4;
    grupoespinhos.destroyEach();
  }
  if(vidas == 0){
    grupoespinhos.setVelocityXEach(0);
    grupoespinhos.destroyEach();
  }
  if(frameCount%80==0){
    espinho = createSprite(moita.x, moita.y);
    espinho.addImage(espinhoImg);
    espinho.velocityX = -(random(5,20));
    espinho.scale = 0.2;
    espinho.lifetime = 300;
    grupoespinhos.add(espinho);
  }
  //createEdgeSprites();
  //player.bounceOff(edges);
  if(vidas > 0){

  
  fill("#ffec01");
  rect(player.x - 100,  player.y - 200, 185, 20);
    fill("#17b7d1");
    rect(player.x - 100,  player.y - 200, vidas, 20);
    noStroke();}
    console.log(vidas);
    drawSprites();
  
}