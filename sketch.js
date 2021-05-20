const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var d = new Array();
var frameCount=0;
var umb;
var u;
var lighting = new Array();
var lightingIMG1, lightingIMG2;

function preload(){
    lightingIMG1 = loadImage("images/thunderbolt/1.png");
    lightingIMG2 = loadImage("images/thunderbolt/2.png");
}

function setup(){
    createCanvas(400, 800);

    engine = Engine.create();
    world = engine.world;

    u = new Um(200, 500, 160,50);

    lighting[0] = createSprite(200,0,200,200);
    lighting[0].addImage(lightingIMG1);
    lighting[0].setLifetime = 50;
    lighting[0].scale = 0.5;
    lighting[0].visible = false;

    lighting[1] = createSprite(300,0,200,200);
    lighting[1].addImage(lightingIMG2);
    lighting[1].setLifetime = 50;
    lighting[1].scale = 0.5;
    lighting[1].visible = false;
}

function draw(){
    background("black");
    Engine.update(engine); 
    frameCount++;

    if (frameCount%30 === 0) {
        for(var iDrop=0; iDrop<10; iDrop++) {
            d[d.length] = new Drop(random(0,500),random(0,100)); 
        }
    }

    for(var iDrop=0; iDrop<d.length; iDrop++) {
        d[iDrop].display();
    }

    if (frameCount%100 === 0) {
        if(lighting[0].visible) {
            lighting[0].visible = false;
            lighting[1].visible = true;
        }
        else {
            lighting[1].visible = false;
            lighting[0].visible = true;
        }
    }
    u.display();
    drawSprites();
}   

function createLighting(){
      var l = createSprite(monkey.x + 1100,380,20,20);
      l.addImage(lighting);
      //oImage.velocityX=-8;
      l.setLifetime = 16;
      l.scale = 0.1;
      obstacleGroup.add(oImage)
}
