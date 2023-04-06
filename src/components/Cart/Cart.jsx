import React, { Children } from 'react';
import './Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart, children }) => {
    // option 1
    // const cart = props.cart; 

    // option2
    // const {cart} = props;

    console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${totalPrice} </p>
            <p>Shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}

        </div>
    );
};

export default Cart;