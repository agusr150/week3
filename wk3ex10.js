function perkalianUnik(arr) {
  // you can only write your code here!
let i = 0
let perkalian = 1
l = arr.length
while (i<l){
    perkalian = perkalian * arr[i]
    i++
}

let j = 0
let unik =[]
while(j<l){
    arr1 = arr.splice(0,1)
    unik[j] = perkalian/arr1
    j++
    }

return unik
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]