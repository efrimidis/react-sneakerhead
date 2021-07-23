import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';




function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [likedItem, setLikedItem] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    axios.get('https://60ec2bcde9647b0017cde0cd.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://60ec2bcde9647b0017cde0cd.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
    axios.get('https://60ec2bcde9647b0017cde0cd.mockapi.io/likedItems').then(res => {
      setLikedItem(res.data);
    });
  }, []);

  const addToCart = (obj) => {
    axios.post('https://60ec2bcde9647b0017cde0cd.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj])
  };

  const addToLiked = async (obj) => {
    try {
      if (likedItem.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://60ec2bcde9647b0017cde0cd.mockapi.io/likedItems/${obj.id}`);
      } else {
        const { data } = await axios.post('https://60ec2bcde9647b0017cde0cd.mockapi.io/likedItems', obj);
        setLikedItem(prev => [...prev, data])
      }
    } catch (error) {
      alert('An error occurred when adding to favorites!')
    }
  };

  const removeFromCart = (id) => {
    axios.delete(`https://60ec2bcde9647b0017cde0cd.mockapi.io/cart/${id}`);
    setCartItems((prev)=> prev.filter((item) => item.id !== id))
  };

  const onSearchValue = (event) => {
    setSearchValue(event.target.value);
  };


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={removeFromCart} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
        items={items}
        searchValue={searchValue}
        onSearchValue={onSearchValue}
        addToLiked={addToLiked}
        addToCart={addToCart} />
      </Route>

      <Route path="/favorites" exact>
        <Favorites
        items={likedItem}
        addToLiked={addToLiked}
        />
      </Route>
    </div>
  );
}

export default App;
