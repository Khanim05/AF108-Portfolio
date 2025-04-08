let card=document.createElement("div")
card.classList.add("card")

let image=document.createElement("div")
image.classList.add("image")

let heart=document.createElement("div")
heart.classList.add("heart")

let icon=document.createElement("i")
icon.classList.add("fa-regular","fa-heart")

let img=document.createElement("img")
img.setAttribute("src","https://picsum.photos/200/300")

let cardContent=document.createElement("div")
cardContent.classList.add("cardContent")

let flexdiv=document.createElement("div")
flexdiv.classList.add("flexdiv")

let detached=document.createElement("p")
detached.classList.add("dedach-text")
detached.textContent="DETACHED HOUSE"

let iconDiv=document.createElement("div")
iconDiv.classList.add("IconDiv")

let circle=document.createElement("i")
circle.classList.add("fa-solid", "fa-circle", "fa-2xs")


let old=document.createElement("p")
old.classList.add("old")
old.textContent="5Y OLD"

let price=document.createElement("p")
price.classList.add("price")
price.textContent="$750,000"

let terrace=document.createElement("p")
terrace.classList.add("terrace")
terrace.textContent="742 Evergreen Terrace"

let hr1=document.createElement("hr")
hr1.classList.add("hr1")

let general=document.createElement("div")
general.classList.add("general")

let left=document.createElement("div")
left.classList.add("left")

let generalicon=document.createElement("i")
generalicon.classList.add("fa-solid","fa-bed")

let genereltext=document.createElement("p")
genereltext.classList.add("generaltext")
genereltext.textContent="3 Bedrooms"

let right=document.createElement("div")
right.classList.add("right")

let generalicon1=document.createElement("i")
generalicon1.classList.add("fa-solid","fa-bath")

let generaltext1=document.createElement("p")
generaltext1.classList.add("generaltext")
generaltext1.textContent="2 Bathrooms"

let hr2=document.createElement("hr")
hr2.classList.add("hr2")

let realtor=document.createElement("p")
realtor.classList.add("realtor")
realtor.textContent="REALTOR"

let bottom=document.createElement("div")
bottom.classList.add("bottom")

let imgdiv=document.createElement("div")
imgdiv.classList.add("imgdiv")

let imgbottom=document.createElement("img")
imgbottom.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/7/76/50px_x_50px_coloured_logo_on_white_background.svg")

let txtdiv=document.createElement("div")
txtdiv.classList.add("txtdiv")

let fullname=document.createElement("p")
fullname.classList.add("fullname")
fullname.textContent="Tifanny Heffner"

let number=document.createElement("p")
number.classList.add("number")
number.textContent="(055) 555-4321"

txtdiv.append(fullname,number)
imgdiv.append(imgbottom)
bottom.append(imgdiv,txtdiv)
left.append(generalicon,genereltext)
right.append(generalicon1,generaltext1)
general.append(left,right)
iconDiv.append(circle)
flexdiv.append(detached,iconDiv,old)
cardContent.append(flexdiv,price,terrace,general,realtor,bottom)
heart.append(icon)
image.append(heart,img)

card.append(image,cardContent)

let body = document.querySelector("body");
body.append(card);
console.log(body);


card.style.margin="50px"
card.style.width="450px"
card.style.border="1px solid black"
card.style.padding="5px"

heart.style.display="inline-flex"
heart.style.alignItems="center"
heart.style.justifyContent="center"
heart.style.width="30px"
heart.style.height="30px"
heart.style.borderRadius="50%"
heart.style.background="tranparent"
heart.style.position="absolute"
heart.style.color="white"
heart.style.top="15px"
heart.style.right="15px"
heart.style.cursor="pointer"
heart.style.fontSize="25px"

image.style.width="100%"
image.style.height="300px"
image.style.position="relative"

img.style.width="100%"
img.style.height="100%"
img.style.borderRadius="3px"

cardContent.style.padding="0 30px"


 flexdiv.style.display="flex"
 flexdiv.style.gap="10px"
 flexdiv.style.fontWeight="bold"


iconDiv.style.marginTop="18px"
iconDiv.style.fontSize="10px"

price.style.fontSize="50px"
price.style.marginBottom="10px"

terrace.style.fontSize="20px"
terrace.style.opacity="0.9"

general.style.display="flex"
general.style.gap="50px"

left.style.display="flex"
left.style.gap="20px"

right.style.display="flex"
right.style.gap="20px"

generalicon.style.marginTop="10px"
generalicon.style.fontSize="30px"

generalicon1.style.marginTop="10px"
generalicon1.style.fontSize="30px"

genereltext.style.fontSize="18px"
genereltext.style.fontWeight="bold"
genereltext.style.opacity="0.9"

generaltext1.style.fontSize="18px"
generaltext1.style.fontWeight="bold"
generaltext1.style.opacity="0.9"

realtor.style.fontWeight="bold"
realtor.style.fontSize="12px"
realtor.style.marginBottom="1px"

bottom.style.display="flex"
bottom.style.gap="10px"

fullname.style.fontWeight="bold"
fullname.style.fontSize="15px"
fullname.style.marginTop="15px"
imgbottom.style.marginTop="6px"

number.style.fontSize="13px"











