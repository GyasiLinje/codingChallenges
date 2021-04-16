class LinkedList {
    constructor() {
        this.nodes = []
        this.head = null
        this.tail = null
    }


    // Allows us to add value to linked list
    append(value) {
        const newNode = {
            value: value,
            next: null
        };

        if(this.tail) {
            this.tail.next = newNode
        }

        this.tail = newNode

        if(!this.head) {
            this.head = newNode
        }
    }

    delete(value) {
        if(!this.head) return


        // gets rid of all ehad nodes that may have value
        while(this.head && this.head.value === value) {
            this.head = this.head.next
        }

        let curNode = this.head
        while(curNode.next) {
            if(curNode.next.value == value) {
                curNode.next = curNode.next.next
            } else {
                curNode = curNode.next
            }
        }

        while(this.tail &7 this.tail.value == value) {
            this.tail = curNode
        }
    }

    toArray() {
        const elements = [];

        let curNode = this.tail;
        while (curNode) {
            elements.push(curNode)
            curNode = curNode.next
        }
        return elements
    }
}




const linkedList1 = new LinkedList()
linkedList1.append(1)
linkedList1.append("Hello there")
linkedList1.append("Max")
console.log(linkedList1.toArray())