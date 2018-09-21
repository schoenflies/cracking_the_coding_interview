//Time complexity O(n)
export function palinPerm(str) {
  if (!str) {
    return false;
  }
  let store = new Set;

  for (let char of str) {
    if (char !== ' ') {
      //check if exists in set
      if (store.has(char)) {
        store.delete(char);
      } else {
        store.add(char);
      }
    }
  }
  return store.size <= 1;
}