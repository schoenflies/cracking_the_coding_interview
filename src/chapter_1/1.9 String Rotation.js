function stringRotation(s1,s2){
  return (s2+s2).includes(s1);
}

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);