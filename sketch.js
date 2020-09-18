const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var bird, slingShot;
var bird2, bird3, bird4,bird5;
var slingShot1, slingShot2, slingShot3, slingShot4, slingShot5;
var ground; //groundy;
var pig3;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    //groundy = loadImage("sprites/tree.png");
}

function setup(){
    var canvas = createCanvas(1400,1200);
    engine = Engine.create();
    world = engine.world;

    pig3 = new Bird(350, 1190);
   // box1 = new Box(300,1190,70,70);
    ground = new Ground(650,1200,1400,20);
    //ground = addImage("tree",groundy);
    /*//platform = new Ground(150, 305, 300, 170);

    //
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);*/

    bird = new Pig(100,100);
    bird2 = new Pig(100,100);
    bird3 = new Pig(100,100);
    bird4 = new Pig(100,100);
    bird5 = new Pig(100,100);

    //log6 = new Log(230,180,80, PI/2);
    slingShot = new Slingshot(pig3.body, { x: 200, y: 1080});
    slingShot1 = new Slingshot(bird2.body, { x: 1040, y: 500});
    slingShot2 = new Slingshot(bird3.body, { x: 1020, y: 700});
    slingShot3 = new Slingshot(bird4.body, { x: 700, y: 690});
    slingShot4 = new Slingshot(bird5.body, { x: 460, y: 900});
    slingShot5 = new Slingshot(bird.body, { x: 500, y: 800});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

   /* if(bird.body.x- pig3.body.x < (pig3.body.width+ bird.body.width)/2){
        Matter.Body.setStatic(bird.body, false);
    }
    if(pig3.body.x- bird2.body.x < (pig3.body.width+ bird2.body.width)/2){
        Matter.Body.setStatic(bird2.body, false);
    }
    if(pig3.body.x- bird3.body.x < (pig3.body.width+ bird3.body.width)/2){
        Matter.Body.setStatic(bird3.body, false);
    }
    if(pig3.body.x- bird4.body.x < (pig3.body.width+ bird4.body.width)/2){
        Matter.Body.setStatic(bird4.body, false);
    }

    if(bird5.body.x- pig3.body.x < (pig3.body.width+ bird5.body.width)/2){
        Matter.Body.setStatic(bird5.body, false);
    }*/

   // box1.display();
    pig3.display();
    slingShot5.display();

    ground.display();
  /*  
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    
    log3.display();

    box5.display();
    log4.display();
    log5.display();*/

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();
   bird5.display();
    //platform.display();
   // log6.display();
    slingShot.display(); 
    slingShot1.display(); 
    slingShot2.display(); 
    slingShot3.display(); 
    slingShot4.display();    
    detectcollison(pig3, bird);
}

function mouseDragged() {

Matter.Body.setPosition(pig3.body,{x: mouseX, y: mouseY});

}

function mouseReleased() {

slingShot.fly();

}

function keyPressed(){

if(keyCode=== 32){
    //Matter.Body.setPosition(pig3.body, {x:235, y:900})
    slingShot.attach(pig3.body);
}

}

function detectcollison(lstone, lmango) {

pig3= lstone.body.position;
bird= lmango.body.position;


var distance=dist(pig3.x, pig3.y, bird.x, bird.y);
if(distance<=lstone.radius+lmango.radius){
    Matter.Body.setStatic(lmango.body,false);
}
}
