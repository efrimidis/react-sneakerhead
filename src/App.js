import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {title: 'Nike SB Zoom Blazer Mid - Photon Dust', price: '$95', imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Nike Air Max 270 - White', price: '$179.95', imageUrl: '/img/sneakers/2.jpg'},
  {title: 'Nike Air Presto - Racer Blue', price: '$129.95', imageUrl: '/img/sneakers/3.jpg'},
  {title: 'Puma Suede Classic XXI - Cabernet', price: '$79.95', imageUrl: '/img/sneakers/4.jpg'}
]

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: 'none' }} className="overlay">
        <Drawer />
      </div>
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All items</h1>
          <div className="search-block d-flex">
            <img width={15} src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
         {arr.map((obj) => (
          <Card
          title={obj.title}
          price={obj.price}
          imageUrl={obj.imageUrl}
          />
         ))}

        </div>

      </div>
    </div>
  );
}

export default App;
