function dataHandling2(input){
    input.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input)

    ttl = input[3]
    ttl1 = ttl.split('/')
    
    bulan = ttl1[1]//parseInt(ttl1[1])  
    var bulantxt
    switch(bulan){
        case '01':
            bulantxt = 'Januari'
            break
        case '02':
            bulantxt = 'Februari'
            break
        case '03':
            bulantxt = 'Maret'
            break
        case '04':
            bulantxt = 'April'
            break
        case '05':
            bulantxt = 'Mei'
            break
        case '06':
            bulantxt = 'Juni'          
            break
        case '07':
            bulantxt = 'Juli'
            break
        case '08':
            bulantxt = 'Agustus'
            break
        case '09':
            bulantxt = 'Septembeer'
            break
        case '10':
            bulantxt = 'Oktober'
            break
        case '11':
            bulantxt = 'November'
            break
        case '12':
            bulantxt = 'Desember'
            break
    }
    console.log(bulantxt)

    
    let j=1
    let x = 1
    let ttl2 = ttl1
    ttl3 = ttl2.join('-')
    
    while (x<ttl1.length){
        while (j<ttl1.length){
            if (Number(ttl1[j]) > Number(ttl1[j-1])){
                temp = ttl1[j-1]
                ttl1[j-1] = ttl1[j]
                ttl1[j] = temp
            }
            j++
        }    
    x++
    j=0
    }
    
    console.log(ttl1)
    
    console.log(ttl3)

    nama = input[1].slice(0,14)
    console.log(nama)

}
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
 