//input "hello world!"
//output
//"!dlrow olleh"

var str = 'hello world!'
l = str.length
var rev = []
i = 0
while (i<l){
    rev[i]=str[l-1-i]
    i++
}  
//print
var j = 1
reverse = rev[0]
while (j<l){
    reverse = reverse+rev[j]
    j++
}
console.log(reverse)