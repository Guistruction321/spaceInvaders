/*
Pseudo code:

Main goals:

4. When the user clicks on the space bar, allow for a projectile to shoot from the ship upward.

5. Create an enemy that can be destroyed when the projectile hits it.

6. Display a win screen if enemy has been destroyed.

Extra credit:
1. Allow the enemy to move in a pattern similar to traditional space invaders.
2. Allow the enemy to be able to hurt the player when touched (one hit kills are ok)
3. Create a way to reset the board
4. Track the users score
  - Number of hits
  - Number of ships remaining
5. Randomize enemy speed.

*/

var shipImage;
var spaceBkg;
var shipX;

var bulletX1;
var bulletY1;
let bulletMove1 = false;

// var bulletX2;
// var bulletY2;
// let bulletMove2 = false;

// var bulletX3;
// var bulletY3;
// let bulletMove3 = false;

// let bullet1 = [bulletX1, bulletY1, bulletMove1];
// let bullet2 = [bulletX2, bulletY2, bulletMove2];
// let bullet3 = [bulletX3, bulletY3, bulletMove3];
// let bullets = [bullet1, bullet2, bullet3];

function preload() {
  shipImage = loadImage('images/spaceship.png');
  spaceBkg = loadImage('images/spacebackground.jpg');
}

function setup() {
  createCanvas(500, 500);
  shipX = width / 2 - 40;
    bulletX1 = width / 2 - 5;
    // bulletX2 = width / 2 - 5;
    // bulletX3 = width / 2 - 5;
    bulletY1 = height - 80;
    // bulletY2 = height - 80;
    // bulletY3 = height - 80;
}

function draw() {
  background("Black");
  image(spaceBkg, 0, 0);

  if (bulletMove1 == false) {
    bulletX1 = shipX + 30;
  }//else if (bulletMove2 == false) {
  //   bulletX2 = shipX + 30;
  // }else if (bulletMove3 == false) {
  //   bulletX3 = shipX + 30;
  // }






  if (keyIsDown(LEFT_ARROW)){
    shipX -= 2;
    if (bulletMove1 == false) {
      bulletX1 +=2;
    }
    // if (bulletMove2 == false) {
    //   bulletX2 +=2;
    // }
    // if (bulletMove3 == false) {
    //   bulletX3 +=2;
    // }
   
  }else if (keyIsDown(RIGHT_ARROW)){
    shipX += 2;
    if (bulletMove1 == false) {
      bulletX1 +=2;
    }
    // if (bulletMove2 == false) {
    //   bulletX2 +=2;
    // }
    // if (bulletMove3 == false) {
    //   bulletX3 +=2;
    // }
  }

  if (shipX + 80 == 500){
    shipX -= 2;
    if (bulletMove1 == false) {
      bulletX1 -=2;
    }
  }else if (shipX == 0){
    shipX += 2;
    if (bulletMove1 == false) {
      bulletX1 +=2;
    }
  }

  square(bulletX1, bulletY1, 10);
  // square(bulletX2, bulletY2, 10);
  // square(bulletX3, bulletY3, 10);

  image(shipImage, shipX , height - 100);

  if (bulletMove1 == false) {
    bulletY1 = 7;
  }/*else if (bulletMove2 == false) {
    bulletY2 = 7;
  }else if (bulletMove3 == false) {
    bulletY3 = 7;
  }*/
   
  if (bulletY1 == 0){
    bulletY1 = height - 80;
    bulletMove1 = false;
  }
  // if (bulletY2 == 0){
  //   bulletY2 = height - 80;
  //   bulletMove2 = false;
  // }
  // if (bulletY3 == 0){
  //   bulletY3 = height - 80;
  //   bulletMove3 = false;
  // }
}

function keyPressed(){
  if (keyCode === 32){
    bulletMove1 = true;
    // bulletMove2 = true;
    // bulletMove3 = true;
  }
}