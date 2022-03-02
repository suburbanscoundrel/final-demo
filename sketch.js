let panel;

let highway = [];
let billboards = [];
let traffic = [];
let restStop = [];
let cross = [];
let highwaySigns = [];
let windmill = [];

let highwayIndex = 1;
let billboardsIndex = 1;
let trafficIndex = 1;
let restStopIndex = 1;
let crossIndex = 1;
let highwaySignsIndex = 1;
let windmillIndex = 1;

let panels = [];

let gutter = 10;

let choices = [1, 2];
let layout = 1;

let fr = 10;

function preload() {
  for (i = 1; i < 5; i++) {
    billboards[i] = loadImage('assets/billboards/' + nf(i, 1, 0) + '.jpeg');
  }

  for (i = 1; i < 4; i++) {
    cross[i] = loadImage('assets/cross/' + nf(i, 1, 0) + '.jpeg');
  }

  for (i = 1; i < 5; i++) {
    highway[i] = loadImage('assets/highway/' + nf(i, 1, 0) + '.jpeg');
  }

  for (i = 1; i < 5; i++) {
    restStop[i] = loadImage('assets/rest stops/' + nf(i, 1, 0) + '.jpeg');
  }

  for (i = 1; i < 5; i++) {
    highwaySigns[i] = loadImage('assets/highway signs/' + nf(i, 1, 0) + '.jpeg');
  }

  for (i = 1; i < 5; i++) {
    traffic[i] = loadImage('assets/traffic/' + nf(i, 1, 0) + '.jpeg');
  }

  for (i = 1; i < 5; i++) {
    windmill[i] = loadImage('assets/windmill/' + nf(i, 1, 0) + '.jpeg');
  }
}


function setup() {
  createCanvas(windowHeight*2/3, windowHeight * 11/12);
  let hDivider = height/4;
  let wDivider = width/3;

  if (layout === 1) {
    let bigPanelHeight = hDivider*2;
    let bigPanelWidth = width;
    let panelWidth = wDivider;
    let panelHeight = hDivider;

    let panelXs = [0, wDivider, wDivider*2, 0, 0, wDivider, wDivider*2];
    let panelYs = [0, 0, 0, hDivider, hDivider*3, hDivider*3, hDivider*3];
    let panelWs = [panelWidth, panelWidth, panelWidth, bigPanelWidth, panelWidth, panelWidth, panelWidth];
    let panelHs = [panelHeight, panelHeight, panelHeight, bigPanelHeight, panelHeight, panelHeight, panelHeight];

    for (let i = 0; i < 7; i++) {
      panels[i] = new Panel(panelWs[i], panelHs[i], panelXs[i], panelYs[i]);
    }
  }

  if (layout === 2) {
    let bigPanelHeight = hDivider*3;
    let bigPanelWidth = wDivider*2;
    let panelWidth = wDivider;
    let panelHeight = hDivider;

    let panelXs = [0, 0, 0, wDivider, 0, wDivider, wDivider*2];
    let panelYs = [0, hDivider, hDivider*2, 0, hDivider*3, hDivider*3, hDivider*3];
    let panelWs = [panelWidth, panelWidth, panelWidth, bigPanelWidth, panelWidth, panelWidth, panelWidth];
    let panelHs = [panelHeight, panelHeight, panelHeight, bigPanelHeight, panelHeight, panelHeight, panelHeight];

    for (let i = 0; i < 7; i++) {
      panels[i] = new Panel(panelWs[i], panelHs[i], panelXs[i], panelYs[i]);
    }

    // if (overlayPresent === true) {
    //   overlay = new Panel(panelWidth, panelHeight, random(0, panelWidth*2), random(panelHeight, height));
    // }
  }

  if (layout === 3) {
    let bigPanelHeight = hDivider*3;
    let bigPanelWidth = width;
    let panelWidth = wDivider;
    let panelHeight = hDivider;

    let panelXs = [0, 0, wDivider, wDivider*2];
    let panelYs = [0, hDivider*3, hDivider*3, hDivider*3];
    let panelWs = [bigPanelWidth, panelWidth, panelWidth, panelWidth];
    let panelHs = [bigPanelHeight, panelHeight, panelHeight, panelHeight];

    for (let i = 0; i < 5; i++) {
      panels[i] = new Panel(panelWs[i], panelHs[i], panelXs[i], panelYs[i]);
    }
  }

  if (layout === 4) {
    let bigPanelHeight = hDivider*3;
    let bigPanelWidth = width;
    let panelWidth = wDivider;
    let panelHeight = hDivider;

    let panelXs = [0, wDivider, wDivider*2, 0];
    let panelYs = [0, 0, 0, hDivider];
    let panelWs = [panelWidth, panelWidth, panelWidth, bigPanelWidth];
    let panelHs = [panelHeight, panelHeight, panelHeight, bigPanelHeight];

    for (let i = 0; i < 5; i++) {
      panels[i] = new Panel(panelWs[i], panelHs[i], panelXs[i], panelYs[i]);
    }
  }

  frameRate(fr);
}
  
function draw() {
  for (let i = 0; i < panels.length; i++) {
    panels[i].drawPanel();
    panels[i].display();
  }

  animate(highway, highwayIndex, 0, 0, 200, 200);

  animate(billboards, billboardsIndex, 250, 0, 200, 200);

  animate(traffic, trafficIndex, 500, 0, 200, 200);

  animate(highwaySigns, highwaySignsIndex, 0, 300, width, 400);

  animate(cross, crossIndex, 0, 800, 200, 200);

  animate(restStop, restStopIndex, 250, 800, 200, 200);

  animate(windmill, windmillIndex, 500, 800, 200, 200);



  //image(earlAnim[earlIndex],0,0,earlW, earlW);
  // image(highway[highwayIndex], 0, 0, 200, 200);
  // highwayIndex++;
  // if (highwayIndex === highway.length) {
  //   highwayIndex = 1;
  // }

  // image(billboards[billboardsIndex], 250, 0, 200, 200);
  // billboardsIndex++;
  // if (billboardsIndex === billboards.length) {
  //   billboardsIndex = 1;
  // }

  // image(traffic[trafficIndex], 500, 0, 200, 200);
  // trafficIndex++;
  // if (trafficIndex === traffic.length) {
  //   trafficIndex = 1;
  // }

  // image(highwaySigns[highwaySignsIndex], 0, 300, width, 400);
  // highwaySignsIndex++;
  // if (highwaySignsIndex === highwaySigns.length) {
  //   highwaySignsIndex = 1;
  // }

  // image(cross[crossIndex], 0, 800, 200, 200);
  // crossIndex++;
  // if (crossIndex === cross.length) {
  //   crossIndex = 1;
  // }

  // image(restStop[restStopIndex], 250, 800, 200, 200);
  // restStopIndex++;
  // if (restStopIndex === restStop.length) {
  //   restStopIndex = 1;
  // }

  // image(windmill[windmillIndex], 500, 800, 200, 200);
  // windmillIndex++;
  // if (windmillIndex === windmill.length) {
  //   windmillIndex = 1;
  // }
}

function animate(imageArray, index, x, y, w, h) {
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    image(imageArray[index], x, y, w, h);
    updateIndex(imageArray, index);
  } else {
    image(imageArray[index], x, y, w, h);
  }
}

function updateIndex(array, index) {
  index++;
  if (index === array.length) {
    index = 1
  }
  console.log(index);
  return index;
}

class Panel {
  constructor(w, h, x, y) {
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;

    this.panel = createGraphics(this.width, this.height);

    this.bgColor = random(100, 200);
  }

  drawPanel() {
    if((this.x < mouseX) && ((this.x + this.width) > mouseX) && (this.y < mouseY)&&((this.y + this.height) > mouseY)){
      this.panel.background(0);
    } else{
      this.panel.background(this.bgColor);
    }
  }

  display() {
    image(this.panel, this.x, this.y);
  }
}
