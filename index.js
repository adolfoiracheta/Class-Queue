//Import stylesheets
import "./style.css";

//ADD the Queue Class Here

class Queue {
  constructor() {
    this.items = []
    this.size = 0
  }
enqueue(element) {
  this.items.push(element)
  this.size++
 }
 dequeue() {
   this.items.shift()
   this.size--
 }
}
let queue1 =  new Queue()
console.log(queue1)
queue1.enqueue('Adolfo');
console.log(queue1);


