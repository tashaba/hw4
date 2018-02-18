



var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqG = 222
var freqH = 111
var freqJ = 344
var freqK = 136
var freqL = 264

var oscA, oscS, oscD, oscF, oscG, oscH, oscJ, oscK, oscL;

var playing = false;

function setup() {
  backgroundColor = color(122, 22, 255);
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
	
	oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
	
	oscH = new p5.Oscillator();
  oscH.setType('triangle');
  oscH.freq(freqH);
  oscH.amp(0);
  oscH.start();
	
	oscJ = new p5.Oscillator();
  oscJ.setType('triangle');
  oscJ.freq(freqJ);
  oscJ.amp(0);
  oscJ.start();
	
	oscK = new p5.Oscillator();
  oscK.setType('triangle');
  oscK.freq(freqK);
  oscK.amp(0);
  oscK.start();
	
	oscL = new p5.Oscillator();
  oscL.setType('triangle');
  oscL.freq(freqL);
  oscL.amp(0);
  oscL.start();
}

function draw() {
  if (playing) {
    background(0, 33, 137);
  } else {
    background(255, 0, 32);
  }
  text('CLICK HERE!,\n Press A-L\n keys to play :)))', width / 2, 40);
}


function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
		} else if (key == 'G') {
    osc = oscG;
	} else if (key == 'H') {
    osc = oscH;
	} else if (key == 'J') {
    osc = oscJ;
	} else if (key == 'K') {
    osc = oscK;
	} else if (key == 'L') {
    osc = oscL;
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
	 } else if (key == 'G') {
    osc = oscG;
	 } else if (key == 'H') {
    osc = oscH;
   } else if (key == 'J') {
    osc = oscJ;
    } else if (key == 'K') {
    osc = oscK;
	} else if (key == 'L') {
    osc = oscL;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
