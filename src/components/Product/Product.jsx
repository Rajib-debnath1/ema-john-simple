import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,price, name, seller,quantity,ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

   
    
    return (
        <div className='product'>
            <img src={img} alt=''></img>

            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacture: {seller}</p>
            <p>Ratings: {ratings}stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;