document.addEventListener("DOMContentLoaded", ()=>{
    let users=JSON.parse(localStorage.getItem("users")) || []
    let register=document.querySelector(".register")
    let login=document.querySelector(".login")
    let logout=document.querySelector(".logout")
    let btnusername=document.querySelector(".username")
    let setting=document.querySelector(".setting")

    let loginedUser=users.find((user)=>user.isLogined==true)
    if(loginedUser){
        register.classList.add("d-none")
        login.classList.add("d-none")
        logout.classList.remove("d-none")
        setting.classList.remove("d-none")

        btnusername.textContent=loginedUser.username
    }
    else{
        register.classList.remove("d-none")
        login.classList.remove("d-none")
        logout.classList.add("d-none")
        setting.classList.add("d-none")
    }

    logout.addEventListener("click", logoutUser)
    function logoutUser(e) {
        e.preventDefault()
        loginedUser.isLogined=false
        localStorage.setItem("users",JSON.stringify(users))
        window.location.reload()
    }

})