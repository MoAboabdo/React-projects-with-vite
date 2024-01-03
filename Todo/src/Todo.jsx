import { useState } from 'react';
import './index.css';

function generateId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    setTodos(todos =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput('');
  };

  const removeTodo = id => setTodos(todos => todos.filter(t => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(text => (
          <li key={text.id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(text.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
