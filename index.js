export class Node{
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList{
    constructor(head = null) {
        this.head = head;
    }


    append(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }

    }
    prepend(value) {
        let newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }


    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count ++;
            node = node.nextNode;
        }
        return count;
    }


    headNode() {
        return this.head;
    }


    tail() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode;
            }
        }
        return lastNode;
    }


    at(index) {
        let count = -1;
        let current = this.head;

        if (index < 0 || index >= this.size()) {
            return "Invalid Index";
        }

        while (count < index) {
            current = current.nextNode;
            count++;
        }
        return current.value;
    }


    pop() {
        if (!this.head) {
            return
        }
        if (!this.head.nextNode) {
            this.head = null;
            return;
        }
        let current = this.head;
        let previous;
        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;

    }


    contains(value) {
        let current = this.head;
        let count = 0;
        let contains = false;
        while (count < this.size()) {
            if (current.value === value) {
                contains = true;
                return contains;
            } else {
                current = current.nextNode;
                count++;
            }
            
        }
        return contains;
    }


    find(value) {
        let index = 0;
        let current = this.head;

        if (!current) {
            return;
        }

        while (index < this.size()) {
            if (current.value === value) {
                return index;
            } else {
                index++;
                current = current.nextNode;
            }
        }
        return "Value was not found";
    }


    toString() {
        let current = this.head;
        let finalString = "";

        while (current) {
            
            finalString += `( ${current.value} )->`;
            current = current.nextNode;
        }
        finalString += null;
        return finalString;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size()) {
            return 
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }

        const newNode = new Node(value);
        let previous;

        let current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.nextNode;
        }

        newNode.nextNode = current;
        previous.nextNode = newNode;
    }


    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            return
        }
        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            this.head = current.nextNode;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.nextNode;
            }
            previous.nextNode = current.nextNode;
        }
    }
}


