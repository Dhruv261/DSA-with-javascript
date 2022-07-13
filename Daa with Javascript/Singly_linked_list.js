// piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        //getter
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            // Make new tail
            this.tail = newNode
            // Update the tail to be the new tail
        }
        this.length++
        return this
    }

    /*
To understand

1. list
2. list.push('hi')
3. list.push('you')
4. list.push(99)

to get data 

1. list.head
2. list.head.next
3. list.head.next.next

*/
    traverse() {
        var current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

    /*(c = current, nt = nexttail)

pop explanation

HELLO -> GOODBYE -> WELCOME
c 
nt
*/
    pop() {
        if (!this.head) {
            return undefined
        }
        var current = this.head
        var newTail = current
        while (current.next) {
            //while there is something 
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length == 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift() {
        if (!this.head) {
            return undefined
        }
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }
    set(index, val) {
        var foundNode = this.get(index)
        if (foundNode === null) {
            return false
        } else {
            foundNode.val = val
            //setter
            return true
        }
        return false
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false
        if(index === this.length){
            this.push(val)
            return true
        } 
        if(index === 0){
            this.unshift(val)
            return true
        } 
        var newNode = new Node(val)
        var prev = this.get(index - 1)
        var temp = prev.next
        prev.next = newNode      
        newNod.next = temp
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined
        if(index === this.length-1){
            this.pop(index)
            return true
        }
        if(index === 0){
            this.shift()
            return true
        }
        var prev = this.get(index-1)
        prev.next = prev.next.next
        this.length--
        return this
    }

    reverse(){
        var node = this.head
        this.head = this.tail
        this.tail = node

        var next
        var prev = null
        for(var i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

    print(){
        var arr= []
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }

}


var list = new SinglyLinkedList()
list.push(100)
list.push(150)
list.push(200)
list.push(250) 
