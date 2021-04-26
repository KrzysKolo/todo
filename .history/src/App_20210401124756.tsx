import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import './App.css';


bemCssModules.setSettings({

});

function App() {
  return (
    <div className="App">
      <Router>
        <header />
      </Router>
        todo
    </div>
  );
}

export default App;
