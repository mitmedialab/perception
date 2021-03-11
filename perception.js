let capture;
let button;
let frameCount=0;
let c=0;

function preload() {
  myFont = loadFont('DIN Alternate Bold.otf');
  instructions = ['Have you ever wondered how computers can look at us? \n Computers have ‘cameras’ that enable them to look at us. \n How do cameras capture images? Let’s try it out. \n Enable your camera', 'Cameras have a lens that captures light and focuses it on a light-sensitive sensor. \n The sharp image generated is then stored as pixels that the computers can understand.', '' ];

  backgroundColors = ['#78e08f', '#fa983a', '#e55039', '#38ada9', '#b8e994', '#b71540', '#079992', '#6a89cc'];
  camera = loadImage('camera.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  capture = createCapture(VIDEO);
  // capture.size(400, 300);
  capture.hide();
  
  button = createButton('Let us find out');
  button.style('font-size', '22px');
  button.position(windowWidth/2-50, 800);
  button.mousePressed(next);
}

function draw() {
  background(backgroundColors[frameCount]);
  fill(255);
  textFont(myFont);
  textSize(26);
  noStroke();
  textAlign(CENTER, CENTER);
  instruction = text(instructions[frameCount], windowWidth/2, 700);

  button.style('color', backgroundColors[frameCount]);

  if (frameCount==0){
  	textSize(36);
  	textFont(myFont);
  	noStroke();
  	textAlign(CENTER, CENTER);
  	text('MACHINE PERCEPTION', windowWidth/2, 100);

  	imageMode(CENTER, CENTER);
  	image(camera, windowWidth/2, 300, 200, 250);
  }

  if (frameCount==1){
  	// capture = createCapture(VIDEO);
  }

  if (frameCount==2){
  	faces = image(capture, windowWidth/2-300, 100, 600, 450);
	noFill();
	stroke('#b8e994');
	strokeWeight(10);
	rect(windowWidth/2-300, 100, 600, 450);

	noStroke();
	fill(c);
	colorRect = rect(1200, 220, 30, 30);
	colorText = text('Color', 1300, 240);

	fill(255,0,0);
	colorRect = rect(1200, 280, 30, 30);
	text(c[0], 1300, 300);

	fill(0,255,0);
	colorRect = rect(1200, 320, 30, 30);
	colorText = text(c[1], 1300, 340);

	fill(0,0,255);
	colorRect = rect(1200, 360, 30, 30);
	colorText = text(c[2], 1300, 380);
}

}

 function mousePressed(){
 		c = get(mouseX, mouseY);
}

function next(){
	clear();
	frameCount = frameCount +1;
}
