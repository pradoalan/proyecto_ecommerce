
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContext';
import './App.css';
import './components/NavBar/NavBar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() { //componente tipo funcion

  return (
    <CartContextProvider>
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
          <Route exact path='/cart'>
            <Cart/>
          </Route>
        </Switch> 
      </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
 