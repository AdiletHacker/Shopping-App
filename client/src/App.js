import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

const App = () => {
  return <div className="App">
    <AppNavbar />
    <ShoppingList />
  </div>
};

export default App;
