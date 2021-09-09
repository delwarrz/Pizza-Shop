import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
    const cartState = useSelector(state => state.CartReducer);
    const [visible, setVisible] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow p-3 rounded">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Oven Fresh Pizza</a>
                <button onClick={() => {setVisible(!visible)}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${visible?"show":""}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                Cart
                                <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                                    {cartState.cartItems.length}                                    
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;