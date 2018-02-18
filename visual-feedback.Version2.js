

var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;


function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playingA) {
    noStroke();
    fill(204, 51, 255);
   ellipse(56, 46, 55, 55);
  }
 if (playingS) {
   noStroke();
    fill(102, 255, 51);
   
   ellipse(56, 46, 55, 55);
  }  
 if (playingD) {
   noStroke();
    fill(255, 255, 0);
   ellipse(56, 46, 55, 55);
   
  }
  
   if (playingF) {
     noStroke();
    fill(344,22,111);
   ellipse(56, 46, 55, 55);
  }
  
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  playingA= true 
  } else if (key == 'S') {
    osc = oscS;
      playingS= true
  } else if (key == 'D') {
    osc = oscD;
      playingD= true
  } else if (key == 'F') {
    osc = oscF;
      playingF= true
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playingA = false;
        playingS = false;
        playingD = false;
        playingF = false;
        
  }
}
