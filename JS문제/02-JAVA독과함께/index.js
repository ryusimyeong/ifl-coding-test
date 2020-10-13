/**
const capacity = [1, 2, 1, 4];

let dogs = [
  {
    name: "루비독",
    age: "95년생",
    jump: "3",
    weight: "4",
  },
  {
    name: "피치독",
    age: "95년생",
    jump: "3",
    weight: "3",
  },
  {
    name: "씨-독",
    age: "72년생",
    jump: "2",
    weight: "1",
  },
  {
    name: "코볼독",
    age: "59년생",
    jump: "1",
    weight: "1",
  }
];

// 생존자: ['씨-독']
/*/
const capacity = [5, 3, 4, 1, 3, 8, 3]
const dogs = [{
  name: "루비독",
  age: "95년생",
  jump: "3",
  weight: "4",
}, {
  name: "피치독",
  age: "95년생",
  jump: "3",
  weight: "3",
}, {
  name: "씨-독",
  age: "72년생",
  jump: "2",
  weight: "1",
}, {
  name: "코볼독",
  age: "59년생",
  jump: "1",
  weight: "1",
},
]

// 생존자 : ['루비독', '씨-독']
/**/

/** 힌트
 * 점프력의 -1 만큼이 돌의 인덱스 
 * 돌의 내구도가 0이하가 되면 빠짐
 * 
 * 차분하게 필요한 변수를 준비하고 경우의 수를 가정한다.
*/

const crossRiver = (capacity, dogs) => {
  const survivor = [];

  for (let dog of dogs) {
    let place = 0; // 개의 위치 -> index
    let isFail = false; // 개가 물에 빠졌는지 판별하는 boolean

    while (place < capacity.length) {
      place += dog.jump / 1; // 개의 위치는 점프력의 누산

      if (place >= capacity.length) break; // 이미 건넜으면 내구도 계산이 필요없다.

      capacity[place - 1] -= dog.weight / 1; // 돌의 내구도는 개의 몸무게 만큼 감한다.

      // 돌의 내구도가 0이하인 곳을 밟는다면?
      if (capacity[place - 1] < 0) {
        isFail = true
        break;
      }
    }
    // 물에 빠지지 않은 개만 추가
    if (!isFail) {
      survivor.push(dog.name);
    }
  }

  return survivor;
}

console.log(crossRiver(capacity, dogs));