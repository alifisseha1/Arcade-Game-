// Enemies our player must avoid
var Enemy = function(x,y,speed) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/enemy-bug.png';
  this.speed = speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

};
let gameLost = document.getElementById('lost');
let gameWon = document.getElementById('win');
let button1 = document.getElementById('btn');
gameLost.style.color='red';
gameWon.style.color='blue';
button1.style.backgroundColor='lightblue';
let lost = 0;
let won = 0;

function resetF(){
  lost = 0;
  won = 0;
  gameLost.innerHTML = lost;
  gameWon.innerHTML = won;
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;

  if(this.x > 510){
    this.x = -50;
    this.speed = 150 + Math.floor(Math.random() * 200);
  }
  if(player.x < this.x + 80 && player.x +80 > this.x && player.y < this.y +60 && 60 + player.y> this.y){
    player.x = 202;
    player.y = 405;

   lost++;
   gameLost.innerHTML = lost;

  }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x,y){
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
}
Player.prototype.update = function(dt){

}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
}
Player.prototype.handleInput = function(keyPress){
  if(keyPress =='left' && this.x > 0){
    this.x -= 102;
  }
  if(keyPress == 'right' && this.x < 405){
    this.x += 102;
  }
  if(keyPress == 'up' && this.y > 0){
    this.y -= 83;
  }
  if(keyPress == 'down' && this.y < 405){
    this.y -= 83;
  }
  if(this.y < 0){
    setTimeout(function(){
      player.x = 202;
      player.y = 405;
      won++;
      gameWon.innerHTML = won;
    },100);

  }
}
var allEnemies = [];
var enemyLocation = [63,147,230];

enemyLocation.forEach(function(locationY){
  enemy = new Enemy(0,locationY,300);
  allEnemies.push(enemy);
});
var player = new Player(202,405);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
