import React from 'react';

import './App.css';
import 'C:\ZSANI\memorygame\node_modules\bootstrap\dist\css\bootstrap.min.css';
import init from './init.js';

const nr=4
const cards=init(nr)

function App() {
  return (
    <div className="container bg-info">
      <h1 className="text-center text-white">Memorygame</h1>
    </div>
  );
}

export default App;
