let msg =
  "Welcome to a universe of infinite possibilities and creativity...".split("");
let intro = [];
let symbol;
let streams = [];

class Letter {
  constructor(x, y, speed) {
    this.value = String.fromCharCode(0x30a0 + round(random(0, 96)));
    this.xPos = x;
    this.yPos = y;
    this.r = round(random(100, 255));
    this.g = round(random(0, 50));
    this.b = this.r;
    this.speed = speed;
    this.size = 20;
    this.interval = round(random(10, 50));
    // this.on = true;
  }

  displaySelf() {
    textSize(this.size);
    fill(this.r, this.g, this.b);
    text(this.value, this.xPos, this.yPos);
    // blur();
  }

  move() {
    this.yPos = this.yPos >= height ? 0 : (this.yPos + this.speed) % height;
  }

  switchValue() {
    if (frameCount % this.interval === 0) {
      this.value = String.fromCharCode(0x30a0 + round(random(0, 96)));
    }
  }

  blur() {
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(this.r, this.g, this.b);
  }
}

class Stream {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.symbols = [];
    this.totalSymbols = round(random(5, 30));
    this.speed = random(2, 8);
  }

  generateSymbols() {
    for (let i = 0; i < this.totalSymbols; i++) {
      symbol = new Letter(this.x, this.y, this.speed);
      this.symbols.push(symbol);
      this.y -= symbol.size;
    }
  }

  render() {
    this.symbols.forEach(function (symbol) {
      fill(symbol.r, symbol.g, symbol.b);
      textSize(symbol.size);
      text(symbol.value, symbol.xPos, symbol.yPos);
      symbol.move();
      symbol.switchValue();
      symbol.blur();
    });
  }
}

class MessageLetter {
  constructor(value, x, y) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.alpha = 0;
    this.size = 20;
  }

  displayLetter() {
    textSize(this.size);
    // textFont("Dancing Script");
    fill(255, 214, 2336, this.alpha);
    text(this.value, this.x, this.y);
  }

  changeAlpha() {
    this.alpha = 255;
  }
}

// function displayText(message) {
//   let tSize = 20;
//   let letterXPos = width / 2;
//   let letterYPos = height / 2;

//   for (i = 0; i < message.length; i++) {
//     textSize(tSize);
//     textFont("Montserrat");
//     fill(200);
//     text(message[i], letterXPos, letterYPos);
//     letterXPos += tSize;
//     if (message[i] === "u" || message[i] === "b") {
//       letterXPos = width / 2 - tSize;
//       letterYPos += 20;
//     }
//   }
// }

// function changeOpacity(message) {
//   let randomIndex = round(random(message.length - 1));
// }

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");
  background(0, 100);
  let x = 0;
  let startX = width / 3;
  let startY = height / 2;
  for (i = 0; i < width / 30; i++) {
    stream = new Stream(x, random(height));
    stream.generateSymbols();
    streams.push(stream);
    x = x + 30;
  }
  for (j = 0; j < msg.length; j++) {
    messageLetter = new MessageLetter(msg[j], startX, startY);
    intro.push(messageLetter);
    startX += messageLetter.size;
    if (
      messageLetter.x > width - messageLetter.size * 11 &&
      messageLetter.value === " "
    ) {
      startX = width / 3;
      startY += messageLetter.size;
    }
  }
  // console.log(intro);
}

function draw() {
  let randomStream = round(random(streams.length - 1));
  background(0, 240);
  // displayText(msg);
  for (i = 0; i < streams.length; i++) {
    streams[i].render();
  }
  for (j = 0; j < intro.length; j++) {
    intro[j].displayLetter();
  }
  streams[randomStream].symbols.splice(
    round(random(streams[randomStream].symbols.length - 1)),
    1
  );
  if (frameCount > 300 && frameCount % 2 === 0) {
    intro[round(random(intro.length - 1))].changeAlpha();
  }
  if (frameCount > 2000) {
    noLoop();
    console.log(streams);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
