# odin-linkedlist
Assignment completed as part of the Odin Project

Concepts: linked lists & recursion

__Specs__

1. Create a node class
    - value (initialize to null)
    - link to nextNode (initialize to null)


2. Create a linked list class
    - Constructor:
        - size - returns total number of nodes
        - head - returns first node
        - tail - returns last node
    - Methods: 
        - append(value) - adds new node to end of list
        - prepend(value) - adds new node to beginning of list
        - at(index) - returns node at given index
        - pop - removes last node
        - contains(value) - returns true if value is in list (else false).
        - find(value) - returns index of node containing value (or null if not found).
        - toString - returns LinkedList as string (i.e, *value -> value -> null*)
        - insertAt(value, index) - inserts new node of 'value' at given index
        - removeAt(index) - removes node at given index