import { question } from 'readline-sync';

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;  // Points to the previous node
        this.next = null;  // Points to the next node
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;  // Points to the first node
    }

    // Insertion at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode; // Point to itself, circular reference
            newNode.prev = newNode; // Point to itself, circular reference
        } else {
            let tail = this.head.prev;  // Last node in the list
            newNode.next = this.head;
            newNode.prev = tail;
            this.head.prev = newNode;
            tail.next = newNode;
            this.head = newNode;
        }
    }

    // Insertion at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = newNode; // Circular reference
            newNode.prev = newNode;
        } else {
            let tail = this.head.prev;
            tail.next = newNode;
            newNode.prev = tail;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
    }

    // Insertion at a specific position
    insertAtPosition(data, position) {
        const newNode = new Node(data);
        if (position === 0) {
            this.insertAtBeginning(data);
        } else {
            let current = this.head;
            let index = 0;
            while (current.next !== this.head && index < position - 1) {
                current = current.next;
                index++;
            }
            newNode.next = current.next;
            newNode.prev = current;
            current.next.prev = newNode;
            current.next = newNode;
        }
    }

    // Deletion from the beginning
    deleteFromBeginning() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (this.head.next === this.head) {
            this.head = null;  // Only one node, set head to null
        } else {
            let tail = this.head.prev;
            this.head = this.head.next;
            this.head.prev = tail;
            tail.next = this.head;
        }
    }

    // Deletion from the end
    deleteFromEnd() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (this.head.next === this.head) {
            this.head = null;  // Only one node, set head to null
        } else {
            let tail = this.head.prev;
            let newTail = tail.prev;
            newTail.next = this.head;
            this.head.prev = newTail;
        }
    }

    // Deletion from a specific position
    deleteFromPosition(position) {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (position === 0) {
            this.deleteFromBeginning();
        } else {
            let current = this.head;
            let index = 0;
            while (current.next !== this.head && index < position - 1) {
                current = current.next;
                index++;
            }

            if (current.next === this.head) {
                console.log("Invalid position");
            } else {
                current.next = current.next.next;
                current.next.prev = current;
            }
        }
    }

    // Traversal
    traverse() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }
        let current = this.head;
        do {
            process.stdout.write(current.data + " <-> ");
            current = current.next;
        } while (current !== this.head);
        console.log("HEAD");
    }

    // Searching for a value
    search(value) {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        let current = this.head;
        let position = 0;
        do {
            if (current.data === value) {
                console.log(`Element ${value} found at position ${position}.`);
                return;
            }
            current = current.next;
            position++;
        } while (current !== this.head);

        console.log(`Element ${value} not found in the list.`);
    }
}

// Helper function to take input
function getUserInput() {
    const list = new CircularDoublyLinkedList();
    while (true) {
        console.log("\nChoose an operation:");
        console.log("1. Insert at Beginning");
        console.log("2. Insert at End");
        console.log("3. Insert at Position");
        console.log("4. Delete from Beginning");
        console.log("5. Delete from End");
        console.log("6. Delete from Position");
        console.log("7. Traverse");
        console.log("8. Search");
        console.log("9. Exit");

        const choice = question("Enter your choice: ");
        switch (choice) {
            case '1':
                const data1 = question("Enter data to insert at beginning: ");
                list.insertAtBeginning(data1);
                break;
            case '2':
                const data2 = question("Enter data to insert at end: ");
                list.insertAtEnd(data2);
                break;
            case '3':
                const data3 = question("Enter data to insert at position: ");
                const position = parseInt(question("Enter position: "), 10);
                list.insertAtPosition(data3, position);
                break;
            case '4':
                list.deleteFromBeginning();
                break;
            case '5':
                list.deleteFromEnd();
                break;
            case '6':
                const delPosition = parseInt(question("Enter position to delete: "), 10);
                list.deleteFromPosition(delPosition);
                break;
            case '7':
                list.traverse();
                break;
            case '8':
                const value = question("Enter value to search: ");
                list.search(value);
                break;
            case '9':
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

getUserInput();
