const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const result = [];
  for (let i = 0; i < expr.length; i += 10) {
    result.push(expr.slice(i, i + 10));
  }

  const result2 = result.map((el) => {
    return el.replace(/^0+/, '');
  });

  const result3 = result2.map((el) => (el === '**********' ? el === ' ' : el));
  const result4 = result3.join().replace(/11/gi, '-');
  const result5 = result4.replace(/10/gi, '.');
  const result6 = result5.replace(/,/g, ' ');
  return result6
    .split(/ | /)
    .map((code) => MORSE_TABLE[code] || ' ')
    .join('');
};
