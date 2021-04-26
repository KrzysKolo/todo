import React from 'react';
import { HashRouter } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import './App.css';


bemCssModules.setSettings({

});

function App() {
  return (
    <div className="App">
      <HashRouter>
        <header />
      </HashRouter>
        todo
    </div>
  );
}

export default App;
