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
}


