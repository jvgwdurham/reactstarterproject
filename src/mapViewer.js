var img;
var w, h, tow, toh;
var x, y, tox, toy;
var zoom = .001;
var weatherData;
var iconArray = [];

class cloudObject
{
    static w = 50
    static h = 30
    static severities = {
        1: 0xF8F9A,
        2: 0xCED4DA,
        3: 0x343A40
    }
    constructor(severity)
    {
        null(0);
    }
}

async function preload() {
    img = loadImage("map.png");
    let resp = await fetch("http://api.weatherapi.com/v1/current.json?key=aa343e79c9484c7eadc184343231204&q=54.777965,%20-1.583825")
    weatherData = await resp.json();
    console.log(weatherData)

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    w = tow = img.width*2;
    h = toh = img.height*2;
    x = tox = w / 2;
    y = toy = h / 2;
}

function draw() {
    background(220);
    x = lerp(x, tox, .1);
    y = lerp(y, toy, .1);
    w = lerp(w, tow, .1); 
    h = lerp(h, toh, .1);

    image(img, x-w/2, y-h/2, w, h);

}

function mouseClicked()
{

}

function mouseDragged() {
    tox += movedX * 2;
    toy += movedY * 2;
}

function mouseWheel(event) {
    var e = -event.delta;

    if (e>0) { //zoom in
        for (var i=0; i<e; i++) 
        {
            if (tow>3*width) return; //max zoom
            tox -= zoom * (mouseX - tox);
            toy -= zoom * (mouseY - toy);
            tow *= zoom+1;
            toh *= zoom+1;
        }S
    }
  
    if (e<0) { //zoom out
        for (var i=0; i<-e; i++) {
            if (tow<width*1.5) return; //min zoom
            tox += zoom/(zoom+1) * (mouseX - tox); 
            toy += zoom/(zoom+1) * (mouseY - toy);
            toh /= zoom+1;
            tow /= zoom+1;
        }
    }
}

function windowResized()
{
    resizeCanvas(windowWidth,windowHeight);
}