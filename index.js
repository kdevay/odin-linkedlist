// Helper functions
function findNode(index, counter, currentNode, tail) {
    if (index === counter) {
        return currentNode;
    } else if (currentNode === tail) {
        return false;
    }
    // else if is not tail AND currentNode.value !== value
    counter++;
    return findNode(index, counter, currentNode.next);
}

function hasValue(value, currentNode, tail) {
    if (currentNode.value === value) {
        return true;
    } else if (currentNode === tail) {
        return false;
    }
    // else if is not tail AND currentNode.value !== value
    return hasValue(value, currentNode.next, tail);
}

function findIndex(value, currentNode, tail, counter) {
    if (currentNode.value === value) {
        return counter;
    } else if (currentNode === tail) {
        return null;
    }
    // else if is not tail AND currentNode.value !== value
    counter++;
    return findIndex(value, currentNode.next, tail, counter);
}

function printList(string, currentNode, tail) {
    if (currentNode !== tail) {
        string += currentNode.value + ' -> ';
    return printList(string, currentNode.next, tail);
    } else {
        string += tail.value + ' -> null';
    return string;
    }
}


// Node class - contains a value and a link to the nextNode
class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

// Contains linked list constructor (size, first node, last node)
// and methods for finding, adding, and removing nodes
class LinkedList {
    constructor() {
      this.size = 0; // returns total number of nodes
      this.head = null; // returns first node in the list
      this.tail = null; // returns last node in the list
    }
    
    append(value) { // Adds new node to end of list
        let newNode = new Node();// create new node
        newNode.value = value;
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else if (this.size === 1) {
            this.head.next = newNode;
        } else {
            let temp = this.tail
            temp.next = newNode;
        }
            this.tail = newNode;
            this.size++;
    };

    prepend(value) { // Adds new node to beginning of list
        let newNode = new Node();
        newNode.value = value;
        if (this.size === 0) {
            this.tail = newNode;
        } else if (this.size >= 1) {
            let temp = this.head;
            newNode.next = temp;
        }
            this.head = newNode;
            this.size++;
    };

    at(index) { // returns node at the given index
        return findNode(index, 0, this.head, this.tail);
    };

    pop() { // removes the last element from the list
        this.size--;
        // find penultimate item and set it as final node in list
        let penultimateNode = this.at(this.size - 1);
        this.tail = penultimateNode;
        this.tail.next = null;
    };

    contains(value) { // Returns true/false if list contains value
        // Search recursively, starting with head
        return hasValue(value, this.head, this.tail);
    };

    find(value) { // Returns the index of the node containing arg value (null if not found)
        // Search recursively, starting with head
        return findIndex(value, this.head, this.tail, 0);
    };

    toString() { // Returns linked list as a string
        return printList('', this.head, this.tail);
    }; 

    insertAt(value, index) { // Insert node at given index
        let newNode = new Node();// Create new node
        newNode.value = value;

        if (index === 0) {// If inserting at beginning
            this.size++;
            return prepend(value);
        } else if (index === this.size + 1) { // If inserting at end
            this.size++;
            return append(value);
        } // If inserting somewhere between head and tail
        let current = findNode(index, 0, this.head);
        let previous = findNode(index - 1, 0, this.head);
        newNode.next = current;
        previous.next = newNode;
        this.size++;
    };

    removeAt(index) {// Remove node at given index
        // Find node at given index
        let current = findNode(index, 0, this.head);

        if (current === this.head) { // If removing head
            let temp = this.head.next;
            this.head = temp;
        } else if (current === this.tail) { // If removing tail
            this.pop();
        } else { // If removing somewhere between head and tail
            let previous = findNode(index - 1, 0, this.head);
            previous.next = current.next;
        }
        this.size--;
        return;
    };
};

// Linked list with filler values
let data = ['foo', 'bar', 'baz', 'choo', 'char', 'chaz', 'zoo', 'tzar', 'zazz'];
let linkedList = new LinkedList();
data.forEach(datum => linkedList.append(datum))

// Testing //
let stringifyList = linkedList.toString(); // toString()
console.log('list: ', stringifyList);
console.log('-');

linkedList.prepend('bog') // prepend('value')
console.log('prepend: ', linkedList.toString());
console.log('-');

linkedList.append('gator') // append('value')
console.log('append: ', linkedList.toString());
console.log('-');

let atResult = linkedList.at(4);// at(index)
console.log('at: ', atResult);
console.log('-');

linkedList.pop(); // pop()
console.log('pop: ', linkedList.toString());
console.log('-');

let containsResult = linkedList.contains('chaz'); // contains(value) 
console.log('contains: ', containsResult);
console.log('-');

let findResult = linkedList.find('tzar'); // find(value)
console.log('at: ', findResult);
console.log('-');

linkedList.insertAt('loup', 6); // insertAt(value, index), 
console.log('insertAt: ', linkedList.toString());
console.log('-');

linkedList.removeAt(6); // removeAt(index)
console.log('removeAt: ', linkedList.toString());
console.log('-');