// Create an empty stack using an array
let stack = [];

// Push - Add elements to the top of the stack
function push(element) {
    stack.push(element);
    console.log(`${element} pushed to stack.`);
}

// Pop - Remove and return the top element of the stack
function pop() {
    if (isEmpty()) {
        console.log("Stack is empty. Cannot pop.");
        return null;
    } else {
        let removedElement = stack.pop();
        console.log(`${removedElement} popped from stack.`);
        return removedElement;
    }
}

// Peek - Get the top element without removing it
function peek() {
    if (isEmpty()) {
        console.log("Stack is empty. No top element.");
        return null;
    } else {
        console.log(`Top element is: ${stack[stack.length - 1]}`);
        return stack[stack.length - 1];
    }
}

// isEmpty - Check if the stack is empty
function isEmpty() {
    return stack.length === 0;
}

// size - Get the current size of the stack
function size() {
    console.log(`Stack size: ${stack.length}`);
    return stack.length;
}

// clear - Remove all elements from the stack
function clear() {
    stack = [];
    console.log("Stack cleared.");
}


console.log("Stack operations:");
push(10); // Push 10
push(20); // Push 20
push(30); // Push 30
peek();   // Peek to check the top element
size();   // Get the size of the stack
pop();    // Pop the top element
peek();   // Peek again to check the new top element
size();   // Check the size after popping
clear();  // Clear the stack
isEmpty(); // Check if the stack is empty
