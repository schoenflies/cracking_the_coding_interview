//Time complexity O(n)

function oneAway(str1,str2){
  //return true if strings are identical
  if(str1===str2){
    return true;
  }else{
    //check replace character
    var store = str1.split('');
    for(let char of str2){
      if(store.includes(char)){
        store.splice(store.indexOf(char),1);
      }else{
        store.push(char);
      }
    }
    //store can have at maximum 2 unique characters
    return store.length === 1 || store.length === 2;
  }
}

// console.log(oneAway('pale', 'pl'));
