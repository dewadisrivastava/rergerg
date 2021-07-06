var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var option=0
var form, player, game;


function setup(){
  canvas = createCanvas(700,700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 
  if(playerCount === 2){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
    
  
  }

  
}
