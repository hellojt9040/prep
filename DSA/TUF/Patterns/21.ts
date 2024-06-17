// Sample Input 1:
// 3
// Sample Output 1:
// ***
// * *
// ***
// Sample Input 2 :
// 5
// Sample Output 2 :
// *****
// *   *
// *   *
// *   *
// *****
// Sample Input 3 :
// 8
// Sample Output 3 :
// ********
// *      *
// *      *
// *      *
// *      *
// *      *
// *      *
// ********

// end rows

const endRows = (N) => {
    const totalN = N - 1;
    for (let i = 0; i <= totalN; i++){
        for (let j = 0; j <= totalN; j++){
            const minDistance = Math.min(i, j, totalN - i, totalN - j)
            if(minDistance === 0){
                console.log('*')
            }
        }
        console.log('\n')
    }
}


const endRowsWithArray = (N) => {
    const arr = Array(N).fill(null).map(()=>Array(N).fill('0'))
    const totalN = N - 1;
    for (let i = 0; i <= totalN; i++){
        for (let j = 0; j <= totalN; j++){
            const minDistance = Math.min(i, j, totalN - i, totalN - j)
            if(minDistance === 0){
                arr[i][j] = '*'
            }
        }
    }
    return arr;
}


console.log(endRowsWithArray(4));

