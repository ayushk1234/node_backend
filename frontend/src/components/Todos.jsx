import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addTodo,removeTodo } from '../features/todo/todoSlice'


const Todos = () => {

    const todos = useSelector(state=>state.todos.todos)
    // console.log(todos)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Todos</h2>
            {todos.map((todo)=>{
                console.log(todo.id)
                return(
                <li key={todo.id}>
                    {todo.text}
                    {' --------      '}
                    
                    <button onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
                </li>)
            })}
            </div>
    )
}

export default Todos