import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const navigateRegister = () => {
    navigate("/register");
};

const checkUser = (users) => {
    const user = users.find(
        (user) => user.email === email && user.password === password);
    if (user.email === email && user.password === password) return user;
};

const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
        alert("All fields are required!");
    }

    const user = await axios
    .get("/users")
    .then((res) => checkUser(res.data, email, password))
    .catch((error) => {
        console.log(error);
    })

    if(user.email === email && user.password === password)  {
        navigate("/homepage"); //link to start page

        //set item in local storage if login is succe
        //this item will be used for private route, we will check if there
        //is a user id in localstorage or not
        localStorage.setItem("user", JSON.stringify(user.id))
    }
    else {
        alert("Account is not found. Please registrate new user.")
    }

    
setEmail("");
setPassword("");
}

    return  (
    <div className="container">
                
    <form className="form-container">
        
        <label>
        <input type="text" placeholder="Email"
         value={email} 
         onChange={(e) => setEmail(e.target.value)}
         />
         </label>
    <label>
        <input type="text" placeholder="Password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
        </label>
    <button className="reg-btn" type="submit" onClick={handleSubmit}>
        <p>Log in</p>
    </button>
    <p>If you don't have an account, don't worry! You can create a new one in few seconds!</p>
    <button className="reg-btn" type="register" onClick={navigateRegister} >
        <p>Register now!</p>
    </button>
    </form>
</div>
    );
};

export default Login;