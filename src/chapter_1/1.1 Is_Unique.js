//Time complexity is O(n)

export function isUnique(arr){
	//check if arr length is more than max value
	if(arr.length>arr.max){
		return false;
	}else{
		//store values in hash map
	  let store= new Set();
	  for(let i=0; i<arr.length; i++){
	  	if(!store.has(arr[i])){
	  		store.add(arr[i]);
	  	}
	  }
	  return store.size === arr.length;
	}
}

