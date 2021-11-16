
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/NavBar/NavBar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() { //componente tipo funcion

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer greeting='Este es un sex shop'/>
        </Route>
        <Route exact path='/categoria/:categoryID'>
          <ItemListContainer greeting='Este es un sex shop'/>
        </Route>
        <Route exact path='/detail/:id'>
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
 