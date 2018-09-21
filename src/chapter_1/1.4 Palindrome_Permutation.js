//Time complexity O(n)
function palinPerm(str){
	var store = new Set;
	
	for(let i=0; i<str.length; i++){
		if(str.charAt(i) !== ' '){
			var char=str.charAt(i).toLowerCase();
			//check if exists in set
			if(store.has(char)){
				store.delete(char);
			}else{
			  store.add(char);
			}
		}
	}
	return store.size === 1 || store.size === 0;
}

//TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');