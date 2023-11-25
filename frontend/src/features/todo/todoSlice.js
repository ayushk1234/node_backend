import { createSlice ,nanoid} from "@reduxjs/toolkit";


const initialState ={
    todos:[{id:1,text:"heloo world"}]
}





// function sayHello(){}

export const todoSlice=createSlice({
    name:'todo' ,
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {id:nanoid(),text:action.payload}
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            // console.log()
            // const todo = {action.payload}
            state.todos = state.todos.filter((todo)=>{
                console.log(todo.id)
                console.log(state)
                return (todo.id!==action.payload)})
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer