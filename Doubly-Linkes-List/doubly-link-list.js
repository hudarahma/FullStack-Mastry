
// Node Class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(value) {
      let newNode = new Node(value);
  
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length+=1;
      return this;
  
    }
  
    pop() {
      
      if(this.length === 0) return undefined;
      const temp = this.tail;
      if (this.length === 1){
        this.head = null;
        this.tail = null;
      } else {
        this.tail = temp.prev;
        this.tail.next = null;
        this.prev = null;
  
      }
      this.length-=1;
      return temp
         
    }
  
  
  
    //(Removing a node from the beginning)
    shift() {
      if(this.length === 0 ) return undefined;
      const temp = this.head;
      if(this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        
        this.head = temp.next;
        this.head.prev = null;
        temp.next = null;
      }
  
      this.length-=1;
      return temp
    }
  
    // Adding a node to the beginning
    unshift(value){
      const newNode = new Node(value) 
      if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length+=1;
      return this;
    }
  
    getNodeAtIndex(index) {
      let node = this.head;
      let currIndex = 0;
      
      if(index >= this.length || index < 0)  return null;
  
      while (currIndex != index) {
        node = node.next;
        currIndex+=1;
      }
      return node;
    }
  }
  
  // Tests
  const list = new DoubleLinkedList();
  list.push("Huskies");
  list.push("are");
  list.push("the");
  list.push("best!");
  // list.shift();
  
  
  list.pop()
  console.log(list);
  list.shift();
  console.log(list);
  
  list.unshift('liza');
  console.log(list);
  
  console.log(list.getNodeAtIndex(1));