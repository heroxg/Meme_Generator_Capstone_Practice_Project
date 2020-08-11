import React from 'react';
import MemeGenerator from './MemeGenerator';
import Header from './Header'
import '../../meme-generator/src/App.css'

function App() {
  return (
    <div className="App">
      <div className="app-title">
          <h1>Meme Generator App</h1>
      </div>
      <Header />
      <MemeGenerator />
    </div>
  );
}

export default App;
