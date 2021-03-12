let capture;
let frameCount=0;
let c=0;

function preload() {
  myFont = loadFont('DIN.otf');
  instructions = ['Have you ever wondered how computers can look at us? \n Computers have "cameras" that enable them to look at us. \n How do cameras capture images? Let’s learn how cameras capture pictures. \n \n Turn on your webcam by clicking on "Allow" in the pop-up dialogue', 
  'Cameras have a lens that captures light and focuses it on a light-sensitive sensor. \n The sharp image generated is then stored as pixels that the computers can understand.', 
  'Every pixel has a color. Every color is made of the three primary colors: Red, Green and Blue (RGB).\n The values indicate the redness, greenness and blueness of the color. \n Click on any point in the image above to see the RGB values of that point',
  'This image is 800 pixel wide and 600 pixels tall. \n Each pixel is stored as a set of three numbers, Red value, Green value and Blue value. \n Hence, the image is stored in machines as a collection of 800x600 sets of values.',
  'Great job! You now know about how machines see us and how they store data. \n You can now close this window.' ];

  backgroundColors = ['#78e08f', '#fa983a', '#e55039', '#38ada9', '#b8e994', '#b71540', '#079992', '#6a89cc'];
  buttonLabels = ['How do cameras capture pictures?', 'Show me pixels', 'How is this information stored?', 'What about many pictures?', ''];
  camera = loadImage('camera.png');
  overlay = loadImage('overlay.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  button = createButton('>>');
  button.style('font-size', '24px');
  button.position(1100, 800);
  button.mousePressed(next);

  capture = createCapture(VIDEO);
  capture.size(400, 300);
  capture.hide();
  // resetSketch();
}

// function resetSketch(){
//   button = createButton('>>');
//   button.style('font-size', '24px');
//   button.position(1100, 800);
//   button.mousePressed(next);
// }

function draw() {

  background(backgroundColors[frameCount]);
  fill(255);
  textFont(myFont);
  textSize(24);
  noStroke();
  textAlign(CENTER, CENTER);

  // Caption text here
  instruction = text(instructions[frameCount], windowWidth/2, 650);

  // This text style does not work, need to fix later
  textStyle(BOLDITALIC);
  nextThing = text(buttonLabels[frameCount], windowWidth/2, 810);

  // button.style('color', backgroundColors[frameCount]);

  if (frameCount==0){
  	textSize(36);
  	textFont(myFont);
  	noStroke();
  	textAlign(CENTER, CENTER);
  	text('MACHINE PERCEPTION', windowWidth/2, 100);

  	imageMode(CENTER, CENTER);
    // camera icon
  	image(camera, windowWidth/2, 300);
  }

  if (frameCount==1){
    imageMode(CORNER);
    faces = image(capture, 540, 100, 600, 450);
    noFill();
    stroke(245);
    strokeWeight(10);
    rect(540, 100, 600, 450);
  }

  if (frameCount==2){
    imageMode(CORNER);
  	faces = image(capture, 540, 100, 600, 450);
  	noFill();
  	stroke(245);
  	strokeWeight(10);
  	rect(540, 100, 600, 450);

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

    noFill();
    strokeWeight(1);
    stroke(1200);
    rect(mouseX-5, mouseY-5, 10, 10);
  }

  if (frameCount==3){
    imageMode(CORNER);
    faces = image(capture, 540, 100, 600, 450);
    noFill();
    stroke('#0a3d62');
    strokeWeight(10);
    rect(540, 100, 600, 450);

    pixelOverlay = image(overlay, 540, 44, 1112, 566);
  }

}

 function mousePressed(){
 		c = get(mouseX, mouseY);
}

function next(){
	clear();
  // setup();
	frameCount = frameCount +1;

  if (frameCount == 8){
    button.remove();
  }
}
