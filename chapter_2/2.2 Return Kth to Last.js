//Time complexity is O(n).  Need to refactor to decrease space complexity
var linkedList = function(value) {
  this.value = value;
  this.next = null;
};

function findKthToLast(k, head){
	var store=[];
	var node=head;
	var counter=0;

	while(node){
		store.push(node);
		node=node.next;
	}

	console.log(store[store.length-k-1]);
	return store[store.length-k];
}

/* TESTS */
var a = new linkedList('1');
var b = new linkedList('2');
var c = new linkedList('3');
var d = new linkedList('4');
var e = new linkedList('5');
var f = new linkedList('6');
var g = new linkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

findKthToLast(3, a);

findKthToLast(10, a);

findKthToLast(-1, a);

findKthToLast(0, a);

findKthToLast(1, a);