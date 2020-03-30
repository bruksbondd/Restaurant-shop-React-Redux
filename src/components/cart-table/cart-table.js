import React from 'react';
import './cart-table.scss';

const CartTable = (props) => {

  const cartItem = props.order.map((item, i) => {
    return (
      <div className="cart__item">
        <img
          src={item.url}
          className="cart__item-img" alt="Cesar salad"></img>
        <div className="cart__item-title">{item.title}</div>
        <div className="cart__item-price">{item.price}</div>
        <div onClick={() => props.handleDeleteOrder(i)} className="cart__close">&times;</div>
      </div>
    )
  })


    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
              {cartItem}
            </div>
        </>
    );
};

export default CartTable;
