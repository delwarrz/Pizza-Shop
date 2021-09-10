import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../actions/UserActions";



export default function RegisterPage(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const dispatch = useDispatch();

    function register(event){        
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Password does not match!");
        }else{
            const user = {
                name,
                email,
                password
            }
            dispatch(registerUserAction(user));
        }
    }

    return(
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                    <div>
                        <h3>Register Your Account</h3>
                        <form method="post" onSubmit={(e) => {register(e)}}>
                            <div className="mb-4">
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Your Name" id="name" />
                            </div>
                            <div className="mb-4">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Your Login Eamil" id="email" />
                            </div>
                            <div className="mb-4">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" id="password" />
                            </div>
                            <div className="mb-4">
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm Password" id="confirm-password" />
                            </div>
                            <div className="text-center mb-4">
                                <button className="btn btn-info">Register</button>
                            </div>
                            <p>Do you have account already? <Link to="/login">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}