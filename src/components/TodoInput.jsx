import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';

export default function TodoForm() {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        if (todoText.trim() === '') {
            alert('Todo cannot be empty');
            return;
        }
        dispatch(addTodo({ task: todoText }));
        setTodoText('');
    }

    return (
        <form onSubmit={handleSubmit} className="w-full mb-4">
            <input
                type="text"
                name="todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="What needs to be done?"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-lg"
            />
        </form>

    );
}