import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [likedItem, setLikedItem] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);



  React.useEffect(() => {
    async function fetchData() {
      // setIsLoading(true); *** if multiply rendering  ***
      const cartResponse = await axios.get('https://60ec2bcde9647b0017cde0cd.mockapi.io/cart');
      const favResponse = await axios.get('https://60ec2bcde9647b0017cde0cd.mockapi.io/likedItems');
      const itemsResponse = await axios.get('https://60ec2bcde9647b0017cde0cd.mockapi.io/items');

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setLikedItem(favResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const addToCart = (obj) => {
    if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://60ec2bcde9647b0017cde0cd.mockapi.io/cart/${obj.id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));

    } else {
      axios.post('https://60ec2bcde9647b0017cde0cd.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, obj]);
    }
  };

  const addToLiked = async (obj) => {
    try {
      if (likedItem.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://60ec2bcde9647b0017cde0cd.mockapi.io/likedItems/${obj.id}`);
        setLikedItem(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://60ec2bcde9647b0017cde0cd.mockapi.io/likedItems', obj);
        setLikedItem((prev) => [...prev, data])
      }
    } catch (error) {
      alert('An error occurred when adding to favorites!')
    }
  };

  const removeFromCart = (id) => {
    axios.delete(`https://60ec2bcde9647b0017cde0cd.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  };

  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))

  }


  return (
    <AppContext.Provider value={{ items, cartItems, likedItem, isItemAdded, addToLiked, setCartOpened }}>
      <div className="wrapper clear">
        {cartOpened && (<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={removeFromCart} />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onSearchValue={onSearchValue}
            addToLiked={addToLiked}
            addToCart={addToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
