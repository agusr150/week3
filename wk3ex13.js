function targetTerdekat(arr) {
  // you can only write your code here!
  var a =[], b =[]
  var j =0, k =0, terdekat = '', jarak =0
    for (var i=0; i<arr.length; i++){
        if(arr[i]==='o'){ 
            a[j] = i
            j++
            if (k>0){
                jarak=a[j-1]-b[k-1]
                if(terdekat===''){terdekat = jarak}
                if(jarak<terdekat){terdekat = jarak}
            }
        }
        else if(arr[i]==='x'){
            b[k] = i
            k++
            if (j>0){
                jarak=b[k-1]-a[j-1]
                if(terdekat===''){terdekat = jarak}
                if(jarak<terdekat){terdekat = jarak}
            }
        }
     // console.log(jarak+"   <<jarak")  
    //console.log(terdekat+"  <<terdekat")
        
    }
    if (k===0||j===0){terdekat =0}
    return terdekat
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2