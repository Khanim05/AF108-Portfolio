// 1.Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda
//  daxil olduğu saata uyğun ona mesaj çıxarsın
// let funct=()=>{
//   let nowdate=new Date()
//   let date=new Date();
//   if (nowdate==date) {
// }
// else {
//     alert(`siz hal hazirdaki saatdasiniz`)
//     console.log(nowdate)
// }
// }
// funct()
// 2.Object Destructing istifadə edərək employee  obyektindən name, department və contact
//  (email, phone, emergencyContact sahələri daxil olmaqla) 
// məlumatlarını əldə edin. Həmçinin emergencyContact-də name və relation məlumatı əldə edin.
// const employee = {
//   name: "Farid Ali",
//   department: "Engineering",
//   contact: {
//     email: "farid.ali@example.com",
//     phone: "555-1234",
//     emergencyContact: {
//       name: "Far For",
//       relation: "Spouse"
//     }
//   }
// };
// let {name,department,contact,emergencyContact}=employee
// console.log("name: "+name+",","department: "+department+",","email:"+contact.email+",","phone"+contact.phone+",","emergencyContactName: "+contact.emergencyContact.name+",","emergencyContactRelation: "+contact.emergencyContact.relation)
//
// Output:
// name: "Farid Ali", department: "Engineering", email: "farid.ali@example.com",
// phone: "555-1234", emergencyContactName: "Far For", emergencyRelation: "Spouse"

// 3.Bu API-dən alınan məlumatları təmsil edir
// const apiResponse = [
//   {
//     id: 1,
//     title: "JavaScript əsasları",
//     author: "Səid Məmmədov",
//     stats: [2500, 150, 30]      //[oxunma, bəyənmə, şərhlər]
//   },
//   {
//     id: 2,
//     title: "Array Destructuring",
//     author: "Leyla Əliyeva",
//     stats: [1800, 220, 45]
//   },
//   {
//     id: 3,
//     title: "Müasir JavaScript",
//     author: "Tural Həsənli",
//     stats: [3200, 380, 70]
//   }
// ];
// let {id,title,author,stats}=apiResponse[1]
// let [read,like,comment]=stats
// console.log("Meqale: "+title,"Muellif: "+author,"oxuma: "+ read,"beyenme: "+ like,"serh: "+comment)

// 1. Destructuring istifadə edərək ikinci məqalənin məlumatlarını çıxarın
// 2. stats array-ini də destructuring edin (oxunma, bəyənmə, şərhlər)
// 3. Aşağıdakı formatda nəticəni console-a çıxarın:
// "Məqalə: Array Destructuring, Müəllif: Leyla Əliyeva, 1800 oxunma, 220 bəyənmə, 45 şərh"

// 4.Bu tapşırıqda hər iki operatoru birlikdə istifadə edin
// 
//  1. Optional chaining ilə təhlükəsiz şəkildə userData-dan məlumatları əldə edin
//  2. Nullish coalescing ilə əksik məlumatlar üçün default dəyərlər təyin edin
 
//   Nəticə olaraq bu məlumatları qaytarın:
//   İstifadəçi adı (default: "Qonaq")
//   Profil şəkli URL (default: "/default-avatar.png")
//   Bio məlumatı (default: "Məlumat yoxdur")
//   Əlaqə emaili (default: "təyin edilməyib")
//   Premium statusu (default: false)
 function renderUserProfile(userData) {
    return `${userData.user?.username ?? "Qonaq"}
    ${userData.user?.profile?.avatar ?? "/default-avatar.png"}
    ${userData.user?.profile?.bio || "melumat yoxdur"}
    ${userData.user?.contact?.email ?? "teyin edilmeyib"} 
    ${userData.user?.account?.premium ?? "false"}`
}

//Test cases
console.log(renderUserProfile({
  user: {
    username: "tahir2023",
    profile: {
      avatar: "/users/tahir.jpg",
      bio: "JavaScript developer",
    },
    contact: {
      email: "tahir@example.com"
    },
    account: {
      premium: true
    }
  }
}));

console.log(renderUserProfile({
  user: {
    username: "aynur",
    profile: {
      bio: ""
    },
    contact: {}
  }
}));

console.log(renderUserProfile({
  user: {
    username: null
  }
}));
console.log(renderUserProfile({}));

