//Time complexity O(n)

export function urlify(url) {
  //check for null, undefined, empty array
  if (!url || url.length === 0) {
    return url;
  }
  let store = url.toString().split(',');
  for (let i = 0; i < store.length; i++) {
    if (store[i] === ' ') {
      store.splice(i, 1, '%');
    }
  }
  return store;
}


