export const addToCart = (item, qunatity, varient) => (dispatch, useState) => {
    let cartItem = {
        name: item.name,
        _id: item._id,
        image: item.image,
        varient: varient,
        qunatity: qunatity,
        prices: item.prices,
        price: item.prices[0][varient] * qunatity
    }

    dispatch({type: 'ADD_TO_CART', payload: cartItem});

    const cartItems = useState().CartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export const deleteFromCart = (item) => (dispatch, useState) => {
    dispatch({type: 'DELETE_FROM_CART', payload:item});
    const cartItems = useState().CartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}