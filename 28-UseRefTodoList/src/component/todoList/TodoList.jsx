import React, { useState, useEffect } from 'react';
import styles from './todolist.module.css';
import { v4 as uuidv4 } from 'uuid';
import Button from '../button/Button';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const TodoList = () => {
    const notify = () => toast("Delete all item");
    const edit=()=>toast("Edit item")
    const mark=()=>toast("Mark item")
    const del=()=>toast("Delete item")
    const addItem=()=>toast("Add item")

  let [inputTodo, setInputTodo] = useState("");

  let [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  let [show, setShow] = useState(false);

  let [inputEditTodo, setInputEditTodo] = useState(""); 

  let [editTodo, setEditTodo] = useState(null); 

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    if (editTodo) {
      setInputEditTodo(editTodo.name);
    }
  }, [editTodo]);

  function add() {
    if (inputTodo !== "") {
      const newTodo = {
        id: uuidv4(),
        name: inputTodo,
        completed:false
      };
      setTodos([...todos, newTodo]);
      setInputTodo("");
    }
  }

  function deleteItem(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function editItem(item) {
    setEditTodo(item);
    setInputEditTodo(item.name);
    setShow(true);
  }

  function updateTodo() {
    const updatedTodos = todos.map((todo) =>
      todo.id === editTodo.id ? { ...todo, name: inputEditTodo } : todo
    );
    setTodos(updatedTodos);
    setShow(false);
  }

  function allDelete() {
    setTodos([])
  }
 function todoComplete(id) {
    let updated = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updated)
 }
  return (
   
    <div className={styles.container}>
        
      <h1 className={styles.title}>Todo List</h1>

      {show ? (
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setInputEditTodo(e.target.value)}
            value={inputEditTodo}
            placeholder="Edit todo"
          />
          <Button className={styles.button} onClick={() => { updateTodo(); edit()}}>Edit</Button>
        </div>
      ) : (
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setInputTodo(e.target.value)}
            value={inputTodo}
            placeholder="Add todo"
          />
          <Button className={styles.button} onClick={() => { add(); addItem()}}>Add</Button>
        </div>
      )}

      <ul className={styles.list}>
        {todos.map((item, index) => (
          <li key={item.id} className={styles.listItem}>
              <p
              onClick={() =>{ todoComplete(item.id);mark()}}
              className={`${styles.todoText} ${item.completed ? styles.completed : styles.notComplete}`}
            >{index + 1}. {item.name}</p>
        
      
            <div className={styles.icons}>
                {item.completed && (
                   <MdDelete className={styles.icon} onClick={() => {deleteItem(item.id);del()}} /> 
                )}
                
              
              <FaEdit className={styles.icon} onClick={() => {editItem(item)}} />
            </div>
            
          </li>
        ))}
        <Button className={styles.button} onClick={() => { allDelete(); notify(); }}>
            All Delete </Button>

      </ul>
      <ToastContainer
        position="top-left" 
        autoClose={5000}
        hideProgressBar={false} 
        newestOnTop={false} 
        closeButton={true} 
        rtl={false} 
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" 
      />
    </div>
    
     
);
};

export default TodoList;
