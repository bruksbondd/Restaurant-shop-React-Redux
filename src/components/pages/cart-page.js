import React from 'react';
import CartTable from '../cart-table';

const CartPage = (props) => {
    return (
        <div className="cart">
            <CartTable order={props.order} handleDeleteOrder={props.handleDeleteOrder}/>
        </div>
    )
}

export default CartPage;
