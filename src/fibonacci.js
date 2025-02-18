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
// let answer = fibs(7);
// console.log(answer);

export function fibsRec(num) {
    let sum;
    let result;

    if (num == 1) {
        return [0];

    }else if (num == 2) {
        return [0, 1]
    }else {
        sum = fibsRec(num - 1);
        result = sum[sum.length -1] + sum[sum.length - 2];
        return sum.concat(result);
    }
    
    
    // for (i == 3; i < num)

}    
console.log(fibsRec(10)) //output should be 34 

