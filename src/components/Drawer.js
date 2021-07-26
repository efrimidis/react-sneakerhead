import React from "react";
import axios from "axios";

import Info from "./info";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);


    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://60ec2bcde9647b0017cde0cd.mockapi.io/orders', {items: cartItems});

            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://60ec2bcde9647b0017cde0cd.mockapi.io/cart' + item.id);
                await delay(1000);
            }


        } catch (error) {
            alert("Some error with order")
        }
        setIsLoading(false);
    };

    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className="d-flex justify-between mb-30">Cart
                    <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" />
                </h2>
                {
                    items.length > 0 ?
                        <div className="d-flex flex-column flex">
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
                                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Proceed to checkout <img src="/img/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </div> : (
                            <Info
                                title={isOrderComplete ? "Order completed!" : "Cart is empty"}
                                image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                                description={isOrderComplete ? `Your Order № ${orderId} has been placed!` : "Your shopping cart is empty or your session has expired"}

                            />
                        )
                }
            </div>
        </div>


    );
}

export default Drawer;