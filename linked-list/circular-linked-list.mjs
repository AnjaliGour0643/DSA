import { question } from 'readline-sync';

class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Points to the next node
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null; // Points to the first node
    }

    // Insertion at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Point new node to itself (circular)
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next; // Traverse to the last node
            }
            newNode.next = this.head;
            this.head = newNode; // Update the head to the new node
            current.next = this.head; // Link last node back to the new head
        }
    }

    // Insertion at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Point new node to itself (circular)
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next; // Traverse to the last node
            }
            current.next = newNode;
            newNode.next = this.head; // Link new node to the head (circular)
        }
    }

    // Insertion at a specific position
    insertAtPosition(data, position) {
        const newNode = new Node(data);

        if (position === 0) {
            this.insertAtBeginning(data);
            return;
        }

        let current = this.head;
        let index = 0;

        while (current.next !== this.head && index < position - 1) {
            current = current.next;
            index++;
        }

        if (index === position - 1) {
            newNode.next = current.next;
            current.next = newNode;
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

        if (this.head.next === this.head) {
            this.head = null; // Only one node, make head null
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next; // Traverse to the last node
            }
            this.head = this.head.next; // Move head to the next node
            current.next = this.head; // Update the last node to point to the new head
        }
    }

    // Deletion from the end
    deleteFromEnd() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }

        if (this.head.next === this.head) {
            this.head = null; // Only one node, make head null
        } else {
            let current = this.head;
            let prev = null;

            while (current.next !== this.head) {
                prev = current;
                current = current.next; // Traverse to the last node
            }

            prev.next = this.head; // Update second last node to point to the head
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
            return;
        }

        let current = this.head;
        let prev = null;
        let index = 0;

        while (current.next !== this.head && index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        if (index === position) {
            prev.next = current.next;
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
        do {
            process.stdout.write(current.data + " -> ");
            current = current.next;
        } while (current !== this.head);
        console.log("(back to head)");
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
    const list = new CircularLinkedList();
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
