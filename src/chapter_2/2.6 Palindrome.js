export function isPalindromeStack(list) {
  let store = [];
  let node = list;
  store.push(node.val);

  while (node.next) {
    store.push(node.next.val);
    node = node.next;
  }

  let left = 0;
  let right = store.length - 1;

  while (left < right) {
    if (store[left] !== store[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;

}