export function mergeSort(array) {
    if (array.length <= 1) {
        return array; 
    }
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    console.log("LEFT", left);
    let right = mergeSort(array.slice(mid));
    console.log("RIGHT ", right);

    return merge(left, right);
}

export function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){
        
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        } 
    }
    while (leftIndex < left.length){
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length){
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;

}   




const testA1 = [3, 2, 1, 13, 8, 5, 0, 1];
const testA2 = [105, 79, 100, 110];

console.log(mergeSort(testA2));
