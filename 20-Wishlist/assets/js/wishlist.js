document.addEventListener("DOMContentLoaded" , ()=>{
    let users=JSON.parse(localStorage.getItem("users"))|| []

    let loginedUser=users.find((user)=>user.isLogined== true)
     
    let userwishlist=loginedUser.wishlist

   
    function createWishlistItem() { 
        userwishlist.forEach(item => {
            let wishlistItem=document.createElement("div")
            wishlistItem.classList.add("wishlist-item")
    
            let Image=document.createElement("div")
            Image.classList.add("image")
    
            let img=document.createElement("img")
            img.src=`${item.image}`

            let title=document.createElement("h5")
            title.classList.add("title")
            title.textContent=`${item.title.slice(0,15)} ...`
    
            let category=document.createElement("p")
            category.classList.add("category")
            category.textContent=`${item.category}`
    
            let price=document.createElement("p")
            price.classList.add("price")
            price.textContent=`${item.price}`

    
            let removeBtn=document.createElement("button")
            removeBtn.classList.add("btn","btn-danger")
            removeBtn.textContent="Remove"

            removeBtn.addEventListener("click", ()=>{
                removeProduct(item.id,removeBtn)
            })

            Image.appendChild(img)
            wishlistItem.append(Image,title,category,price,removeBtn)

            let wishlist=document.querySelector(".wishlist")
            wishlist.append(wishlistItem)
    });
    }

    function removeProduct(productId, btnElement) {
        let LoginuserIndex = users.findIndex((user) => user.id == loginedUser.id);
    
        let loginedUserProductIndex = loginedUser.wishlist.findIndex((product) => product.id == productId);
             
        if (loginedUserProductIndex !== -1) {
            loginedUser.wishlist.splice(loginedUserProductIndex, 1);
            users[LoginuserIndex] = loginedUser;
            localStorage.setItem("users", JSON.stringify(users)); 
            toast("Mehsul sevimlilerden silindi");  
            
            btnElement.closest(".wishlist-item").remove();
        }
    }
    
    createWishlistItem()
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
 
})   
