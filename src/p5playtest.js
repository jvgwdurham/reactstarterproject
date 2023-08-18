var targetFrameRate = 240;
let sprite,floor,floor1,floor2;
let prevFrameX,prevFrameY = 0;

function setup() {
  new Canvas(800, 600);
  frameRate(targetFrameRate);
  angleMode(DEGREES)
  world.gravity.y = 10;
  sprite = new Sprite();
  sprite.diameter = 50;
  floor = new Sprite()
  floor.y = 380
  floor.w = 400
  floor.h = 5
  floor.collider = 'kinematic';
  floor1 = new Sprite()
  floor1.y = 355
  floor1.x = 690
  floor1.w = 200
  floor1.h = 5
  floor1.rotation = -30
  floor1.collider = 'kinematic';
  floor2 = new Sprite()
  floor2.y = 355
  floor2.x = 100
  floor2.w = 200
  floor2.h = 5
  floor2.rotation = 30;
  floor2.collider = 'kinematic';
}

function draw() {
  background(200);
  if(kb.pressing('left')){
    sprite.vel.x -= 9.81 * 1/frameRate();
  }
  if(kb.pressing('right')){
    sprite.vel.x += (9.81 * 1/frameRate());
  }
  if(kb.pressing('up')){
    sprite.vel.y -= (19.62 * 1/frameRate());
  }
  if(kb.pressing('down')){
    sprite.vel.y += (19.62 * 1/frameRate());
  }
  if(sprite.collides(floor1))
  {
    let v0 = Math.sqrt((prevFrameX)**2 + (prevFrameY)**2)
    let preAngle = atan(prevFrameY/prevFrameY)
    console.log(v0,sprite.vel.x,sprite.vel.y);
    sprite.x = floor2.x + sprite.diameter+10/2
    sprite.vel.x = v0*abs(sin(180-preAngle));
    sprite.vel.y = -v0*abs(cos(180-preAngle));
    print(sprite.vel.x,sprite.vel.y);

  }
  if(sprite.collides(floor2))
  {
    //ssprite.x = floor1.x + sprite.diameter/2
  }
  prevFrameX = sprite.vel.x
  prevFrameY = sprite.vel.y
}