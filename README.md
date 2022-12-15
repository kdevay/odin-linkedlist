# odin-linkedlist


Node class:
- contains a value method and a link to the nextNode (initialize both to null)

linked list class:
- append(value) - adds a new node containing value to the end of the list
- prepend(value) - "                             " to the start of the list
- size - returns the total number of nodes in the list
- head - returns the first node in the list
- tail - returns the last node in the list
- at(index) - returns the node at the given index
- pop - removes the last element from the list
- contains(value) - returns true if the value (arg) is in the list (else false).
- find(value) - returns the index of the node containing arg value (null if not found).
- toString - represents your LinkedList objects as strings 
   format: *value -> value -> value -> null*
- insertAt(value, index) - inserts a new node of 'value' at given index
- removeAt(index) - removes node at given index