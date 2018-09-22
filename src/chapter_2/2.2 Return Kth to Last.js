//Time complexity is O(n).  Need to refactor to decrease space complexity

export function findKthToLast(head, k) {
  if (!head) {
    throw new Error('invalid list');
  }

  //get length of list
  let node = head;
  let length = 0;

  while (node) {
    node = node.next;
    length++;
  }

  if (k >= length) {
    throw new Error('list is not long enough');
  }

  //reset node
  node = head;

  for (let i = 1; i < (length - k); i++) {
    node = node.next;
  }

  return node.val;
}