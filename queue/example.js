let queue = [];
queue.push(10);  
queue.push(20);  
console.log(queue);  
console.log(queue.length)

console.log("----- shift -----")

let queue1 = [10, 20];
let removed = queue1.shift();  // Removes 10 from the queue
console.log(removed);  
console.log(queue1);    // [20]

console.log("----- peek() (manual) -----")

let queue2 = [10, 20];
let frontElement = queue2[0];  // Get the first element
console.log(frontElement);    // 10

console.log("----- isEmpty() (manual)-----")

let queue3 = [];
console.log(queue3.length === 0);  // true (queue is empty)

let queue4 = [10, 20, 30];
queue4.length = 0;  // This clears the array (queue)
console.log(queue4);  // Output: []
