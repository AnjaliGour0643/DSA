// Create an empty queue using an array
let queue = [];

// Enqueue - Add elements to the back of the queue
function enqueue(element) {
    queue.push(element);
    console.log(`${element} added to the queue.`);
}

// Dequeue - Remove and return the front element of the queue
function dequeue() {
    if (isEmpty()) {
        console.log("Queue is empty. Cannot dequeue.");
        return null;
    } else {
        let removedElement = queue.shift();
        console.log(`${removedElement} removed from the queue.`);
        return removedElement;
    }
}

// Peek - Get the front element without removing it
function peek() {
    if (isEmpty()) {
        console.log("Queue is empty. No front element.");
        return null;
    } else {
        console.log(`Front element is: ${queue[0]}`);
        return queue[0];
    }
}

// isEmpty - Check if the queue is empty
function isEmpty() {
    return queue.length === 0;
}

// size - Get the current size of the queue
function size() {
    console.log(`Queue size: ${queue.length}`);
    return queue.length;
}

// clear - Remove all elements from the queue
function clear() {
    queue = [];
    console.log("Queue cleared.");
}

// Sample usage
console.log("Queue operations:");
enqueue(10); // Add 10 to the queue
enqueue(20); // Add 20 to the queue
enqueue(30); // Add 30 to the queue
peek();      // Peek the front element
size();      // Get the current size of the queue
dequeue();   // Remove the front element
peek();      // Peek again after dequeue
size();      // Check the size again
clear();     // Clear the queue
isEmpty();   // Check if the queue is empty after clearing
