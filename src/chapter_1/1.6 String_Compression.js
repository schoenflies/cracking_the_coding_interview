//Time complexity is O(n)
function strComp(str){
  let store={};
  for(let i=0; i<str.length; i++){
    let char=str.charAt(i);
    if(store[char]){
      store[char]++;
    }else{
      store[char]=1;
    }
  }
  let comp=[];
  for(key in store){
    comp.push(key, store[key]);
  }
  return comp.length < str.length ? comp.join('') : str;

}

//TESTS
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');