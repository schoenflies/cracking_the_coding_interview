//Time complexity O(n)

function oneAway(str1,str2){
  //return true if strings are identical
  if(str1===str2){
    return true;
  }else{
    //check replace character
    var store = str1.split('');
    for(let i=0; i<str2.length; i++){
      var char=str2.charAt(i);
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

// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);