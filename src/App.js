

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={50} height={50} src="/img/logo.svg" alt="logo" />
          <div>
            <h3 className="text-uppercase">Sneakerhead</h3>
            <p className="opacity-5 text-uppercase">Shoe marketplace</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>$25</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
            <span></span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="p-40">All items</h1>

        <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
          <h5>Nike SB Zoom Blazer Mid - Photon Dust</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>$65</span>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/add.svg" alt="add item" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers" />
          <h5>Nike SB Zoom Blazer Mid - Photon Dust</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>$65</span>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/add.svg" alt="add item" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers" />
          <h5>Nike SB Zoom Blazer Mid - Photon Dust</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>$65</span>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/add.svg" alt="add item" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers" />
          <h5>Nike SB Zoom Blazer Mid - Photon Dust</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>$65</span>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/add.svg" alt="add item" />
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default App;
