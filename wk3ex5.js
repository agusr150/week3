function palindrome(kata) {
  // you can only write your code here!
  let i = 0
  l = kata.length
  while (i<l){
    if(kata[i]!==kata[l-1-i]){
        return false
        break
    }
    i++
  }
 return true 
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false