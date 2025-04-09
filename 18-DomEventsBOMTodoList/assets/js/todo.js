let form=document.querySelector("form")
let input=document.querySelector(".input")
let add=document.querySelector(".add")
let list=document.querySelector(".list")
let deleteds=document.querySelector(".deleteds")

add.addEventListener("click", createTodo);
function createTodo(e){
    e.preventDefault()

    let listItem=document.createElement("li")
    listItem.classList.add("listItem")

    let checkbox=document.createElement("input")
    checkbox.classList.add("checkbox")
    checkbox.setAttribute("type","checkbox")

    let todo=document.createElement("span")
    todo.classList.add("todo")
    todo.textContent=input.value

    let icons = document.createElement("div")
    icons.classList.add("icons")

    let del=document.createElement("i")
    del.classList.add("fa-solid", "fa-trash", "del")
    
    let edit=document.createElement("i")
    edit.classList.add("fa-solid", "fa-pen-to-square", "edit")
    
    icons.append(del,edit)
    listItem.append(checkbox,todo,icons)
    list.append(listItem)
    todo.textContent=input.value
    
    edit.addEventListener("click" , function(Edit){
        let parentelem=Edit.target.closest(".listItem")
        let currentt=parentelem.querySelector(".todo")
        let chang=prompt("Elementi deyisin",currentt.textContent)
        currentt.textContent=chang})

    checkbox.addEventListener("click",function(Check){
        if(checkbox.checked==true){
          listItem.style.background="green"
          todo.style.textDecoration="line-through"
          todo.style.color="white"
          del.style.display="block"

          del.addEventListener("click",function(Del){
           let parentelement=Del.target.closest(".listItem")
           parentelement.remove()
          })
        }
        else{
            listItem.style.background="red"
            todo.style.textDecoration="none"
            todo.style.color="white"
            del.style.display="none"
        }})


    input.value=""
    deleteds.addEventListener("click",(e)=>{
      let listItems=document.querySelectorAll(".listItem")
      for (let i = 0; i < listItems.length; i++) {
              listItems[i].remove()
        
      }
    
    })
}