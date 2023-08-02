import { useState ,useRef} from "react";
import './TodoList.css'

function TodoList() {
    
    const [todos,setTodos]=useState([])
    const [task,setTask]=useState('')

    const inputRef = useRef()

        

    const handleAdd=()=>{
        if(task === '')return
        setTodos(prev=>[...prev,{text:task,isTask:false}])
        setTask('')
        inputRef.current.focus()

        
    }
    

    const handleDelete=(index)=>{
        // const deleteTodos= todos.filter((_,i) =>i !== index )
        // setTodos(deleteTodos)

        const deteleTodos=[...todos]
        deteleTodos.splice(index,1)
        setTodos(deteleTodos)
    }

    const handleEdit=(index,newTask)=>{
        const updatedTodos= todos.map((todo,i)=>{
            if( i === index){
                return{ ...todo , text :newTask}
            }
            return todo;
        })
        setTodos(updatedTodos)

    }
   
    const handleToggleEdit=(index)=>{
        const updatedTodos=todos.map((todo,i)=>{
            if( i === index){
                return{ ...todo, isTask: !todo.isTask}
            }
            return todo;
        })
        setTodos(updatedTodos)
        console.log(updatedTodos)

    }
   
    return (
        <div className="container" >
            <div className="container-app">
            <input
            ref={inputRef}
            value={task}
            placeholder="vui long nhap"
            onChange={(e)=>setTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <ul className="input">
                {todos.map((todo,index)=>(
                    <li key={index}>
                        {todo.isTask ? (
                            <input
                            value={todo.text}
                            onChange={e => handleEdit(index, e.target.value)}
                            />
                        ):(
                            <span>{todo.text}</span>
                        )}
                        
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                        <button onClick={()=>handleToggleEdit(index)}>
                            {todo.isTask ? 'Save' :'Edit'}
                        </button>
                       
                        
                    </li>
                ))}
            </ul>
         
            </div>
        </div>
    );
}

export default TodoList;









