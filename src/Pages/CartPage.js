import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, deleteFromCart } from "../actions/CartActions";

export default function CartPage(){
    const cartState = useSelector(state => state.CartReducer);
    const cartItems = cartState.cartItems;

    let subTotal = cartItems.reduce((x,item) => x+item.price, 0);

    const dispatch = useDispatch();

    return(
        <div className="container">
            <h2>Your Cart</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {
                        cartItems.map(item => {
                            return(
                                <div key={item._id} className="d-flex cart-item align-items-center">
                                    <div className="m-1 col-8">
                                        <p className="cart-item-name text-start cart-info-item">{item.name} [{item.varient}]</p>
                                        <p className="cart-item-name text-start cart-info-item">Price: {item.qunatity} * {item.prices[0][item.varient]} = {item.price}</p>
                                        <p className="cart-item-name text-start cart-info-item">Quantity: <button className="btn btn-sm btn-success" onClick={() => {dispatch(addToCart(item, item.qunatity+1, item.varient))}}><i className="fa fa-plus"></i></button> <span>{item.qunatity}</span> <button className="btn btn-sm btn-danger" onClick={() => {dispatch(addToCart(item, item.qunatity-1, item.varient))}}><i className="fa fa-minus"></i></button></p>
                                    </div>
                                    <div className="col-2">
                                        <img src={item.image} alt={item.name} style={{width: '70px'}} />
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-danger" onClick={() => {dispatch(deleteFromCart(item))}}><i className="fa fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-md-4">
                    <h3>Sub Total: {subTotal}Tk.</h3>
                </div>
            </div>
        </div>
    )
}