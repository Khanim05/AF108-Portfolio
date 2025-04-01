//task1

// let dizelprice=0.9
// let benzinprice=1
// let premium=1.5
// let menyu=Number(prompt("Choose full type:\n1-Dizel\n2-Benzin\n3-Premium"))
// if(menyu>3){
//     alert("Lütfən, düzgün Yanacaq Tipi daxil edin.")
// }
// let litr,budce,total,qaliq
// switch(menyu) {
//     case 1:
//     litr=Number(prompt("Enter fuel litr:"))
//     budce=Number(prompt("Enter amount (AZN):"))
//     total=litr*dizelprice
//     if(total<=budce){
//        qaliq=budce-total
//        alert(`Your money is Ok\n My money:${qaliq}`)
//     }
//     else{
//         alert(`Umumi deyer: ${total}\nIstifadecinin cari balansi ${budce}\nItkin mebleg: ${total-budce}`)
//     }
//     break
//     case 2:
//     litr=Number(prompt("Enter fuel litr:"))
//     budce=Number(prompt("Enter amount (AZN):"))
//     total=litr*benzinprice
//     if(total<=budce){
//         qaliq=budce-total
//         alert(`Your money is Ok\n My money:${qaliq}`)
//     }
//     else{
//         alert(`umumi deyer:${total}\n istifadecinin cari balansi: ${budce}\n itkin olan mebleg:${total-budce}`)
//     }
//     case 3:
//         litr=Number(prompt("Enter fuel litr:"))
//         budce=Number(prompt("Enter amount (AZN):"))
//         total=litr*premium
//         if(total<=budce){
//             qaliq=budce-total
//             alert(`Your money is Ok\n My money:${qaliq}`)
//         }
//         else{
//             alert(`umumi deyer:${total}\n istifadecinin cari balansi: ${budce}\n itkin olan mebleg:${total-budce}`)
//         }
// }

//task2
let movsum=prompt("fesil daxil edin")
if(movsum=="qis")
{
    alert("Movsumun aylari: dekabr,yanvar,fevral")
}
else if(movsum=="yaz"){
    alert("movsumun aylari: Mart,aprel,May")
}
else if(movsum=="yay"){
    alert("movsumun aylari: iyun,iyul,avqust")
}
else if(movsum=="payiz")
{
    alert("movsumun aylari: sentyabr,oktyabr,noyabr")
}
else{
    alert("bele fesil yoxdur.")
}