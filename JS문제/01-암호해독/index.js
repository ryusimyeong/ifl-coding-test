let data = [
  '   + -- + - + -   ',
  '   + --- + - +   ',
  '   + -- + - + -   ',
  '   + - + - + - +   '
];

const result = data.map(s => {
  s = s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'); // 정규표현식. 공백제거 -> +를 '1'로 변환 -> -를 '0'으로 변환
  s = parseInt(s, 2); // 2진수였던 수를 10진수로 변경
  s = String.fromCharCode(s); // 해당 숫자를 아스키 코드로 이용하여 글자 반환
  return s;
}).join(''); // 글자 병합

// for (let s of data) {
//   s = String.fromCharCode(parseInt(s.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2))
//   result = result + s;
// }

console.log(result); // JEJU