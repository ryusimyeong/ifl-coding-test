/** 트리: 깊이우선탐색, 너비우선탐색 
 * 깊이우선탐색 - stack
 * 너비우선탐색 - queue
*/

const graph = {
  100: new Set([67, 66]),
  67: new Set([100, 82, 63]),
  66: new Set([100, 73, 69]),
  82: new Set([67, 61, 79]),
  63: new Set([67]),
  73: new Set([66]),
  69: new Set([66, 65, 81]),
  61: new Set([82]),
  79: new Set([82, 87, 77]),
  65: new Set([69, 84, 99]),
  81: new Set([69]),
  87: new Set([79, 31, 78]),
  77: new Set([79]),
  84: new Set([65]),
  99: new Set([65]),
  31: new Set([87]),
  78: new Set([87])
};

const 깊이우선탐색 = (graph, start) => {
  let 방문 = [];
  let stack = [start];

  while (stack) {
    let n = 0; // 다음 방문할 노드
    n = stack.pop();

    if (!방문.includes(n)) { // 방문한 노드가 아니라면 
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(value => !(new Set(방문).has(value)))); // 아직 방문하지 않은 것들만 담는다.

      for (let v of 차집합) {
        stack.push(v);
      }
      // console.log('방문 : ' + 방문);
      // console.log('stack : ' + stack);
    }

    if (stack.length === 0) {
      break;
    }
  }

  return 방문;
};

console.log(깊이우선탐색(graph, 100));

const 깊이우선탐색최대값 = (graph, start) => {
  let 방문 = [];
  let stack = [start];

  while (stack) {
    let n = 0; // 다음 방문할 노드
    n = stack.pop();

    if (!방문.includes(n)) { // 방문한 노드가 아니라면 
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(value => !(new Set(방문).has(value)))); // 아직 방문하지 않은 것들만 담는다.

      if ([...차집합].length === 0) {
        break;
      }

      stack.push(Math.max(...차집합))

      // console.log('방문 : ' + 방문);
      // console.log('stack : ' + stack);
    }

    if (stack.length === 0) {
      break;
    }
  }

  return 방문;
};

console.log(깊이우선탐색최대값(graph, 100));

const 깊이우선탐색최소값 = (graph, start) => {
  let 방문 = [];
  let stack = [start];

  while (stack) {
    let n = 0; // 다음 방문할 노드
    n = stack.pop();

    if (!방문.includes(n)) { // 방문한 노드가 아니라면 
      방문.push(n);
      let 차집합 = new Set([...graph[n]].filter(value => !(new Set(방문).has(value)))); // 아직 방문하지 않은 것들만 담는다.

      if ([...차집합].length === 0) {
        break;
      }

      stack.push(Math.min(...차집합))

      // console.log('방문 : ' + 방문);
      // console.log('stack : ' + stack);
    }

    if (stack.length === 0) {
      break;
    }
  }

  return 방문;
};

console.log(깊이우선탐색최소값(graph, 100));


let result = '';
for (let v of 깊이우선탐색최대값(graph, 100)) {
  result += String.fromCharCode(v);
}

console.log(result);


let result2 = '';
for (let v of 깊이우선탐색최소값(graph, 100)) {
  result2 += String.fromCharCode(v);
}

console.log(result2);
