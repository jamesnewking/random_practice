class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(value){
        var newObj = {
            value: value,
            prev: null,
            next: null
        }
        if(this.head===null){
            this.head = this.tail = newObj;
        } else {
            this.tail.next = newObj;
            newObj.prev = this.tail;
            this.tail = newObj;
        }
    }
    search(value){
        //return the node with a particular value;
        let current = this.head;
        while (current.next !== null){
            if(current.value === value){
                return current
            }
            current = current.next;
        }
        return false;
    }
    addAnywhere(value, node){
        //value is the value to be added
        //node is the link list node to add the value AFTER
    }
    remove( node ){
        //remove the given node from the lined list
    }
    pop(){
        const last = this.tail;
        const newLast = this.tail.prev;
        this.tail = newLast;
        newLast.next = null;
        last.prev = null;
        return last.value;
    }

}

const list = new LinkedList();
list.add('a');
list.add('b');
list.add('c');
list.add('d');