
let url=new URLSearchParams(location.search)
 
let id=Number(url.get("id"))
// console.log(id);


async function products() {
  let result= await (await fetch("https://fakestoreapi.com/products")).json()
  let findProd=result.find((product)=>product.id===id)
if (!findProd) {
    productContainer.innerHTML="Belə id-li product yoxdur"
    return
}
let productContainer=document.querySelector(".product-container")

productContainer.innerHTML = `
  <div class="product-image">
                        <img src="${findProd.image}" alt="" class="img">
                        
                    </div>
                    <div class="product-details">
                        <h4 class="product-title">${findProd.title}</h4>
                        <p class="product-category">category: ${findProd.category}</p>
                        <p class="product-price">$${findProd.price}</p>
                        <p class="product-desc">${findProd.description}</p>
                    
                     <div class="product-rating">
                        <span><i class="fa-solid fa-star staricon"></i>${findProd.rating.rate}</span>
                        <span>(${(findProd.rating.count)} reviews)</span>
                    </div>
                    <div class="quantity-selector">
                        <button class="btn-minus" disabled>-</button>
                        <input type="number" value="1" min="1" class="count"/>
                        <button class="btn-plus">+</button>
                    </div>

                    <button class="btn btn-danger add-to-cart">
                        add to cart
                    </button>
                        </div>
                   
`;
let btn=document.querySelector(".add-to-cart")
btn.addEventListener("click", ()=>{
    addBasket(findProd)
})
   
let users=JSON.parse(localStorage.getItem("users")) || []
let loginedUser=users.find((item)=>item.isLogined==true)
let loginedUserindex=users.findIndex((item)=>item.id==loginedUser.id)

let basket=loginedUser.basket
 function addBasket(product) {
    let existproducts=basket.find((elem)=>elem.id==product.id)

    if (!existproducts) {
        basket.push({...product})
    }
    else{
        existproducts.count+=product.count
    }

    users[loginedUserindex].basket=basket
    localStorage.setItem("users",JSON.stringify(users))
    toast("Məhsul səbətə əlavə olundu.")
}


let toast=(text)=>{
    Toastify({
        text: `${text}`,
        duration:1000,
        position:"right",
        stopOnFocus: true,
        style:{
            background:"linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick:function () {} //Calback after click  
    }).showToast()
}

let btnminus=document.querySelector(".btn-minus")

let count=document.querySelector(".count")

btnminus.addEventListener("click", ()=>{
    decrement(findProd,count,btnminus)})


let btnplus=document.querySelector(".btn-plus")

btnplus.addEventListener("click", ()=>{
    increment(findProd,count,btnminus)
})

findProd.count=findProd.count || 1
let countsave=JSON.parse(localStorage.getItem(`${findProd.id}`))

function increment(product,countElem,minusBtn) {
    product.count++
    countElem.value=product.count
    if (product.count>1) {
        minusBtn.removeAttribute("disabled")
    }
    localStorage.setItem(`${findProd.id}`,countsave)
}
increment()

function decrement(product,countElem,minusBtn) {
    product.count--
    countElem.value=product.count
    if (product.count==1) {
        minusBtn.setAttribute("disabled",true)
    } 
    localStorage.setItem(`${findProd.id}`,countsave)
}
decrement()
}
products()

// 1) Sinifde gosterdiyim kimi Product Detail-Page de butun funksiyanalliqlar yazilsin.
// 2) Evvelki proyektdeki products arrayinden datalari Promise vasitesile alib yazirsiniz.( Home ve DetailPage - de)



