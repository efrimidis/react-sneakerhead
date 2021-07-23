import React from "react";

function Drawer({ onClose, onRemove, items = [] }) {

    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between mb-30">Cart
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" />
                </h2>

                {
                    items.length > 0 ?
                        <div>
                            <div className="items">
                                {items.map((obj) => (
                                    <div className="cartItem d-flex align-center mb-20">
                                        <div
                                            style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                            className="cartItemImg">
                                        </div>
                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price}</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Total:</span>
                                        <div></div>
                                        <b>$285</b>
                                    </li>
                                    <li>
                                        <span>Tax 5%:</span>
                                        <div></div>
                                        <b>$34</b>
                                    </li>
                                </ul>
                                <button className="greenButton">Proceed to checkout <img src="/img/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </div> :
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width={100} height={100} src="/img/empty-cart.jpg" alt="Empty cart" />
                            <h2>Cart is empty</h2>
                            <p className="opacity-6">Your shopping cart is empty <br /> or your session has expired</p>
                            <button onClick={onClose} className="greenButton">
                                <img  src="/img/arrow.svg" alt="Arrow" />
                                Go to home page
                            </button>
                        </div>
                }
            </div>
        </div>


    );
}

export default Drawer;