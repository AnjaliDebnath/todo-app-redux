import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"add",
    initialState : {
        todoList: [
            
        ],
    },
    reducers:{
        addTodo: (state,{payload}) => {
            state.todoList.push({id:nanoid(), task: payload.task}) 
        },
        deleteTodo: (state,{payload})=>{
            state.todoList = state.todoList.filter((todo)=>todo.id!==payload.id)
        },
        toggleCompleted:(sate, {payload})=>{
            const todo = sate.todoList.find((todo)=>todo.id===payload.id);
            if(todo){
                todo.completed =!todo.completed;
            }
        },
        toggleAll: (state, {payload})=>{
            state.todoList = state.todoList.map(todo=>{ return {...todo, completed: payload.completed }})
        },
        updateColor:(state,action)=>{
            const {id,color}= action.payload;
            const todo = state.todoList.find((todo)=>todo.id===id);
            if(todo){
                todo.color = color;
            }
        },
        markAllCompleted:(state)=>{
            state.todoList.forEach(todo=>{
                todo.completed = true;
            });
        } ,
        clearCompleted:(state)=>{
            state.todoList = state.todoList.filter((todo)=>!todo.completed)
        },

        
    }
})

export const { addTodo , deleteTodo, toggleCompleted, toggleAll, updateColor, markAllCompleted, clearCompleted} = todoSlice.actions;
export default todoSlice.reducer