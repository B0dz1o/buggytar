var playNotes = function(strums) {
  var ac = new AudioContext();
  var tempo = 120;
  var when = ac.currentTime + 0.5;

  for (i = 0 ; i < strums.length ; ++i) {
    var sequence = new TinyMusic.Sequence( ac, tempo, strums[i] );
    sequence.loop = false;
    sequence.staccato = 0.5;
    sequence.waveType = 'sine';
    sequence.play(when + i / 20);
  }
}

var addHarmonics = function(tabs) {
  var strums = [];
  for (i = 0; i < tabs.length; ++i) {
    strums.push([tabs[i]]);
    oct = parseInt(tabs[i][1]);
    // strums.push([tabs[i][0] + (oct+1) + tabs[i].substr(2,2)]);
  }
  playNotes(strums);
}

openGuitar = [
  'E3 q',
  'A3 q',
  'D4 q',
  'G4 q',
  'B4 q',
  'E5 q'
];

guitar = [
  'E3 q',
  'A#3 q',
  'E4 q',
  'A4 q',
  'B4 q',
  'E5 q'
];

guitar2 = [
  'E4 q',
  'A4 q',
  'D5 q',
  'G5 q',
  'B5 q',
  'E6 q'
];
// 'B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb',
gfather = ['B3 q', 'E4 q', 'G4 q', 'F# q', 'E4 q', 'G4 q', 'E4 q', 'F#4 q'];

addHarmonics(guitar);

var ac = new AudioContext();
var tempo = 120;
var when = ac.currentTime + 0.5;

// var sequence = new TinyMusic.Sequence( ac, tempo, guitar );
sequence.loop = false;
sequence.waveType = 'sine';
sequence.play(when);

// addHarmonics(guitar2);
// playchord(guitar2);
