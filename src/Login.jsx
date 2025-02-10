/*import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login()
{
    let username=useRef(null);
    let passward=useRef(null);

    let dispatch=useDispatch();
    let navigate=useNavigate();
    
    let loginCheck = () =>
        {
        if(username.current.value==="madhu" && passward.current.value==="Madhu@123")
        {
           dispatch(login(username.current.value))
           navigate("/home");
        }
        else
        {
            alert("Your credentials are wrong. Please check once!");
        }
    }
    return(
        <>
        <h1>Login Page</h1>
        <label>username:</label>
        <input type='text' ref={username}/>
        <br/><br/>
        <label>passward:</label>
        <input type='password' ref={passward}/>
        <br/><br/>
        <button style={{backgroundColor:'lightcoral'}} onClick={loginCheck}>Login</button>
        </>
    )
}
export default Login;*/
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
    let username = useRef(null);
    let password = useRef(null);

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () => {
        if (username.current.value === "madhu" && password.current.value === "Madhu@123") {
            dispatch(login(username.current.value));
            navigate("/home");
        } else {
            alert("Your credentials are wrong. Please check once!");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center text-primary mb-4">🔐 Login</h2>
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input type="text" ref={username} className="form-control" placeholder="Enter username" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input type="password" ref={password} className="form-control" placeholder="Enter password" />
                </div>
                <button className="btn btn-danger w-100" onClick={loginCheck}>
                    <i className="bi bi-box-arrow-in-right"></i> Login
                </button>
            </div>
        </div>
    );
}

export default Login;
