import { useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import { addTodo,delItem,delAll, editTodo} from '../../redux/features/todoSlider'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import './todo.css'


const Todo = () => {
    let todos=useSelector((state)=>state.todo.value)
    let dispatch=useDispatch()
    let [input,setInput]=useState("")  
    console.log(todos)

    let [modal,setModal]=useState(false)
    let [editUser,setEditUser]=useState(null)
    let [editInput,setEditInput]=useState("")

    let addClick=()=>{
        if (input!="") {
            dispatch(addTodo(input))
            setInput("")
        }
        
    }

    let editItem=(item)=>{
        setModal(true)
        setEditUser(item.id)
        setEditInput(item.name)
    }
    


    
  return (
    <div className='container'>
        {  modal ? 
        (
        <div className='top_area'>
            <input type="text" placeholder='Edit Task' value={editInput} onChange={(e)=>setEditInput(e.target.value)}/>
            <button onClick={() => {
            dispatch(editTodo({ id: editUser, newName: editInput }))
            setModal(false)
            setEditUser(null)
            setEditInput("")
            }}>
                Edit task
                </button> 
        </div>
        )
        : 
        (
        <div className='top_area'>
           <input type="text" placeholder='Enter Task' value={input} onChange={(e)=>setInput(e.target.value)}/>
           <button onClick={addClick}>Add btn</button> 
           </div>
        )}
        
            <ul>
              {todos.map((item,index) => (
                <li key={item.id}>
                  <p>{index+1}. {item.name}</p>
                  <div>
                    <MdDelete onClick={()=>dispatch(delItem(item.id))} className='icon'/>
                    <MdEdit  onClick={()=> editItem(item)} className='icon'/>
                  </div>
                </li>
              ))}
            </ul>
            <button onClick={()=>dispatch(delAll())}>Delete All</button>
    
    </div>
  )
}

export default Todo
