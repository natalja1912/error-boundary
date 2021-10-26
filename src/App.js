import React, { useState } from 'react';
import New from "./New";
import UserContext from './UserContext';
import "./styles.css";
import ClickCounter from './clickCounter';
import HoverCounter from './hoverCounter';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
  const [name, setName] = useState('');
  return (
    <div className="page">
      Введите имя
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <UserContext.Provider value={name}>
      <New />
      </UserContext.Provider>
      <ErrorBoundary>
      <ClickCounter />
      <HoverCounter />
      </ErrorBoundary>
    </div>
  );
}
