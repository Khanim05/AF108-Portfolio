
//hesab ayarlari 
document.addEventListener("DOMContentLoaded",()=>{
    let users=JSON.parse(localStorage.getItem("users")) || []
    let form=document.querySelector("form")
    let name=document.querySelector("#name")
    let username=document.querySelector("#username")
    let email=document.querySelector("#email")
    let currentpassword=document.querySelector("#CurrentPassword")
    let newpasword=document.querySelector("#newpassword")

    form.addEventListener("submit" ,settings)

    function settings(e) {
        e.preventDefault()

         let loginedUser=users.find((user)=>user.isLogined==true)

    if (loginedUser) {
         loginedUser.name=name.value
         loginedUser.username=username.value
         loginedUser.email=email.value

         if (loginedUser.password==currentpassword.value) {
            if (newpasword.value.length>=8) {
                loginedUser.password=newpasword.value
            }
            else{
                toast("Sifre qisadir")
                return
            }
            
         }
         else{
            toast("Evvelki sifre duzgun deyil")
            return
         }
        toast("Melumatlar yenilendi")
        localStorage.setItem("users",JSON.stringify(users))
        setTimeout(() => {
            window.location.href="index.html"
        }, 1000);
        
    }
    else{
        toast("Istifadeci tapilmadi")
    }
    }
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