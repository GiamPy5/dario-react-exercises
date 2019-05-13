import React from 'react';
import Shop from './Pages/Shop.js'
import Basket from './Pages/Basket.js'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <h1>Shop</h1>

          <Route exact path="/" component={Shop} />
          <Route path="/basket" component={Basket} />
        </div>
      </Router>
    </div>
  );
}

export default App;