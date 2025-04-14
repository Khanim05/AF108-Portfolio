document.addEventListener("DOMContentLoaded",()=>{
    let users=JSON.parse(localStorage.getItem("users")) || []

    let loginedUser=users.find((user)=>user.isLogined===true)

    let userIndex=users.findIndex((user)=>user.id===loginedUser.id)

    let basket=loginedUser.basket
    let basketContainer=document.querySelector(".basket")
    function UserbasketItem() {
        basket.forEach(product => {
            
            let basketItem=document.createElement("div")
            basketItem.classList.add("basket-item")

            let image=document.createElement("div")
            image.classList.add("image")

            let img=document.createElement("img")
            img.src=product.image

            let title=document.createElement("h6")
            title.classList.add("title")
            title.textContent=product.title


            let category=document.createElement("p")
            category.classList.add("category")
            category.textContent=product.category


            let price=document.createElement("p")
            price.classList.add("price")
            price.textContent=(product.price*product.count).toFixed(1)


            let countArea=document.createElement("div")
            countArea.classList.add("count-area")


            let minusBtn=document.createElement("button")
            minusBtn.classList.add("minus-btn")
            minusBtn.textContent="-"

            minusBtn.addEventListener("click", ()=>{
                decrement(product.id,count,minusBtn,price)
            })

            let count=document.createElement("p")
            count.classList.add("count")
            count.textContent=product.count


            let plusBtn=document.createElement("button")
            plusBtn.classList.add("plus-btn")
            plusBtn.textContent="+"
            plusBtn.addEventListener("click", ()=>{
                increment(product.id,count,minusBtn,price)
            })


            let btnRemove=document.createElement("button")
            btnRemove.classList.add("btn","btn-danger")
            btnRemove.textContent="Remove"

            btnRemove.addEventListener("click",()=>{
                removeProduct(product.id,btnRemove)
            })

            image.appendChild(img)
            countArea.append(minusBtn,count,plusBtn)
            basketItem.append(image,title,category,price,countArea,btnRemove)

            basketContainer.appendChild(basketItem)
        
        });  
    }



    function total() {
        let paymentcash=0
        basket.forEach(element => {
           paymentcash+=element.count*element.price
        });
        let totalPrice=document.querySelector(".total-price")
        totalPrice.textContent=paymentcash.toFixed(2)
    }

    function increment(productId,countElem,minusbtn,priceElem) {
        let basketproduct=basket.find((product)=>product.id===productId)
        if (basketproduct) {
            basketproduct.count++
            countElem.textContent=basketproduct.count
            priceElem.textContent=basketproduct.count * basketproduct.price

            users[userIndex].basket=basket
            localStorage.setItem("users",JSON.stringify(users))
            // console.log(priceElem);
            
        }
        
        if (basketproduct.count>1) {
            minusbtn.removeAttribute("disabled") 
        }
        users[userIndex].basket=basket
        localStorage.setItem("users",JSON.stringify(users))
        total()
    }

    function decrement(productId,countElem,minusbtn,priceElem) {
        let basketproduct=basket.find((product)=>product.id===productId)
        if (basketproduct) {
            basketproduct.count--
            countElem.textContent=basketproduct.count
            priceElem.textContent=(basketproduct.count* basketproduct.price).toFixed(1)
        }
        
        if (basketproduct.count==1) {
            minusbtn.setAttribute("disabled","true") 
        }
        localStorage.setItem("users",JSON.stringify(users))
        users[userIndex].basket=basket

        total()
    }
    function removeProduct(productId,btnelement) {
        let removeproductindex=basket.findIndex((element)=>element.id==productId)
        if (removeproductindex != -1) {
            basket.splice(removeproductindex,1)
            btnelement.closest(".basket-item").remove()
            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users)); 
            toast("Basketdən 1 məhsul silindi")
        }
        total()
    }
    let removeAll=document.querySelector(".remove-all")
            removeAll.addEventListener("click",()=>{
            removeAllItems(removeAll)
            })

    function removeAllItems(removeall) {
        basket.length = 0;
        basketContainer.innerHTML = "";
        users[userIndex].basket = basket;
        localStorage.setItem("users", JSON.stringify(users));
        total()
        UserbasketItem()
        toast("Basket təmizləndi")
    }




// 1) Sinifde gosterdiyim kimi Price counta uygun hesablansin.
// 2) Elave olaraq asagida bir button qoyun ve butun basket productalrini silsin UI ve Localdan.
total()
UserbasketItem()
})
let toast=(text)=>{
    Toastify({
        text: `${text}`,
        duration:3000,
        position:"right",
        stopOnFocus: true,
        style:{
            background:"linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick:function () {} 
    }).showToast()
}
