import {configureStore} from  '@reduxjs/toolkit';
import todoReducer  from '../features/todo/todoSlice';
import counterReducer from '../features/todo/counterSlice';

 export  const store= configureStore({
    reducer:{
      todos:todoReducer,
      // todoReducer,
      counter:counterReducer,
   }
 })