// Sample Input 1:
// 3
// Sample Output 1:
// *         *
// * *     * *
// * * * * * *
// * *     * *
// *         *
// Sample Input 2 :
// 1
// Sample Output 2 :
// *

const distance = (N) => {
  const arr = Array(2 * N - 1)
    .fill(null)
    .map(() => Array(2 * N).fill("0"));

  const totalRowsIndex = 2 * N - 2;
  const totalColsIndex = 2 * N - 1;

  for (let i = 0; i <= totalRowsIndex; i++) {
    const minDistance = Math.min(i, totalRowsIndex - i);
    for (let j = 0; j <= totalColsIndex; j++) {
      //     console.log(i, j)
      //     console.log('j <= i' , j <= i )
      //     console.log('totalColsIndex - j <= j', totalColsIndex - j <= j)
      if (j <= minDistance || totalColsIndex - j <= minDistance) {
        arr[i][j] = "*";
      }
    }
  }

  return arr;
};

console.log(distance(3));
