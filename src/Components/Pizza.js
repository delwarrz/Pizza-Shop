import React, { useState } from 'react';

function Pizza({pizza}){
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('small');
    return(
        <div className="shadow p-4 rounded">
            <h3 className="fs-5">{pizza.name}</h3>
            <img src={pizza.image} className="img-fluid" />
            <div className="row">
                <div className="col">
                    <p>Variants</p>
                    <select value={size} onChange={(e) => setSize(e.target.value)} className="form-select">
                        {
                            pizza.varients.map(variant => {
                                return <option value={variant}>{variant}</option>
                            })
                        }
                    </select>
                </div>
                <div className="col">
                    <p>Quantity</p>
                    <select value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-select">
                        {[...Array(10).keys()].map((element, index) => {
                            return <option value={index+1}>{index+1}</option>
                        })

                        }
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <p className="price-text">Price: {pizza.prices[0][size] * quantity}</p>
                </div>
                <div className="col d-grid">
                    <button className="btn btn-danger">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Pizza;