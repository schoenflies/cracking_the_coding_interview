//Time complexity O(n)

export function urlify(str){
  var store=str.split('');
  for(let i=0; i<store.length; i++){
    if(store[i]===' '){
      store.splice(i,1,'%');
    }
  }
  return store.join('');
}

