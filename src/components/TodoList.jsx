import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleCompleted, updateColor } from '../slices/todoSlice'; 
import {colors} from './Colors';


const TodoList = () => {
  const todoList = useSelector((state) => state.add.todoList); 
  const statusFilter = useSelector((state) => state.filters.status); 
  const colorFilter = useSelector((state) => state.filters.colors);
  const dispatch = useDispatch(); 

  // Handle delete action
  const handleDelete = (id) => {
    dispatch(deleteTodo({ id })); 
  };

  // Handle toggle action
  const handleToggle = (id) => {
    dispatch(toggleCompleted({ id }));
  };

  const handleColorChange=(id,color)=>{
    dispatch(updateColor({id, color}));
  }

  const filteredTodos = todoList.filter((todo) => {
    const statusMatch =
      statusFilter === 'All' ||
      (statusFilter === 'Active' && !todo.completed) ||
      (statusFilter === 'Completed' && todo.completed);
    const colorMatch = colorFilter.length === 0 || colorFilter.includes(todo.color);
    return statusMatch && colorMatch;
  });

  return (
    <div className="space-y-4">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <div className="flex items-center space-x-3">
              {/* Checkbox for marking completed */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)} 
                className="w-5 h-5 text-blue-500 rounded"
              />
              {/* Todo Task */}
              <span
                className={`text-lg ${
                  todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
                }`}
              >
                {todo.task}
              </span>
            </div>
            <div>
              <select 
              value={todo.color || ''}
              onChange={(e)=>handleColorChange(todo.id, e.target.value)}
              className="border rounded px-2 py-1"
              >
                <option value="">Select Color</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
                
              </select>
            </div>
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              X
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No todos available.</p>
      )}
    </div>
  );
};

export default TodoList;
