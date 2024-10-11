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
        
    }
    pop() {
        
    }
    contains(value) {
        
    }
    find(value) {
        
    }
    toString() {
        let current = this.head;
        let finalString = "";

        while (current) {
            
            finalString += `( ${current.value} )-> `;
            current = current.nextNode;
        }
        finalString += null;
        return finalString;
    }
}


