import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from '../actions/UserActions'

export default function LoginPage(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.getItem('currentLoggedUser')){
            window.location.href = "/";
        }
    });

    function login(event){
        event.preventDefault();
        const user = {
            email,
            password
        };

        dispatch(loginUserAction(user));
    }
    return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                    <div>
                        <h3>Login to Your Account</h3>
                        <form method="post" onSubmit={(e) => login(e)}>
                            <div className="mb-4">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Your Login Eamil" id="email" />
                            </div>
                            <div className="mb-4">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" id="password" />
                            </div>
                            <div className="text-center mb-4">
                                <button className="btn btn-info">Login</button>
                            </div>                            
                            <p>Don't have account? <Link to="/register">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}