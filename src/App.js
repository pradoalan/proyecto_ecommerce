
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Titulo } from './Titulo';
import './App.css';
import './components/NavBar/NavBar.css';

function App() { //componente tipo funcion

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Este es un sex shop'/>
    </div>
  );
}

export default App;
 