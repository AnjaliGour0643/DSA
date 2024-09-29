const array = [64, 34, 25, 12, 22, 11, 90];

console.log("Original Array:", array);

// Bubble Sort: Compares adjacent elements and swaps them if they are in the wrong order. Repeated until the array is sorted.
function bubbleSort(arr) {
    let swapped
    do{
        swapped = false
        for (let i = 0; i < arr.length-1 ; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
    
    return arr;
}

console.log("Bubble Sort:", bubbleSort(array));


// Selection Sort: Finds the minimum element and swaps it with the first unsorted element, progressively sorting the array.
function selectionSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let minIndex = i;
        // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < arr.length; j++) {
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

console.log("Selection Sort:", selectionSort(array));

// Insertion Sort: Builds the sorted array one item at a time by inserting each new item into its correct position.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i-1;
        // Move elements of arr[0..i-1] that are greater than numberToInsert
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j--;
        }
        // Insert numberToInsert at the right position
        arr[j + 1] = numberToInsert;
    }
    return arr;
}

console.log("Insertion Sort:", insertionSort(array));

// Quick Sort: Picks a pivot element and partitions the array into two halves, sorting them recursively.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }
    
    const pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    // Partition the array
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    // Recursively sort the left and right arrays, then concatenate with pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("Quick Sort:", quickSort(array));

// Merge Sort: Recursively divides the array in half and merges the sorted halves.
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }
    
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare each element and merge them into the sortedArr
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {            // if (leftArr[0] < rightArr[0]) { 
            sortedArr.push(leftArr[leftIndex]);                     // sortedArr.push(leftArr.shift());
            leftIndex++;                                            // } else {
        } else {                                                    // sortedArr.push(rightArr.shift())
            sortedArr.push(rightArr[rightIndex]);                   // }
            rightIndex++;
        }
    }
    
    // Concatenate the remaining elements (if any)
    return sortedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));    // return [...sortedArr, ...leftArr, ...rightArr]
}

console.log("Merge Sort:", mergeSort(array));