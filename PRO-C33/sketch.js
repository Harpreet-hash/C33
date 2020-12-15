var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[]

var particle,turn=0,score=0,gameState="play";
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  

  Engine.update(engine);
 
  
   
   if(gameState==="play"){

    if(particle!=null){
      particle.display()
    }
    if (turn===6){
      gameState="end";
    }
    if(particle!=null){     
      
      
      if(particle.body.position.y>495)
      {
        if(particle.body.position.x>10&& particle.body.position.x<329){
          score+=500;
        }
        if(particle.body.position.x>332&& particle.body.position.x<564){
          score+=100;
        }
        if(particle.body.position.x>570&& particle.body.position.x<780){
          score+=200;
        }
        particle=null;
      }
    }
  }
   if(gameState==="end"){
     textSize(20);
    text("Game Over",266,314)
    
   }

   textSize(20)
  text("Score : "+score,20,30);
  text("500",35,500)
  text("500",120,500)
  text("500",200,500)
  text("500",280,500)
  text("100",350,500)
  text("100",430,500)
  text("100",514,500)
  text("200",590,500)
  text("200",670,500)
  text("200",750,500)

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   text(mouseX+" "+mouseY,mouseX,mouseY)
}
function mousePressed(){
  particle=new Particle(mouseX,50,10);
  turn++;
}