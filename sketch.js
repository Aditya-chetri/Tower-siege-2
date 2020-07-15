const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1,ground,bar1,bar2,bar3,barImage,rope1;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1536,700);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(220,400,75,75);
    ground = new Ground(1536/2,698,1536,40);
    base = new Ground(1000, 480, 300, 20);
   
    rope1 = new launcher(box1.body,{x:220,y:350});
    tar1 = new Target(1000, 460, 40, 40);
    tar2 = new Target(1060, 460, 40, 40);
    tar3 = new Target(1030, 460, 40, 40);
    tar4 = new Target(960, 460, 40, 40);
    tar5 = new Target(930, 460, 40, 40);
    tar6 = new Target(1000, 410, 40, 40);
    tar7 = new Target(1000, 410, 40, 40);
    tar8 = new Target(960, 410, 40, 40);
    tar9 = new Target(1040, 400, 40, 40);

}  

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    base.display();
    tar1.display();
    tar2.display();
    tar3.display();
    tar4.display();
    tar5.display();
    tar6.display();
    tar7.display();
    tar8.display();
    tar9.display();

   rope1.display();
   
}

function mouseDragged(){
    if(gameState!=="launched"){
    Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    rope1.fly();
    gameState = "launched";
}

function keyPressed() {
    if(keyCode === 32){
        Matter.Body.setPosition(box1.body,{x:220,y:450});
        
      rope1.attach(box1.body);
       console.log(box1.body.speed);
       gameState = "onSling";
    
    }
}
