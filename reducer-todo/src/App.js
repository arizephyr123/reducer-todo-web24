import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do App</h1>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
