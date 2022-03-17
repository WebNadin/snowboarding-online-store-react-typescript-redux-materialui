import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Вы нажали {count} раз</p>
        <button onClick={() => setCount(count + 1)}>
          Нажми на меня
        </button>
      </header>
    </div>
  );
};

