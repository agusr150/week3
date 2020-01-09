function tentukanDeretGeometri(arr) {
  // you can only write your code here!
    let i = 0
    let perkalian =[]
    l = arr.length-1
    while (i<l){
        perkalian[i]=arr[i+1]/arr[i]
        i++
    }
    let j = 0
    l1 = l-1
    while (j<l1){
        if (perkalian[j] !== perkalian[j+1]){
            return false
        }
        else{
            j++
        }
    }
    return true
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false