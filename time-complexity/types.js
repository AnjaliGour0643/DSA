// it is a function between input and number of operations
// Time complexity represent how the execution time of an algorithm increases with the size of the input
// O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)


// 1. O(1) - Constant Time

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log("hii");
}
console.log("-----------------------")


// 2. O(log n) - Logarithmic Time

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Calculate the mid index
        
        if (arr[mid] === target) {
            return `Element found at index ${mid}`; // If element is found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search in the right half
        } else {
            high = mid - 1; // Search in the left half
        }
    }
    return "Element not found"; // If element is not found
}
console.log(binarySearch(arr, 4));
console.log("-----------------------")


// 3. O(n) - Linear Time

function printAllElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAllElements(arr)
console.log("-----------------------")



// O(n log n) - Log-Linear Time

function quickSort(arr1) {
    if (arr1.length <= 1) {
        return arr1; // Base case: arrays with 0 or 1 element are already sorted
    }

    let pivot = arr1[arr1.length - 1]; // Choosing the last element as the pivot
    let left = [];  // Elements less than the pivot
    let right = []; // Elements greater than the pivot

    for (let i = 0; i < arr1.length - 1; i++) { // Exclude the pivot itself
        if (arr1[i] < pivot) {
            left.push(arr1[i]); // Push to left array if smaller
        } else {
            right.push(arr1[i]); // Push to right array if larger
        }
    }

    // Recursively sort the left and right arrays, and combine with pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let arr1 = [3, 1, 4, 5, 2];
console.log(quickSort(arr1)); // Output: [1, 2, 3, 4, 5]
console.log("-----------------------")


// 5.  O(n²) - Quadratic Time
function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]); // Two nested loops
        }
    }
}
printPairs(arr)
console.log("-----------------------")


// 6. O(2ⁿ) - Exponential Time

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursion leads to exponential growth
}
console.log(fibonacci(6))
console.log("-----------------------")


// 7. O(n!) - Factorial Time

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1); // Calculating factorial involves multiplying each number
}
console.log(factorial(5))