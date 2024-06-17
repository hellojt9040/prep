// Input Format: N = 3
// Result:
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

// Input Format: N = 6
// Result:
// 6 6 6 6 6 6 6 6 6 6 6
// 6 5 5 5 5 5 5 5 5 5 6
// 6 5 4 4 4 4 4 4 4 5 6
// 6 5 4 3 3 3 3 3 4 5 6
// 6 5 4 3 2 2 2 3 4 5 6
// 6 5 4 3 2 1 2 3 4 5 6
// 6 5 4 3 2 2 2 3 4 5 6
// 6 5 4 3 3 3 3 3 4 5 6
// 6 5 4 4 4 4 4 4 4 5 6
// 6 5 5 5 5 5 5 5 5 5 6
// 6 6 6 6 6 6 6 6 6 6 6

const spiralWay = (N) => {
  const totalN = N * 2 - 1;
  const arr = Array(totalN)
    .fill(null)
    .map(() => Array(totalN).fill(0));

  let K = 1;
  let initIndex = (N * 2 - 2) / 2;
  let r = initIndex;
  let c = initIndex;

  for (; K <= N; K++) {
    let startIndex = initIndex;
    let continuteCount = K * 2 - 2;
    let tillIndex = startIndex + continuteCount;

    for (r = startIndex; r <= tillIndex; r++) {
      for (c = startIndex; c <= tillIndex; c++) {
        // console.log("row", r, "column", c, "K", K);
        if (!arr[r][c]) {
          arr[r][c] = K;
        }
        // console.log(arr)
      }
    }
    initIndex = startIndex - 1;
    // console.log("next iteration...", "row", r, "column", c);
  }
  return arr; // N3
};

const symetricWay = (N) => {
  const totalRows = N * 2 - 1;
  const arr = Array(totalRows)
    .fill(null)
    .map(() => Array(totalRows).fill(0));
  const centerIndex = N - 1;

  let k = N;
  for (let r = 0; r <= centerIndex; r++) {
    let increasingK = k;
    for (let c = centerIndex; c >= 0; c--) {
      const fillItem = c >= r ? increasingK : ++increasingK;
      const distance = centerIndex - c;
      if (distance === 0) {
        arr[centerIndex * 2 - r][c] = fillItem;
        arr[r][c] = fillItem;
      } else {
        arr[r][centerIndex - distance] = fillItem;
        arr[r][centerIndex + distance] = fillItem;
        arr[centerIndex * 2 - r][centerIndex - distance] = fillItem;
        arr[centerIndex * 2 - r][centerIndex + distance] = fillItem;
      }
    }
    k--;
  }

  return arr;
};
 
const distanceWay = (N) => {
  const totalN = 2 * N - 2;
  for (let r = 0; r <= totalN; r++) {
    for (let c = 0; c <= totalN; c++) {
      const minDistance = Math.min(r, c, totalN - r, totalN - c);
      console.log(3-minDistance);
    }
     console.log('\n')
  }
};

console.log("result", distanceWay(3));
