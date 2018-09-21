//Time complexity is O(n)
export function strComp(str) {
  if (!str || str.length === 0) {
    return str;
  }
  let store = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (store[char]) {
      store[char]++;
    } else {
      store[char] = 1;
    }
  }
  let comp = [];
  for (let key in store) {
    comp.push(store[key], key);
  }
  return comp.length < str.length ? comp.join('') : str;

}