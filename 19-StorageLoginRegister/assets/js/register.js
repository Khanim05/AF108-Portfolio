// COMMENT ATDIGLARIM SIZIN TASKDA VERDIYINIZ SERTLERDIR.

document.addEventListener("DOMContentLoaded", function(){
    let form=document.querySelector("form")

    let name=document.querySelector("#name")
    let username=document.querySelector("#username")
    let email=document.querySelector("#email")
    let password=document.querySelector("#password")
    let confirmpass=document.querySelector("#confirmpassword")
    let checksTrue=document.querySelector(".checksTrue")
    let checksFalse=document.querySelector(".checksFalse")

    let users=JSON.parse(localStorage.getItem("users")) || []

    form.addEventListener("submit",register)

    function register(e){
        e.preventDefault()
       
        let choose= users.some(
            (user)=> user.username==username.value || user.email==email.value);

            if(!choose){
              let letters=/[a-z]+/
              let upper=/[A-Z]+/
              let numbers=/[0-9]+/
              let line=/[_-]+/
              let mail=/[@]/
              let ps=/[@#$%&]+/
              // 1) Username - Minimum 3, maksimum 20 simvol; yalnız əlifba, rəqəm, alt xətt və tire istifadə oluna bilər.
              if (!(username.value.length>=3 && username.value.length<=20 && upper.test(username.value) && letters.test(username.value) && numbers.test(username.value)&&line.test(username.value))) {
                toast("Username must be 3-20 characters,lowercase,uppercase,numbers,underscores or dashes") 
                return
              }
              // 2) Email - Düzgün e-poçt formatında olmalıdır (məsələn, user@example.com).
              if(!(letters.test(email.value) && mail.test(email.value) && numbers.test(email.value))){
              toast("Email invalid")
              return
              }
              // 3) Sifre Minimum 8 simvol; ən azı bir böyük hərf, bir kiçik hərf, bir rəqəm və
              //  bir xüsusi simvol (məsələn, @, #, $, %, &).  
                 if(!(password.value.length>=8 && upper.test(password.value) && letters.test(password.value) && numbers.test(password.value)&& ps.test(password.value))){
                  toast("Password must be 8 or more characters,uppercase,lowercase,numbers,and symbol(example @, #, $, %, &)")
                  checksFalse.style.display="block"
                  checksTrue.style.display="none"
                  return
                }
                else{
                  checksTrue.style.display="block"
                  checksFalse.style.display="none"
                }
                // 4) Sifre-tesdiqi: Qeydiyyat zamanı daxil edilən şifrə ilə uyğun olmalıdır
                if((password.value!==confirmpass.value)){
                  toast("Password and confirm password do not match")
                  return
                }
                let id=uuidv4()

              let newobj={
                name: name.value,                 
                username: username.value,
                email: email.value,
                password: password.value,
                confirmpassword: confirmpass.value,
                isLogined: false,
                attemps:0,
                lockUntil: null,
                id
              }
              users.push(newobj)
              localStorage.setItem("users",JSON.stringify(users))
              toast("Register success.")

              setTimeout(() => {
                window.location.href="login.html"
              }, 3000);
            }
           
            // 5) Qeydiyyat zamanı daxil edilən istifadəçi adı və e-poçt sistemdə mövcud olmamalıdır.
            //  Eyni istifadəçi adı və ya e-poçt ilə qeydiyyat mümkün
            //   olmamalıdır.  
            else{
                toast("User already exits.")
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
            onClick:function () {} //Calback after click  
        }).showToast()
    }
})