//verilmis string: "I am frontend DEVELOPER I LEARN Javascript"
//String Methods:
//1.Verilmis string-de sait herflewrin tapilmasi // A a e E i I o O U u 
// let funct=(cumle)=>{ 
// return cumle.split("").filter(item=>item=="I" || item=="a" || item=="o" || item=="e" || item=="E" || item=="A" || item=="i").join()
// }
// console.log(funct("I am frontend DEVELOPER I LEARN Javascript"))

//2.Verilmish string-de sozlerin bosluga gore sayi.
// let funct=(cumle)=>{
//      return cumle.match(/ /g).length
// }
// console.log(funct("I am frontend DEVELOPER I LEARN Javascript"));

//3.Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın
// let funct=(cumle)=>{
//     return cumle.split(" ").reduce((start,end)=>end.length>start.length ? end : start)
// }
// console.log(funct("I am frontend DEVELOPER I LEARN Javascript"));

//4.Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
// let funct = (cumle) => {
//      return cumle.split(' ').map((word, index) => word == word.toUpperCase() ? `Tapilan soz: ${word}, İndeks: ${index}`: "").join(" ")
//  }
 
//  console.log(funct("I am frontend DEVELOPER I LEARN Javascript"));
//5.verilmis string-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
// let funct=(cumle)=>{
//      return cumle.split(" ").filter(item=>item.match(/[A-Z]/g) && item.match(/[A-Z]/g).length>2) 
// }
// console.log(funct("I am frontend DEvELOpeR I Lear JavaScriPt"));

//.6. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.Məsələn:  My name is Jhon - MniJ
// let funt=(cumle)=>{
//     return cumle.split(" ").map(item=>item[0]).join("")
// }
// console.log(funt("My name is Jhon"));


//7. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır.
//  İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. 
// Cümlədə heç bir durğu işarəsi olmayacaq.
//  Məsələn: "komputer-k6r, stəkan-s4n, javascript- j8t"
// let funct=(cumle)=>{
//      return cumle.split(" ").map(item=>item[0] + item.slice(1).length+item[item.length-1])
// }
// console.log(funct("komputer, stəkan, javascript"))




//Array Methods:
//1.Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.
// let funct=(arr)=>{
//     let say={}
//     arr.forEach(element =>{say[element]=(say[element]|| 0) +1
//     });
//     console.log(say)
// } 

// (funct([12,22,34,45,12,22]));

//2.Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.
// let funct=(arr)=>{
//      return arr.filter(item => item==item.split("").reverse().join(""));
// }
// console.log(funct(["121","ana","SALAM"]));

//3.Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.
// let funct=(arr)=>{
//      let eded=Number(prompt("Eded daxil edin: "))
//      return eded,arr.filter(item=>item>eded).length
// }
// console.log(funct([12,1,5,55,78,44,155]));

//4.customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.
// let funct=()=>{
// const customers = [
//   {
//     name: "Tyrone",
//     personal: {
//       age: 33,
//       hobbies: ["Bicycling", "Camping"],
//     },
//   },
//   {
//     name: "Elizabeth",
//     personal: {
//       age: 25,
//       hobbies: ["Guitar", "Reading", "Gardening"],
//     },
//   },
//   {
//     name: "Penny",
//     personal: {
//       age: 36,
//       hobbies: ["Comics", "Chess", "Legos"],
//     },
//   },
// ];
//   return customers.map(item=>item.personal.hobbies).reduce((acc,hobbie)=>acc.concat(hobbie), [])
// }
// console.log(funct());


// 5.Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)
// let funct=(array)=>{
//     let arr=[]
//     arr.length=array
//     arr=arr.fill().map(()=>Math.floor(Math.random() * 101))
//     let max=Math.max(...arr)
//     let min=Math.min(...arr)
//     let ortalama=arr.reduce((acc,item)=>acc+item)/arr.length
//     let sum=arr.reduce((acc,item)=>acc+item)
//     let kv=arr.map(item=>item*item)
//     return {arr,max,min,ortalama,sum,kv}  
// }
// console.log(funct(10));







