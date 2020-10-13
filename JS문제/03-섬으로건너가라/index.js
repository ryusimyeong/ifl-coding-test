// 대기인원 
let people = 14000605;

/* 시간 타는사람 누산
 * 9시 / 25명 / 25명
 * 9시 10분 / 15명 / 40명
 * 9시 20분 / 15명 / 55명
 * 9시 30분 / 15명 / 70명
 * 9시 40분 / 15명 / 85명
 * 9시 50분 / 15명 / 100명
 * 1시간마다 100명씩. 9~21시까지니까 하루에 1200명씩 탑승
 */
const CAPACITY_A_DAY = 1200;

console.log('걸린 일수: ' + people / CAPACITY_A_DAY);

const totalDays = people / CAPACITY_A_DAY; // 걸린 일수

let dateCountForYear = 0; // 1년에 몇 일이나 있나

for (let i = 1; i < 11; i++) { // 1월부터 10월까지
  dateCountForYear += 2 ** i;
}

console.log(totalDays / dateCountForYear); // 걸린 연수
console.log(totalDays % dateCountForYear); // 걸린 연도를 뺀 나머지 일 수
let restDays = totalDays % dateCountForYear;

let months = 0;
for (let i = 10; i > 0; i--) {
  months++;

  if (restDays < 2 ** i) break; // 남은 일수가 해당 월의 일수보다 적으면 그 월에서 끝남

  restDays -= 2 ** i;
}

console.log(months) // 걸린월수
console.log(restDays) // 걸린 월 수를 제외한 날짜

console.log((people % CAPACITY_A_DAY) / 100 + 9); // 몇 시

const startMins = [25, 40, 55, 70, 85, 100];

let resultMin = 0;
for (let i in startMins) { // index만 뽑아옴
  if (startMins[i] > (people % CAPACITY_A_DAY) % 100) {
    resultMin = i * 10;
    break;
  }
}

console.log(resultMin);

let date = new Date();

console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

if (resultMin + date.getMinutes() > 60) {
  resultMin = resultMin + date.getMinutes() - 60;
}

const result = (people) => {
  let year = 0;
  let month = 0;
  let day = 0;
  let hour = 0;
  let min = 0;
  let 대기인원 = 14000605;
  let 걸린일수 = 대기인원 / 1200;
  let 일년일수 = 0;
  for (let i = 1; i < 11; i++) {
    일년일수 += 2 ** i;
  }
  year = parseInt(걸린일수 / 일년일수, 10);

  let 나머지일수 = 걸린일수 % 일년일수;
  let 걸린월수 = 0;
  for (let i = 10; i > 0; i--) {
    걸린월수++;
    if (나머지일수 < 2 ** i) {
      break;
    }
    나머지일수 -= 2 ** i;
  }


  const startMins = [25, 40, 55, 70, 85, 100];

  let 최종계산된분 = 0;

  for (let i in startMins) { // index만 뽑아옴
    if (startMins[i] > (대기인원 % 1200) % 100) {
      최종계산된분 = i * 10;
      break;
    }
  }
  최종계산된분 = 최종계산된분 + new Date().getMinutes()
  if (최종계산된분 > 60) {
    최종계산된분 -= 60;
  }

  day = parseInt(나머지일수, 10);
  month = 걸린월수;
  hour = parseInt((대기인원 % 1200) / 100 + 9, 10);
  min = 최종계산된분;

  return `
    ${year}년
    ${month}월
    ${day}일
    ${hour}시
    ${min}분
  `
}

console.log(result())