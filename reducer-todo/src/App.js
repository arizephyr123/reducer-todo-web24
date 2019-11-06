import React from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do App</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;