import './App.css';
import ProductList from './componunts/ProductList';
import AddToCard from './componunts/AddToCard';
import { useEffect, useReducer } from 'react';
import prodReducer from './reducers/productReducer';

function App() {
  
  const intiData = {
    product: [],
    cartDetails: []
  }
  const [prodState, prodDispatch] = useReducer(prodReducer, intiData )
  const getMainProdList = async () => {
    await fetch('https://dummyjson.com/products').then(data => {
      if (!data.ok) {
        throw Error(data.status)
      } else {
        return data.json()
      }
    }).then(jsonData => {
      prodDispatch({type:'mainData', paylod: jsonData.products })
    })
  }
  useEffect( () => {
    console.log(getMainProdList());
  }, []);

  return (
    <div className="App" >
      <ProductList prodState={prodState} prodDispatch={prodDispatch}/>
      <AddToCard prodState={prodState} prodDispatch={prodDispatch}/>
    </div>
  );
}

export default App;
