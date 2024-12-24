import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  clearCompleted, markAllCompleted } from '../slices/todoSlice';
import { setStatusFilter, setColorFilter } from '../slices/filterSlice';
import {colors} from './Colors'

const TodoFooter = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.add.todoList);
  const remainingTodos = todos.filter((todo) => !todo.completed).length;
  const currentStatus = useSelector((state) => state.filters.status);
  const selectedColors = useSelector((state) => state.filters.colors);

  // Handle Mark All Completed
  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  // Handle Clear Completed
  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };
  
  //handle status filter change
  const handleStatusChange=(status)=>{
    dispatch(setStatusFilter(status))
  }

  //handle color filter 
  const handleColorChange = (color) => {
    dispatch(setColorFilter(color));
  };


  return (
    <div className="bg-white border-t shadow-md py-4 px-8 w-full">
      <div className="grid grid-cols-4 gap-4 text-sm text-gray-700">
        {/* Actions */}
        <div>
          <h3 className="font-bold mb-2">Actions</h3>
          <div className="space-y-2">
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 block w-full"
              onClick={handleMarkAllCompleted}
            >
              Mark All Completed
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 block w-full"
              onClick={handleClearCompleted}
            >
              Clear Completed
            </button>
          </div>
        </div>

        {/* Remaining Todos */}
        <div>
          <h3 className="font-bold mb-2">Remaining Todos</h3>
          <p>{remainingTodos} item{remainingTodos !== 1 ? 's' : ''} left</p>
        </div>

        {/* Filter by Status */}
        <div>
          <h3 className="font-bold mb-2">Filter by Status</h3>
          <div className="space-y-1">
            <label className="block">
              <input
                type="radio"
                name="status"
                checked={currentStatus === 'All'}
                onChange={() => handleStatusChange('All')}
                className="mr-2"
              />
              All
            </label>
            <label className="block">
              <input
                type="radio"
                name="status"
                checked={currentStatus === 'Active'}
                onChange={() => handleStatusChange('Active')}
                className="mr-2"
              />
              Active
            </label>
            <label className="block">
              <input
                type="radio"
                name="status"
                checked={currentStatus === 'Completed'}
                onChange={() => handleStatusChange('Completed')}
                className="mr-2"
              />
              Completed
            </label>
          </div>
        </div>

        {/* Filter by Color */}
        <div>
          <h3 className="font-bold mb-2">Filter by Color</h3>
          <div className="space-y-1">
            {colors.map((color) => (
              <label key={color} className="block">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                  className="mr-2"
                />
                <span
                  className="inline-block w-4 h-4 rounded"
                  style={{ backgroundColor: color.toLowerCase() }}
                ></span>
                <span className="ml-2">{color}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoFooter;
