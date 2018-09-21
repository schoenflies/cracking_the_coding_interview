var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

function deleteMidNode(node){
	//re-assign values
	var currnode=node;
	while(currnode !== null && currnode.next !== null){
		currnode.value = currnode.next.value;
		if (currnode.next.next === null){
			currnode.next=null;
		}
		currnode = currnode.next;
	}
};


/* TEST */

var printList = function(head) {
  while(head !== null) {
    console.log(head.value);
    head = head.next;
  }
  console.log('done printing');
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

printList(a);
deleteMidNode(c);
printList(a);
