
// Creating Binary-Search-Tree
class Node {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    if(this.root == null) {
      this.root = newNode;
      return this
    }
    let current = this.root;
    while(current) {
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
          current.left = newNode;
          return this
        }
        current = current.left;
      } else {

      if (current.right === null){
        current.right = newNode;
        return this;
      }

      current = current.right;

      }
    }
  }

  find(value){
    if(!this.root) return false;
    let current = this.root;
    let found = false;

    while(current && !found){
      if(value < current.value){
        current = current.left;
      } else if (value > current.value){
        current = current.right
      } else {
        found = current;
      }
    }

    if(!found) return undefined;
    return found;
  }
    
}

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(8);
tree.insert(6);
tree.insert(3);
console.log(tree)
console.log(tree.find(8))

// To insert a node to binary search tree,
//  first we create a new node, we check if there is a root in it, if not, the new node becomes the root,
// , if there is a root, we compare the new node with the root
//  if it’s greater than the root, check to see if there is a node to the right of the root, if not, add the new node as the right property, if there is, move to the right node and repeat these steps , If the new node is less than the root, check to see if there is a node to the left of the root, if not, add the new node as the left property, if there is, move to the left node and repeat these steps.

// Finding a node
// To find a node, we start at the root, check if there is a root, if not, searching is over, if there is a root, check if the value of the new node is the value we are looking for, if not, check to see if the value is greater than or less than the value of the root, to confirm which direction we need to dig in. If it is greater, check to see if there is a node to the right, if not, searching is over, if there is, move to that node and repeat these step. If it is less. check to see if there is a node to the left, if not, searching is over, if there is, move to that node and repeat these steps