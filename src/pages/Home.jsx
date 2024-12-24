import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-grow flex items-start justify-center py-8">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-center text-red-500 mb-8">
            Todos
          </h1>
          <TodoInput />
          <TodoList />
        </div>
      </div>
      
      {/* Footer */}
      <TodoFooter />
    </div>
  );
};

export default Home;
