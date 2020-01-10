function groupAnimals(animals) {
  // you can only write your code here!
  dict = 'abcdefghaijklmnopqrstuvwxyz'
  var grup = []
  var subgrup=[]
  var k = 0
  for (var j=0; j<dict.length; j++){
    for (var i=0; i<animals.length; i++){
        if(animals[i][0]===dict[j]){
            subgrup.push(animals[i])
        }
    }

    if(subgrup.length>0){
        grup[k]=subgrup
        k++
        subgrup =[]
    }
  }
return grup
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]