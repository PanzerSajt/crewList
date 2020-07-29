let extFile;
let y;

let inconsolata;

function preload() {
  inconsolata = loadFont('https://raw.githubusercontent.com/googlefonts/Inconsolata/master/fonts/otf/Inconsolata-Black.otf');
  //extFile = join(loadStrings('crew.txt'), "\n");
  extFile = "\n\
Szereplők:\n\
Jóska - Kis Pista\n\
Marika - Nagy Teréz\n\
\n\
Kamera:\n\
Bélabá\n\
\n\
Vágó:\n\
Valaki\n\
"
}


function setup() {
  y=windowHeight/1.5;
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(inconsolata);
  textSize(64);
  textAlign(CENTER);
}

function draw() {
  background(0);

    
  text(extFile, (-1*(windowWidth/2)), y, windowWidth, windowHeight);
  y = y-1.5;
  
  if(y < (-1.8*windowHeight)){
    noLoop();
  }
 
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
