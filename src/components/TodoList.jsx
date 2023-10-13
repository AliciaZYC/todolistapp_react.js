import React, { useState} from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';



const TodoList = ({ todos, delete_todo,updated_todo,complete_todo }) => {
    let[ toggle,setToggle ] = useState(false)
    let[ todoItem,setTodoItem ] = useState("")
    let[ todoID,setTodoId ] = useState(0)

    const toggleModel =(item,id) =>{
      setToggle(true)
      setTodoItem(item)
      setTodoId(id)
    }

  return (
    <>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo-list-item" key={todo.id}>
            <div className="task">
              <input type="checkbox" onChange={(e) =>complete_todo(e,todo.id)} />
              <p id ="t_task" className ={todo.status =="Completed"?"strike":""}>{todo.task}</p>
            </div>

            <div className="btn-container">
              <div className="edit"><BiEditAlt onClick={() => toggleModel(todo.task, todo.id) }/></div>
              <div className="del"><RiDeleteBin6Line onClick={() => delete_todo(todo.id)} /></div>
            </div>
          </div>
        ))}
      </div>

      {/* modal container */}

      { toggle && <div className="modal-container">
        <div className="modal">
          <h1>Update Form</h1>

          <form action="" onSubmit={() => {
            updated_todo(todoID,todoItem);
            setToggle(false)
          }}>
            <input type="text" placeholder=" Update todo "value ={ todoItem } onChange={(e) => setTodoItem(e.target.value) }required  />
            <button id="add">Add</button>
          </form>

          <div className="btn-container">
            <button className="cancel mod-btn" onClick={() => setToggle(false)}>Cancel</button>
          </div>
        </div>
      </div>}
    </>
  )
}

export default TodoList;
