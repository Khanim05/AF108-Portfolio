import React, { useEffect, useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdEdit, MdDelete } from "react-icons/md";
import styles from './useReduce.module.css'

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: uuidv4(),
          name: action.nameText,
          surname: action.surnameText
        }
      ];
      case "deleteItem":
      return state.filter((item)=>item.id!=action.id)
      case "edit":
        return state.map((item)=>
           item.id== action.id 
        ? 
        {...item, name:action.newName,surname:action.newSurname}
        : item
        )
        
      case "deleteAll":
        return []

    default:
      return state;
  }
}

const UseReduce = () => {
  let initialState = JSON.parse(localStorage.getItem("users")) || [];

  let [nameText, setNameText] = useState("");
  let [surnameText, setSurnameText] = useState("");

  let [state, dispatch] = useReducer(reducer, initialState);

  let [showModal,SetShowModal]=useState(false)

  let [editName,SetEditName]=useState("")

  let [editSurname,SetEditSurname]=useState("")

  let[editUsers,setEditUsers]=useState(null)

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [state]);
 
  function addUsers() {
    if (nameText !== "" && surnameText !== "") {
      dispatch({ type: "add", nameText, surnameText });
      setNameText("");
      setSurnameText("");
    }
  }

  function editItem(item) {
    SetShowModal(true)
    setEditUsers(item.id)
    SetEditName(item.name)
    SetEditSurname(item.surname)
  }

  return (
    <div className={styles.container}>
        {showModal ? (
            <div className={styles.top_area}>
            <input
              type="text"
              placeholder='Edit your name'
              onChange={(e) => SetEditName(e.target.value)}
              value={editName}
              className={styles.edit_area}
            />
            <input
              type="text"
              placeholder='Edit your surname'
              onChange={(e) => SetEditSurname(e.target.value)}
              value={editSurname}
              className={styles.edit_area}
            />
            <button onClick={()=>{
                dispatch({type:"edit",id:editUsers,newName:editName,newSurname:editSurname})
                SetShowModal(false)
            }}
                
                
                >Edit</button>
            </div>
        ) : (
            <div className={styles.top_area}>
      <input
        type="text"
        placeholder='Enter your name'
        onChange={(e) => setNameText(e.target.value)}
        value={nameText}
      />
      <input
        type="text"
        placeholder='Enter your surname'
        onChange={(e) => setSurnameText(e.target.value)}
        value={surnameText}
      />
      <button onClick={addUsers}>Add</button>
      </div>
        )}

      <ul>
        {state.map((item,index) => (
          <li key={item.id}>
            <p>{index+1}. {item.name} {item.surname}</p>
            <div>
              <MdDelete onClick={()=> dispatch({type:"deleteItem", id:item.id})} className={styles.icon}/>
              <MdEdit  onClick={()=> editItem(item)} className={styles.icon}/>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={()=>dispatch({type:"deleteAll"})}>Delete All</button>
    </div>
  );
};

export default UseReduce;
