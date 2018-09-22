//Time complexity O(n)

export function checkPermute(str1, str2) {
  //check string lengths
  if (str1.length === str2.length) {
    let store = str1.toString().split(',');
    for (let i = 0; i < str2.length; i++) {
      //remove char if appears in store
      if (store.includes(str2[i])) {
        store.splice(store.indexOf(str2[i]), 1);
      }
    }
    return store.length === 0;
  } else {
    return false;
  }
}