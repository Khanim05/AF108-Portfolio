//1.Hər biri 2 parametr qəbul edib və riyazi əməlləri yerinə yetiren funksiya yazin.
// let a,b,c,d
// let funct=(num1,num2)=>{
// a=num1+num2;
// b=num1-num2;
// c=num1*num2;
// d=num1/num2;
// return {a, b, c, d}
// };
// console.log(funct(10,20));

//2.Verilen parametrlerde tek ve cutlerin tapilmasi.(Rest operatoru istifade etmek)
// (14, 20, 35, 40, 57, 60, 100)
// let number=(...array)=>{
//    for (let i = 0; i < array.length; i++) {
//     if(array[i]%2==0){
//         console.log(`Cut ededdir: ${array[i]}`)
//     }
//     else{
//         console.log(`tek ededdir: ${array[i]}`)
//     }
//    }
// }
// number(14, 20, 35, 40, 57, 60, 100)

//3.Verilmis arreyde elementlerin həm 4-ə, həm də 5-ə bölününen
//  elementlerin cemini tapin.
// let div=()=>{
// let array=[14, 20, 35, 40, 57, 60, 100]
// let cem=0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i]%4==0 && array[i]%5==0) {
//         cem+=array[i]
//     }  
// }
//     return cem
// }
// console.log(`ededlerin cemi: ${div()}`);

//4.Daxil edilmiş cümlədə daxil edilmis simvoldan nece eded
//  olduğunu tapan Proqramın alqoritmini yazin.
// let program=()=>{
//     let cumle="Otaqda coxlu pisikler ve itler var.";
//     let say=0;
//     for (let i = 0; i < cumle.length; i++) {
//         if(cumle[i]=="a"){
//             say++;
//         }
//     }
//     return say;
// }
// console.log("Simvolun sayi: "+program());

//5.Daxil edilen ededin Aboundant ve ya Deficient oldugunu
//  yoxlayan algorithm.(Abundant ədəd öz müsbət bolenlerinin(ozunden basqa)
//  cəmi özündən böyük olan müsbət tam ədədlərə deyilir. Eks halda Deficient
//  eded olur. 12-Aboundant, 13- Deficient)
// let check=(num1)=>{
//     let cem=0;
//     for (let i = 1; i < num1; i++) {
//          if (num1 % i ==0) {
//             cem+=i
//           } 
//     }
//     if(cem>num1){
//        console.log(`eded aboundantdir: ${num1}`);
       
//     }
//     else{
//         console.log(`eded deficentdir: ${num1}`);
//     }
// }
// (check(12));


//6.Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran funksiya yazın.
// let funct=(...arr)=>{
//     let new_array=[]
//     for (let i = 0; i < arr.length; i++) {
//         new_array.push(arr[i]*arr[i]) 
//     }
//     return new_array
// }
// console.log((funct(14, 20, 35, 40, 57, 60, 100)));

//7.İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var.
//  Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların
//  fərqini array şəklində qaytaran funksiya yazın. Məsələn - [13,67,54]
let funct=(...array)=>{
   let new_array=[]
   let min=array[0].age
   let max=array[0].age
    for (let i = 1; i < array.length; i++) {
        if(min>array[i].age){
            min=array[i].age
        }
        if(max<array[i].age){
            max=array[i].age
        }  
    }
    new_array.push(max,min,max-min)
    return new_array
}
console.log(funct(
           {name:"Xanim", age:20},
           {name:"Lale", age:18},
           {name:"Gulnar", age:40},
           {name:"Nizami",age:7},
           {name:"Mahmud",age:46}))







    

