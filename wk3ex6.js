function angkaPalindrome(num) {
    // you can only write your code here!
    let a = num
    let i = 0
    palindrome = false
    if(a<10){
        a++
        return a
    }
    
    while (a>0){
    angka = a.toString()    
        while(i<angka.length){
            if (angka[i] !== angka[angka.length-1-i]){
                palindrome = false
                break
            }
            else {palindrome = true}
        i++
        }
    
    if (palindrome === false){
        a++
        i=0
    }
    else {
        break
    }
    }
return a       
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001