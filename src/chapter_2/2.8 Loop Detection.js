//Refactor for O(1) space

export function findStartOfLoopSet(list) {
  let store = new Set();
  let node = list;

  while (node) {
    if (store.has(node)) {
      return node;
    } else {
      store.add(node);
      node = node.next;
    }
  }
  return null;
}