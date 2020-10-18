const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = [];
  let arr = expr.match(/.{1,10}/g);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
    arr[i] = String(arr[i]);
    if (arr[i] === "NaN") {
      arr[i] = "**********";
    };
    arr[i] = arr[i].match(/.{1,2}/g);
  }

  for (i = 0; i < arr.length; i++) {
    let letter = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "**") {
        result.push(" ");
        break
      };
      if (arr[i][j] === "10") {
        letter = letter + ".";
      };
      if (arr[i][j] === "11") {
        letter = letter + "-";
      };
    }
    result.push(letter);
  }

  for (i = 0; i < result.length; i++) {
    for (let key in MORSE_TABLE) {
      if (result[i] === key) {
        result[i] = MORSE_TABLE[key];
      }
    }
  };

  result = result.join("");
  return result
}

module.exports = {
    decode
}
