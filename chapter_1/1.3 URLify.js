//Time complexity O(n)

function urlify(str){
	var store=str.split("");
	for(let i=0; i<store.length; i++){
		if(store[i]===' '){
			store.splice(i,1,"%");
		}
	}
	return store.join("");
}

//TESTS
console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');