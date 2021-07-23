import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40" >
    <Link to="/">
      <div className="d-flex align-center">
        <img width={50} height={50} src="/img/logo.svg" alt="logo" />
        <div>
          <h3 className="text-uppercase">Sneakerhead</h3>
          <p className="opacity-5 text-uppercase">Shoe marketplace</p>
        </div>
      </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Shopping cart" />
          <span>$25</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites"><img width={18} height={18} src="/img/heart.svg" alt="Favorite" />
          </Link>
        </li>
        <li>
          <Link to="/users"><img width={18} height={18} src="/img/user.svg" alt="Sign in" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;