var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

function partition(head, partition){
  var left=[];
  var right=[];
  var node=head;

  //partition values
  while(node){
    if(node.value<partition){
      left.push(node);
    }else{
      right.push(node);
    }
    node=node.next;
  }

  var vals=left.concat(right);

  //construct new linked list
  for(let i=0; i<vals.length-1; i++){
    let node=vals[i];
    node.next=vals[i+1];
  }

  vals[vals.length-1].next=null;

  return vals[0];

}

/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

var printList = function(a) {
  while (a !== null) {
    console.log(a.value);
    a = a.next;
  }
};

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

printList(a);

var newa = partition(a, 5);
printList(newa);