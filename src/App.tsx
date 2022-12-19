import React from 'react';
import './App.css';
import { Linker } from './components/linker/linker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Linker id='Ian' fallback='Belinda' />
      </header>
    </div>
  );
}

export default App;
