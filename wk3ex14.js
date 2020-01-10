function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var grup3 =[], grup2 =[], grup1 = []
  for(var i=0; i<arr.length;i++){
      if (Number.isInteger(arr[i]/3)===true){
          grup3.push(arr[i])
      }
      else if (Number.isInteger(arr[i]/2)===true){
          grup1.push(arr[i])
      }
      else if (Number.isInteger((arr[i]+1)/2)===true){
          grup2.push(arr[i])
      }
  }
  
  result = [grup1, grup2, grup3]
  return result
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]