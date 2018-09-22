/*NOTE:  If the lists intersect, their tails are the same.  Any difference in length is from before 
they intersect
*/
import { getLength } from './helpers';

export function doIntersect(list1, list2) {
  let len1 = getLength(list1),
    len2 = getLength(list2);

  let node1 = skip(list1, len1 - len2);
  let node2 = skip(list2, len2 - len1);

  while (node1 && node2) {
    if (node1 === node2) {
      return node1;
    } else {
      node1 = node1.next;
      node2 = node2.next;
    }
  }

  return undefined;
}

function skip(list, num) {
  while (num > 0) {
    list = list.next;
    --num;
  }
  return list;
}