let num1=document.querySelector(".num1")
let num2=document.querySelector(".num2")
let result=document.querySelector(".result")
let toplama=document.querySelector(".toplama")
//toplamahisse
toplama.addEventListener("click",function(Cem){
    Cem.preventDefault();
    if (num1.value!="" && num2.value!="") {
         let cem=Number(num1.value)+Number(num2.value);
        result.value=cem;
}
    else if(num1.value!="" && num2.value==""){
        alert("2ci ədədi daxil edin.")}
   
    else if(num1.value=="" && num2.value!=""){
        alert("1ci ədədi daxil edin.")}

    else{
        alert("1ci və 2ci ədədi daxil edin")
    }
    num1.value=""
    num2.value=""
})

//cixma
let subs=document.querySelector(".subs")
subs.addEventListener("click",function(Subs){
    Subs.preventDefault();
    if (num1.value!="" && num2.value!="") {
         let azalma=Number(num1.value)-Number(num2.value);
        result.value=azalma;
}
    else if(num1.value!="" && num2.value==""){
        alert("2ci ədədi daxil edin.")}
   
    else if(num1.value=="" && num2.value!=""){
        alert("1ci ədədi daxil edin.")}

    else{
        alert("1ci və 2ci ədədi daxil edin")
    }
    num1.value=""
    num2.value=""
})

//vurma
let vurma=document.querySelector(".vurma")
vurma.addEventListener("click",function(Vurma){
    Vurma.preventDefault();
    if (num1.value!="" && num2.value!="") {
         let multi=Number(num1.value)*Number(num2.value);
        result.value=multi;
}
    else if(num1.value!="" && num2.value==""){
        alert("2ci ədədi daxil edin.")}
   
    else if(num1.value=="" && num2.value!=""){
        alert("1ci ədədi daxil edin.")}

    else{
        alert("1ci və 2ci ədədi daxil edin")
    }
    num1.value=""
    num2.value=""
})

//bolme
let bolme=document.querySelector(".bolme")
bolme.addEventListener("click",function(Bolma){
    Bolma.preventDefault();
    if (num1.value!="" && num2.value!="") {
        if(Number(num2.value)===0){
            alert("0 a bolme yoxdur")
        }
        else{
              let div=Number(num1.value)/Number(num2.value);
        result.value=div;
        }
       
}
    else if(num1.value!="" && num2.value==""){
        alert("2ci ədədi daxil edin.")}
   
    else if(num1.value=="" && num2.value!=""){
        alert("1ci ədədi daxil edin.")}
    else{
        alert("1ci və 2ci ədədi daxil edin")
    }
    num1.value=""
    num2.value=""
})