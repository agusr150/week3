function pasanganTerbesar(num) {
  // you can only write your code here!
  let angka = num.toString()
  let i = 0
  let pasangan = []
  let l = angka.length-1
  while(i<l){
      pasangan[i]= angka[i]+angka[i+1]
    i++
    }
//pasangan.sort()
  let k = 1
  let sort = false
  while(k>0){
    sort = true
    let j = 1
    while(j<pasangan.length){
      temp = pasangan[j-1]
      if (pasangan[j]>temp){
      pasangan[j-1]=pasangan[j]
      pasangan[j]=temp
      sort = false
      }
    j++
    }
  //console.log("pasangan ="+ pasangan)
  j = 0
    if (sort === false){
      k++
    }
    else {break}
  }
return pasangan[0]
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99