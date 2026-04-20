import React,{createContext,useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home'
import Cart from './components/Cart'
import Items from './components/Items'
import AddItems from './components/AddItems'
import reportWebVitals from './reportWebVitals';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
export const UseContext = createContext();
export const UseContextCart =createContext();

function Main(){
const [inputValue, setInputValue] = useState([])
const [cartItems,setCartItems] =useState([]);
return(
<BrowserRouter>
<UseContext.Provider value={{inputValue, setInputValue}}>
  <UseContextCart.Provider value={{cartItems,setCartItems}}>
    <Routes>
      <Route path="/" element={<Home />} >
      <Route index element={<Items />} />
      <Route path="additems" element={<AddItems />}/>
      <Route path="cart" element={<Cart />}/>
      </Route>
    </Routes>
    </UseContextCart.Provider>
</UseContext.Provider>
  </BrowserRouter>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);
