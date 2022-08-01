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
// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
//0  0010101010
//1  0000000010
//2  0010111010
//3  0010111010
//4  0000111111
//5  **********
//6  0000101111
//7  0000111111
//8  0000101110
//9  0010111010
//10 0000111010

function decode(expr) {
   let count = 0;
   let arr = [];
   let sentence = '';
   for (let i = 0; i < ((expr.length / 10)); i++) {
      let letter = '';
      let arrMorz = '';

      arr.push(expr.slice(i * 10, i * 10 + 10));
      console.log(`arr[${i}]`, arr[i]);
      // if (arr[i].includes('**********')) arr[i] = `sp`;
      for (let j = 0; j < 5; j++) {
         if (arr[i].slice(j * 2, j * 2 + 2) === '10') {
            arrMorz += '.';
         } else if (arr[i].slice(j * 2, j * 2 + 2) === '11') {
            arrMorz += '-';
         } else if (arr[i].slice(j * 2, j * 2 + 2) === '**') {
            arrMorz += '*';
         }
         console.log(arr[i].slice(j * 2, j * 2 + 2), '=', arrMorz);
      }
      for (let key in MORSE_TABLE) {
         if (key === arrMorz) {
            sentence += MORSE_TABLE[key];
            console.log(sentence);
         }
         if (arrMorz === '*****') {
            sentence += ' ';
            console.log(sentence);
            break;
         }
      }
   }
   return sentence;
}
// const res = decode(expr);
// console.log(res);
module.exports = {
   decode
}