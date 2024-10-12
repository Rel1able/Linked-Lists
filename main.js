import {LinkedList} from "./index.js";

const list = new LinkedList();


list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("pig");

console.log(list.toString());
console.log(list.size());
console.log(list.headNode());
console.log(list.tail());
console.log(list.contains("snake"));
console.log(list.find("snake"));
console.log(list.find("mouse"));
console.log(list.at(5));
list.removeAt(4);
list.pop();
list.insertAt("monkey", 3);
console.log(list.toString());







