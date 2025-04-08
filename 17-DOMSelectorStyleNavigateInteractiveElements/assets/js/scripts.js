
// 3.Card elementlerini tek-tek secib contentlerini deyisin.Content serbestdir Her kes ucun.
// let cardTitle=document.querySelector(".cardContent .cardTitle")
// cardTitle.textContent="Card basligi"
// let cardtext=document.querySelector(".cardText")
// cardtext.textContent="Useful"
// let cardprice=document.querySelector(".cardPrice")
// cardprice.textContent="200 Azn"
// let btn=document.querySelector(".shopBtn")
// btn.textContent="Sifaris edin"


// 1. Card uzerinde navigate ederek butun datalari bir objecte yigaraq consola yazdirin.Productu wishliste elave edirsiz ona gore heart clasina sahib olan div-den yola cixacaqsiniz.Her iki usulla ilk olaraq elementler uzerinde kecid ederek elave edeceksiniz daha sonra closest istfade ederek.
// let heart=document.querySelector(".heart i")
// let img=heart.nextElementSibling
// let classname=document.querySelector(".cardContent")
// let title=classname.childNodes[1]
// let text=classname.childNodes[2]
// let price=classname.childNodes[3]
// let btn=classname.childNodes[4]
// let mehsul={
//     icon: heart,
//     photo: img,
//     basliq : title,
//     yazi:text,
//     qiymet:price,
//     buton: btn      
// }
// console.log(mehsul)

//closest ile
// let image=document.querySelector(".image")
// let card=image.closest(".card")
// let heart=card.querySelector(".heart")
// let img=card.querySelector("img")
// let title=card.querySelector(".cardTitle")
// let text=card.querySelector(".cardText")
// let price=card.querySelector(".cardPrice")
// let btn=card.querySelector(".shopBtn")
// let mehsul={
//     icon: heart,
//     photo: img,
//     basliq : title,
//     yazi:text,
//     qiymet:price,
//     buton: btn      
// }
// console.log(mehsul)

//2.2.Asagidaki stilleri card elementlerine verin.
// let card=document.querySelector(".card")
// card.style.margin="50px"
// card.style.width="300px"
// card.style.border="1px solid black"
// card.style.padding="10px"

// let heart=document.querySelector(".heart")
// heart.style.display="inline-flex"
// heart.style.alignItems="center"
// heart.style.justifyContent="center"
// heart.style.width="30px"
// heart.style.height="30px"
// heart.style.borderRadius="50%"
// heart.style.background="silver"
// heart.style.position="absolute"
// heart.style.top="15px"
// heart.style.right="15px"
// heart.style.cursor="pointer"

// let image=document.querySelector(".image")
// image.style.width="100%"
// image.style.height="300px"
// image.style.position="relative"

// let img=document.querySelector("img")
// img.style.width="100%"
// img.style.height="100%"
// img.style.borderRadius="3px"

// let cardcontent=document.querySelector(".cardContent")
// cardcontent.style.display="flex"  
// cardcontent.style.flexDirection="column"
// cardcontent.style.alignItems="center"
// cardcontent.style.gap="10px"
// cardcontent.style.marginTop="20px"
// cardcontent.style.color="burlywood"

// let price=document.querySelector(".cardPrice")
// price.style.display="inline-block"
// price.style.padding="10px"
// price.style.background="skyblue"
// price.style.color="white"
// price.style.border="none"
// price.style.cursor="pointer"
// price.style.textTransform="uppercase"
// price.style.borderRadius="5px"
// price.style.fontWeight="bold"

// let btn=document.querySelector(".shopBtn")
// btn.style.width="100%"
// btn.style.padding="10px"
// btn.style.background="skyblue"
// btn.style.border="none"
// btn.style.cursor="pointer"
// btn.style.color="white"
// btn.style.textTransform="uppercase"
// btn.style.borderRadius="5px"
// btn.style.fontWeight="bold"




