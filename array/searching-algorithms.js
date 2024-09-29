// Linear Search

const arr = [10, 20, 40, 30, 50];
const target = 30;

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}


const result = linearSearch(arr, target);
console.log(result); // Output: 3 (index of 30)


console.log('------------------------------')


// Binary Search 

const sortedArray = [10, 20, 30, 40, 50];
const targetValue = 30;

function binarySearch(sortedArray, target) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (sortedArray[mid] === target) {
            return mid; 
        } else if (sortedArray[mid] < target) {
            start = mid + 1; 
        } else {
            end = mid - 1; 
        }
    }

    return -1; 
}

const binaryResult = binarySearch(sortedArray, targetValue);
console.log(binaryResult); // Output: 2 (index of 30)
