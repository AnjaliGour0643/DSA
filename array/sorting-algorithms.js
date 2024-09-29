const array = [64, 34, 25, 12, 22, 11, 90];

console.log("Original Array:", array.slice());

// Bubble Sort: Compares adjacent elements and swaps them if they are in the wrong order. Repeated until the array is sorted.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n-i-1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("Bubble Sort:", bubbleSort(array.slice()));


// Selection Sort: Finds the minimum element and swaps it with the first unsorted element, progressively sorting the array.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let minIndex = i;
        // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap using a temporary variable
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log("Selection Sort:", selectionSort(array.slice()));

// Insertion Sort: Builds the sorted array one item at a time by inserting each new item into its correct position.
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        // Move elements of arr[0..i-1] that are greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insert key at the right position
        arr[j + 1] = key;
    }
    return arr;
}

console.log("Insertion Sort:", insertionSort(array.slice()));

// Merge Sort: Recursively divides the array in half and merges the sorted halves.
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array of length 1 is already sorted
    }
    
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare each element and merge them into the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Concatenate the remaining elements (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log("Merge Sort:", mergeSort(array.slice()));

// Quick Sort: Picks a pivot element and partitions the array into two halves, sorting them recursively.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }
    
    const pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    // Partition the array
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    // Recursively sort the left and right arrays, then concatenate with pivot
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log("Quick Sort:", quickSort(array.slice()));