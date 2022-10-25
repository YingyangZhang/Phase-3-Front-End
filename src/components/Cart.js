import React, {useEffect, useState} from 'react'
import axios from 'axios';

function Cart({onDeleteItem, cartItem}){
    
    const deleteCartItem = (id) => {
        console.log(id)
        axios.delete(`http://localhost:9292/cart/${id}`)
        onDeleteItem(id)
    }

    return(
        <div>
            {cartItem.map(cart => {
                return <div key={cart.id} onClick={()=> deleteCartItem(cart.id)}>
                    {cart.furniture.name}
                    Quantity: {cart.quantity}
                    </div>
            })}
        </div>
    )
}

export default Cart;

// <img src={cart.furniture.image.angle1}></img>