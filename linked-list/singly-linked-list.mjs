import { question } from 'readline-sync';

class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Points to the next node
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; // Points to the first node
    }

    // Insertion at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head; // Point new node to the current head
        this.head = newNode; // Update head to the new node
    }

    // Insertion at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If list is empty, new node becomes head
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next; // Traverse to the last node
        }
        current.next = newNode; // Link the last node to the new node
    }

    // Insertion at a specified position
    insertAtPosition(data, position) {
        const newNode = new Node(data);
        
        if (position === 0) {
            // If the position is 0, insert at the beginning
            this.insertAtBeginning(data);
            return;
        }

        let current = this.head;
        let previous = null;
        let index = 0;

        // Traverse to the desired position
        while (current && index < position) {
            previous = current;
            current = current.next;
            index++;
        }

        if (index === position) {
            previous.next = newNode;  // Link previous node to the new node
            newNode.next = current;   // Link new node to the current node
        } else {
            console.log("Position out of bounds.");
        }
    }

    // Deletion from the beginning
    deleteFromBeginning() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }
        this.head = this.head.next; // Update head to the next node
    }

    // Deletion from the end
    deleteFromEnd() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }
        if (!this.head.next) {
            this.head = null; // If only one node, set head to null
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next; // Traverse to the second last node
        }
        current.next = null; // Remove the last node
    }

    // Deletion from a specified position
    deleteFromPosition(position) {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (position === 0) {
            this.deleteFromBeginning(); // If position is 0, delete from beginning
            return;
        }

        let current = this.head;
        let previous = null;
        let index = 0;

        // Traverse to the desired position
        while (current && index < position) {
            previous = current;
            current = current.next;
            index++;
        }

        if (current) {
            previous.next = current.next; // Unlink the node at the position
            console.log(`Node at position ${position} deleted.`);
        } else {
            console.log("Position out of bounds.");
        }
    }

    // Traversal
    traverse() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + " -> "); // Print node data
            current = current.next; // Move to the next node
        }
        console.log("null");
    }

    // Searching for a value
    search(value) {
        let current = this.head;
        let position = 0;
        while (current) {
            if (current.data === value) {
                console.log(`Element ${value} found at position ${position}.`);
                return;
            }
            current = current.next;
            position++;
        }
        console.log(`Element ${value} not found in the list.`);
    }
}

// Helper function to take input
function getUserInput() {
    const list = new SinglyLinkedList();
    while (true) {
        console.log("\nChoose an operation:");
        console.log("1. Insert at Beginning");
        console.log("2. Insert at End");
        console.log("3. Insert at a Specific Position");
        console.log("4. Delete from Beginning");
        console.log("5. Delete from End");
        console.log("6. Delete from a Specific Position");
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
                const data3 = question("Enter data to insert: ");
                const position = question("Enter the position to insert at: ");
                list.insertAtPosition(data3, parseInt(position));
                break;
            case '4':
                list.deleteFromBeginning();
                break;
            case '5':
                list.deleteFromEnd();
                break;
            case '6':
                const deletePosition = question("Enter the position to delete from: ");
                list.deleteFromPosition(parseInt(deletePosition));
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
