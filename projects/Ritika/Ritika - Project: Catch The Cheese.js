var score = 0;
var speed = 10;
var level = 1;

var traplist = [];

var counterTrap = 0;

class Trap
{
	constructor(type)
	{
		this.type = type;
		if(type == "poison")
		{
			
			this.sprite = createSprite(random(windowWidth),random(windowHeight), 150, 137);
			this.sprite.addImage(poison);
			this.timer = 100;
		}
		else
		{
			this.type = "mousetrap"; //default
			this.sprite = createSprite(random(windowWidth),random(windowHeight), 150, 137);
			this.sprite.addImage(mousetrap);
			this.timer = 500;
		}
	}
	
	update()
	{
		if(this.timer > 0)
		{
			this.timer -= 1
		}
	}
}

/*
todo:

replace mouzetraps that have been touched
another type of mouse trap that removes 5 points

*/
function preload() {
	cheese = loadImage("cheese.png");
	mouse = loadImage("mouse.png");
	mousetrap = loadImage("mousetrap.png");
	poison = loadImage("poison.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	cheeze = createSprite(random(windowWidth),random(windowHeight), 30, 30);
	
	cheeze.addImage(cheese)
	
	mouze = createSprite(windowWidth/2, windowHeight/2, 30, 30);
	
	mouze.addImage(mouse);
	
	cheeze.velocity.x = random(-5,5)
	cheeze.velocity.y = random (-5,5)
	cheeze.onKeyPressed = move;
	
	setTimeout(addTrap,10000);
	setTimeout(addPoison,5000);
}

function addTrap(){
	
	
		mouzetrap = new Trap()

		
		traplist.push(mouzetrap);
		var number = counterTrap;

		counterTrap++;

	
	
	
	setTimeout(addTrap,10000);
}

function addPoison(){
	
		poisontrap = new Trap("poison");

		
		traplist.push(poisontrap);
		var number = counterTrap;

		counterTrap++;
	
	
	setTimeout(addPoison,5000);
}

function draw() {
	background(100);
	background(255, 0, 128)
	drawSprites();
	textSize(25);
	move()
		
	text("Score: " + score, 100, 100)
	//text("Level: " + level, 100, 150)
	
	if (keyIsPressed) {
		if (keyCode == LEFT_ARROW){
			if (mouze.position.x > 70){
				mouze.position.x -= speed;
			}
			endGame()
		}
		if (keyCode == RIGHT_ARROW){
			if (mouze.position.x < windowWidth - 70){
				mouze.position.x += speed;
			}
			endGame()
		} 
		if (keyCode == UP_ARROW){
			if(mouze.position.y > 70){
				mouze.position.y -= speed;
			}
			endGame()
		}
		if (keyCode == DOWN_ARROW){
			if (mouze.position.y < windowHeight - 70) {
			mouze.position.y += speed;
			}
			endGame()
		}
	}
	here()
}

function here() {

	if(mouze.overlap(cheeze)){
		score += 1;
		cheeze.position.x = random(windowWidth - 160) + 80;
		cheeze.position.y = random(windowHeight - 160) + 80;
			if (score % 10 == 0) {
				if(cheeze.velocity.x < 0){
					cheeze.velocity.x -= 3;
				}
				else {
					cheeze.velocity.x += 3;
				}
				if (cheeze.velocity.y < 0){
					cheeze.velocity.y -= 3;
				}
				else {
					cheeze.velocity.y += 3;
				}
			}			
	}
	
	for (var i = 0; i < traplist.length; i++){
		traplist[i].update();
		if(traplist[i].timer == 0)
		{
			traplist[i].sprite.visible = false;
		}
		else if (traplist[i].sprite.visible && traplist[i].sprite.overlap(mouze)){
			if(traplist[i].type == "poison")
			{
				score -= 5;
			}
			else
			{	
				score -= 2;
			}
			traplist[i].sprite.visible = false;
			//TODO: replace mouzetrap
			counterTrap--;
		}
	}
}

function move(){

		/* if (touching top ede or bottom){
		change y velocity to negative
}			elif(touching right edge or ft edge){
		change x velocity to neg}
		else{
					cheeze.velocity.x = random(-5,5);
			cheeze.velocity.y = random(-5,5);

		}
		
}
	*/

	function SOHCAHTOA(){
		var vx = cheeze.velocity.x;
		var vy = cheeze.velocity.y;
		var totalV = Math.sqrt(vx*vx + vy*vy);
		
		var oldTheta = Math.atan2(vy, vx) * 180 / Math.PI;
		var change = (random(30)-15);
		var newTheta = oldTheta + change;
		newTheta = newTheta * Math.PI / 180;
		
		cheeze.velocity.x = totalV * Math.cos(newTheta)
		if((vx < 0 && cheeze.velocity.x > 0) || (vx > 0 && cheeze.velocity.x < 0))
		{
			cheeze.velocity.x = -1 * cheeze.velocity.x;
		}
		
		cheeze.velocity.y = totalV * Math.sin(newTheta)
		if((vy < 0 && cheeze.velocity.y > 0) || (vy > 0 && cheeze.velocity.y < 0))
		{
			cheeze.velocity.y = -1 * cheeze.velocity.y;
		}
	}
	
	
	if (cheeze.position.y > windowHeight - 70 || cheeze.position.y < 70) {
		// console.log(velocity.y)
		

		y = cheeze.velocity.y;
		cheeze.velocity.y = -y;
		SOHCAHTOA();
		/*
		newVX = random(15)+2;
		if(cheeze.velocity.x < 0){
			cheeze.velocity.x = newVX * -1;
		}
		else{
			cheeze.velocity.x = newVX;
		}
		*/
	}
	
	if (cheeze.position.x < 70 || cheeze.position.x > windowWidth - 70) {
		x = cheeze.velocity.x;
		cheeze.velocity.x = -x;
		SOHCAHTOA();
		/*
		newVY = random(15)+2;
		if(cheeze.velocity.y < 0){
			cheeze.velocity.y = newVY * -1;
		}
		else{
			cheeze.velocity.y = newVY;
		}
		*/
	}
}



function speedup() {
	if(score%10 == 0 && score > 0){
		speed += 15;
		level += 1;
		text("Level: " + level, 100, 150);
	}
	
}

function endGame(){
	if (score >= 50){
		textSize(400    )
		text("You Win!", windowWidth/8, 7 * windowHeight/8)
	}
}
