// Middle of the Linked List
// Add to List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.


var middleNode = function(head) {
  let pointer1 = head
  let pointer2 = head
  while(pointer1.next){
    pointer1 = pointer1.next
    pointer2 = pointer2.next
    if(pointer1.next)
    pointer1 = pointer1.next
  }  
  return pointer2
};



1   2   3   4    5
        *        @