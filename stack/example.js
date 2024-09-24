let stack = [];

stack.push(10); 
stack.push(20); 
console.log(stack.length)

stack.pop()

stack.push(30);
stack.push(40);
console.log(stack)

console.log("----- clear (manual) -----")

let st = [10, 20, 30];
st.length = 0;  // This clears the array (stack)
console.log(st);  // Output: []

console.log("----- isEmpty() (manual)-----")

let st1= [];
console.log(st1.length === 0);  // Output: true (stack is empty)

console.log("----- peek() (manual)-----")

let st2= [10, 20];
let topElement = st2[st2.length - 1];  // Get the last element
console.log(topElement);  // Output: 20
