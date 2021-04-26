import React from 'react';
import { HashRouter } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import './App.css';

import Header  from './components/Header/Header';
import Content  from './components/Content/Content';

bemCssModules.setSettings({

});

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Content />
      </HashRouter>
        todo
    </div>
  );
}

export default App;
