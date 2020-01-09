function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
let i = 0
let j = 0
l = arr.length-1
let delta = []
while (i<l){
    delta[i]=arr[i+1]-arr[i]
    i++
}

while (j<(l-1)){
    if(delta[j] !== delta[j+1]){
        return false
    }
    else {
        j++
    }
}
return true

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false