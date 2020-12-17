var bullet;
var thickness,wall;
var speed,weight;

function setup() {
  createCanvas(1000,400);

  thickness = Math.round(random(22,83));

  speed = Math.round(random(223,321));

  weight = Math.round(random(30,52));

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "grey";
  bullet.velocityX = speed;

  wall = createSprite(600,200,thickness,height/2);
  wall.shapeColor = 80,80,80;

  console.log("speed: ",speed);
  console.log("weight: ",weight);
}

function draw() {
  background("black");  

  if(hasCollied(bullet,wall))
  {
      bulletRightEdge.velocityX = 0;
      var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
      
      if(damage > 10)
      {
          wall.shapeColor = "red";
      }

      if(damage < 10)
      {
          wall.shapeColor = "green";
      }

    }

  drawSprites();
}

function hasCollied(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
      return true;
  }
  return false;
}