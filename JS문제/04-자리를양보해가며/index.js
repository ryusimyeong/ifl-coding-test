/** 페이지 알고리즘 
 * LRU 알고리즘
*/
let 동물 = ['척추동물', '어류', '척추동물', '무척추동물', '파충류', '척추동물', '어류', '파충류'];

// 1회: ['척추동물']
// 2회: ['척추동물', '어류']
// 3회: ['어류', '척추동물']
// 4회: ['어류', '척추동물', '무척추동물']
// 5회: ['척추동물', '무척추동물', '파충류']
// 6회: ['무척추동물', '파충류', '척추동물']
// 7회: ['파충류', '척추동물', '어류']
// 8회: ['척추동물', '어류', '파충류']

const solution = (동물, 자리) => {
  let 의자 = [];
  let answer = 0;

  for (let animal of 동물) {
    if (의자.length < 3) { // 의자가 비어 있을 때
      if (의자.includes(animal)) { // 이미 있는 종이 들어올 때
        의자.splice(의자.indexOf(animal), 1); // hit한 동물 제거
        의자.push(animal);
        answer += 1;
      } else { // 없는 종이 들어올 때
        의자.push(animal);
        answer += 60;
      }
    } else { // 의자가 꽉 차 있을 때
      if (의자.includes(animal)) { // 이미 있는 종이 들어올 때
        의자.splice(의자.indexOf(animal), 1); // 맨 앞에 있던 요소 제거
        의자.push(animal); // 맨 앞에 있던 요소를 뒤에 추가
        answer += 1;
      } else { // 없는 종이 들어올 때
        의자.shift(); // 앞에 있던 동물 나간다.
        의자.push(animal);
        answer += 60;
      }
    }
    console.log(의자);
  }
  return `${parseInt(answer / 60, 10)}분 ${answer % 60}초`;
};

console.log(solution(동물, 3));