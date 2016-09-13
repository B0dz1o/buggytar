ac = new AudioContext();

var playNotes = function(strums, pTempo, pDelay) {
  var tempo = pTempo || 120;
  var delay = pDelay || 0.0;
  var when = ac.currentTime + 0.5;
  var sequence = new TinyMusic.Sequence( ac, tempo, strums );
  sequence.loop = false;
  sequence.staccato = 0.2;
  sequence.waveType = 'sawtooth';
  sequence.play(when);
  return sequence;
};

openGuitar = [
  'E2 q',
  'A2 q',
  'D3 q',
  'G3 q',
  'B3 q',
  'E4 q'
];


// 'B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb',

labamba = ['C3 q', 'E3 e', 'G3 e', 'F3 q', 'A3 e', 'G3 e',
  '- e', 'G2 e', 'B2 e', 'D3 e', 'F3 e', 'F3 e', 'E3 e', 'D3 e',
  'C3 q', 'E3 e', 'G3 e', 'F3 q', 'A3 e', 'G3 e'];

condor = ['B2 q', 'E3 e', 'D#3 e', 'E3 e', 'F#3 e', 'G3 e', 'F#3 e', 'G3 e', 'A3 e',
  'B3 q', '- q', 'D4 e', 'D4 e', 'B3 q', '- q', 'E4 e', 'D4 e', 'B3 q',
  '- q', 'B3 e', 'A3 e', 'G3 e', 'E3 q'];

gfather1 = ['B3 q', 'E4 q', 'G4 q', 'F#4 q', 'E4 q', 'G4 q', 'E4 q', 'F#4 q', 'E4 q',
  'C4 q', 'D4 q', 'B3 q', '- h'];
gfather2 = gfather1.slice(0,-4).concat(['B3 q', 'A#3 q', 'A3 q']);
gfather = gfather1.concat(gfather2);

house_rising1 = aMin.slice(1,4).concat(aMin.slice(0).reverse().slice(0,3));
house_rising2 = cMaj.slice(1,4).concat(aMin.slice(0).reverse().slice(0,3));
house_rising3 = dMaj.slice(2,5).concat(dMaj.slice(0).reverse().slice(0,3));
house_rising4 = fMaj.slice(0,1).concat(fMaj.slice(2,4),
  fMaj.slice(0).reverse().slice(0,3));
house_rising = house_rising1.concat(house_rising2, house_rising3, house_rising4);

love_tender = ['G3 q', 'C4 q', 'B3 q', 'C4 q', 'D4 q', 'A3 q', 'D4 h', 'C4 q',
  'B3 q', 'A3 q', 'B3 q', 'B3 h', 'B3 h'];
love_tender = love_tender.concat(love_tender);

no_woman = ['C4 h', 'B3 e', 'C4 e', 'C4 e', 'A3 e', 'A3 w', 'C4 h', 'F4 e', 'E4 e',
  'D4 e', 'C4 e', 'C4 w'];
no_woman = no_woman.concat(no_woman);

silence = ['E3 e', 'E3 e', 'G3 e', 'G3 e', 'B3 e', 'B3 e', 'A3 w',
  'D3 e', 'D3 e', 'F#3 e', 'F#3 e', 'A3 e', 'A3 e', 'G3 w',
  '- e', 'G3 e', 'G3 e', 'G3 e', 'B3 e', 'B3 e', 'D4 e', 'D4 e'];

twinkle = ['G3 q', 'G3 q', 'D4 q', 'D4 q', 'E4 q', 'E4 q', 'D4 h', 'C4 q',
    'C4 q', 'B3 q', 'B3 q'];
songs = [
  {
    title: "Twinkle, twinkle little star",
    notes: twinkle
  },
  {
    title:'Speak softly love',
    notes: gfather
  },
  {
    title: 'House of the rising sun',
    notes: house_rising,
    tempo: 180
  },
  {
    title: 'Love me tender',
    notes: love_tender
  },
  {
    title: 'Sounds of silence',
    notes: silence
  },
  {
    title: 'El condor pasa',
    notes: condor
  },
  {
    title: "No woman, no cry",
    notes: no_woman
  },
  {
    title: "La bamba",
    notes: labamba
  }
];
