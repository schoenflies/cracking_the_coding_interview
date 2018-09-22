export function removeDups(head) {
  //edge cases
  if (!head) {
    return head;
  }

  //initialize
  var store = new Set();
  store.add(head.val);
  var currnode = head.next;
  var prevnode = head;

  //check for duplicates
  while (currnode) {
    //check if in set
    if (store.has(currnode.val)) {
      //if so, then reset pointer
      prevnode.next = null;
    } else {
      prevnode.next = currnode;
      prevnode = currnode;
      store.add(currnode.val);
    }
    //go to next node
    currnode = currnode.next;
  }
}