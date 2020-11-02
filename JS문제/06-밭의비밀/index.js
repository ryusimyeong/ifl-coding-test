/** 행렬 */
let first = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
];

let second = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4],
  [0, 2, 0, 0, 2],
  [4, 5, 0, 2, 0],
];

// 빈 밭 만들기
let sample = [];

for (let i = 0; i < first.length; i++) {
  sample[i] = new Array(first[0].length);
}

// 두 번째 밭을 90도로 돌리는데, 패턴을 파악하자 
// 각 인덱스를 다 적어보면서 패턴을 파악한다.

for (let i = 0; i < second.length; i++) {
  for (let j = 0; j < second[0].length; j++) {
    sample[i][j] = second[j][second[0].length - 1 - i];
    sample[i][j] += first[i][j]; // 90회전시킨 다음 첫번째 밭의 값을 더한다.
  }
}

console.log(sample);

// sample의 값을 더해보자. 8진법을 사용해보자.
let result = '';
for (let v of sample) {
  console.log(String.fromCharCode(parseInt(v.join(''), 8))); // 8진법의 수를 10진법으로 변환
  result += String.fromCharCode(parseInt(v.join(''), 8));
}

console.log(result);