// https://takeuforward.org/data-structure/count-digits-in-a-number/
// Given an integer N, write a program to count the number of digits in N.

const N = 10;
// const countDigits = (N) => {
//     if(typeof N !== Number && isNaN(N))
//     return "please provide a valid no";

//     let count = 0;
//     let dividend = N;
//     while(dividend!== 0){
//         dividend = Math.floor(dividend/10);
//         count++;
//     }
//     return count;

//     // O(N)
//     // O(1)
// }

const countDigits = (N) => {
    if(typeof N !== Number && isNaN(N))
    return "please provide a valid no";

    return Math.floor(Math.log10(N) + 1);

    // O(1)
    // O(1)
}

console.log(countDigits(N))