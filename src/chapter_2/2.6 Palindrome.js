export function isPalindromeStack(list) {
  var store = [];
  var node = list;
  store.push(node.val);

  while (node.next) {
    store.push(node.next.val);
    node = node.next;
  }

  var left = 0;
  var right = store.length - 1;

  // console.log('store: '+store)

  while (left < right) {
    if (store[left] !== store[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;

}