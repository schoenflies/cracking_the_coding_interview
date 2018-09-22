export function deleteMidNode(node){
  //re-assign values
  let currnode=node;
  while(currnode !== null && currnode.next !== null){
    currnode.value = currnode.next.value;
    if (currnode.next.next === null){
      currnode.next=null;
    }
    currnode = currnode.next;
  }
}
