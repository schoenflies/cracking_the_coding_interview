import { arrayToLinkedList } from './helpers';

export function sumListsReverseOrder(list1, list2) {
  //initialize
  let num1 = [list1.val];
  let num2 = [list2.val];

  let node1 = list1;
  let node2 = list2;

  //get numbers
  while (node1.next) {
    num1.push(node1.next.val);
    node1 = node1.next;
  }

  while (node2.next) {
    num2.push(node2.next.val);
    node2 = node2.next
  }

  //reverse and cast as int
  num1 = parseInt(num1.reverse().join(''));
  num2 = parseInt(num2.reverse().join(''));


  //sum and reverse
  let sum = num1 + num2;
  sum = sum.toString().split('').reverse().map(x => parseInt(x, 10));

  return arrayToLinkedList(sum);

}