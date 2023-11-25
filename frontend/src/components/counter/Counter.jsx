import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {increment,decrement} from '../features/todo/counterSlice'
import {increment,decrement, incrementByAmount, incrementAsync} from '../../features/todo/counterSlice'
// frontend/src/features/todo/counterSlice.js
// import {addTodo} from '../features/todo/todoSlice' 
// import {addTodo} from '../features/todo/todoSlice' 



const Counter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();

  return (
    <div>

        <h2>{count}</h2>
        {/* <button onClick={()=>dispatch(increment())}>Increment</button> */}
        {/* <button onClick={()=>dispatch(incrementByAmount(10))}>Increment</button> */}

        <br/>

        <button onClick={()=>dispatch(incrementAsync(10))}>Increment ASync </button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter