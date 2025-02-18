export function fibs(num) {
    let arr = [];
    let firstT = 0;
    let secondT = 1 
    let sum; 

    arr.push(firstT);
    arr.push(secondT);
    let i = 1

    while( i < num) {
        sum = firstT + secondT; 
        firstT = secondT;
        secondT = sum;

        arr.push(sum);
        i = i + 1;
    }
    return arr;
}
let answer = fibs(7);

console.log(answer);
