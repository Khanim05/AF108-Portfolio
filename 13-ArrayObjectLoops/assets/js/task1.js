//1.Armstrong ededlerini yazan algorithm.(armstronq ədədləri bütün rəqəmlərinin kubunun toplamına bərabər olan ədədlərdir.)
let birincireqem,ikincireqem,ucuncureqem
for (let i = 1; i<1000; i++) {
    birincireqem=Math.floor(i/100)
    ikincireqem=Math.floor((i/10)%10)
    ucuncureqem=i%10
    if(birincireqem*birincireqem*birincireqem+ikincireqem*ikincireqem*ikincireqem+ucuncureqem*ucuncureqem*ucuncureqem==i){
        console.log(i)
    }
}
