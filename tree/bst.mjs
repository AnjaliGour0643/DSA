import { question } from 'readline-sync'; 

class Node {
    constructor(data) {
        this.data = data;    // Node's value
        this.left = null;    // Pointer to left child (smaller values)
        this.right = null;   // Pointer to right child (larger values)
    }
}

// Binary Search Tree (BST) class for tree operations
class BinarySearchTree {
    constructor() {
        this.root = null; // Root node of the tree
    }

    // Insert a new node into the tree
    insert(data) {
        const newNode = new Node(data);

        // If tree is empty, set root to the new node
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode); // Insert at correct position
        }
    }

    // Helper method to insert a node at the correct position
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            // Insert in the left subtree if the new data is less than the current node's data
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            // Insert in the right subtree if the new data is greater than or equal to the current node's data
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Search for a specific value in the tree
    search(data) {
        return this.searchNode(this.root, data);
    }

    // Helper method to search for a node recursively
    searchNode(node, data) {
        if (node === null) {
            return false; // Value not found
        }
        if (data < node.data) {
            return this.searchNode(node.left, data); // Search in the left subtree
        } else if (data > node.data) {
            return this.searchNode(node.right, data); // Search in the right subtree
        } else {
            return true; // Value found
        }
    }

    // In-order Traversal (Left, Root, Right)
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            process.stdout.write(node.data + " ");
            this.inorder(node.right);
        }
    }

    // Pre-order Traversal (Root, Left, Right)
    preorder(node) {
        if (node !== null) {
            process.stdout.write(node.data + " ");
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Post-order Traversal (Left, Right, Root)
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            process.stdout.write(node.data + " ");
        }
    }

    // Get the root node of the tree
    getRootNode() {
        return this.root;
    }

    // Find the minimum value node in the tree
    findMinNode(node) {
        if (node.left === null) {
            return node; // Minimum value node has no left child
        } else {
            return this.findMinNode(node.left);
        }
    }

    // Delete a node from the tree
    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    // Helper method to delete a node
    deleteNode(node, data) {
        if (node === null) {
            return null; // Tree is empty
        }

        // Recursively find the node to delete
        if (data < node.data) {
            node.left = this.deleteNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.deleteNode(node.right, data);
            return node;
        } else {
            // Node to be deleted found

            // Case 1: Node has no children (leaf node)
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // Case 2: Node has one child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Case 3: Node has two children
            // Find the in-order successor (minimum value node in the right subtree)
            const minNode = this.findMinNode(node.right);
            node.data = minNode.data;

            // Delete the in-order successor
            node.right = this.deleteNode(node.right, minNode.data);
            return node;
        }
    }
}

// Helper function to take user input and perform BST operations
function getUserInput() {
    const bst = new BinarySearchTree();
    
    while (true) {
        console.log("\nChoose an operation:");
        console.log("1. Insert a Node");
        console.log("2. Search for a Node");
        console.log("3. Delete a Node");
        console.log("4. In-order Traversal");
        console.log("5. Pre-order Traversal");
        console.log("6. Post-order Traversal");
        console.log("7. Exit");

        const choice = question("Enter your choice: ");
        
        switch (choice) {
            case '1':
                const data = parseInt(question("Enter data to insert into the tree: "));
                bst.insert(data);
                break;
            case '2':
                const searchData = parseInt(question("Enter data to search for: "));
                const found = bst.search(searchData);
                console.log(found ? "Node found!" : "Node not found.");
                break;
            case '3':
                const deleteData = parseInt(question("Enter data to delete from the tree: "));
                bst.delete(deleteData);
                console.log(`Node ${deleteData} deleted.`);
                break;
            case '4':
                console.log("In-order Traversal:");
                bst.inorder(bst.getRootNode());
                console.log();
                break;
            case '5':
                console.log("Pre-order Traversal:");
                bst.preorder(bst.getRootNode());
                console.log();
                break;
            case '6':
                console.log("Post-order Traversal:");
                bst.postorder(bst.getRootNode());
                console.log();
                break;
            case '7':
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

getUserInput();
