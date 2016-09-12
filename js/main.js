ac = new AudioContext();

var playNotes = function(strums, pTempo) {
  var tempo = pTempo || 120;
  var when = ac.currentTime + 0.5;
  var sequence = new TinyMusic.Sequence( ac, tempo, strums );
  sequence.loop = false;
  sequence.staccato = 0.2;
  sequence.waveType = 'sawtooth';
  sequence.play(when);
}

openGuitar = [
  'E2 q',
  'A2 q',
  'D3 q',
  'G3 q',
  'B3 q',
  'E4 q'
];


// 'B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb',
gfather1 = ['B3 q', 'E4 q', 'G4 q', 'F#4 q', 'E4 q', 'G4 q', 'E4 q', 'F#4 q', 'E4 q',
  'C4 q', 'D4 q', 'B3 q', '- h'];
gfather2 = gfather1.slice(0,-4).concat(['B3 q', 'A#3 q', 'A3 q']);
house_rising1 = aMin.slice(1,4).concat(aMin.slice(0).reverse().slice(0,3));
house_rising2 = cMaj.slice(1,4).concat(aMin.slice(0).reverse().slice(0,3));
house_rising3 = dMaj.slice(2,5).concat(dMaj.slice(0).reverse().slice(0,3));
house_rising4 = fMaj.slice(0,1).concat(fMaj.slice(2,4),
  fMaj.slice(0).reverse().slice(0,3));
playNotes(gfather1.concat(gfather2));
playNotes(house_rising1.concat(house_rising2, house_rising3, house_rising4), 180);
