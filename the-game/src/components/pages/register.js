import {useState} from "react";
import axios from "axios";

const Register = () => {
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
};

const handleSubmit = async () => {
    const user = await axios
    .get("/users")
    .then((res) => checkEmail(res.data, email));

    if (user) {
        alert("User already exists!")
    } else {
        const user = {username, email, password};
        axios.post("/users", user).then(alert("User created!"));
    }

};

    return (
            <div className="container">
                
                    <form className="form-container">
                        <h1>Register User</h1>
                    <label>
                        <input type="text" placeholder="Name" value={username} 
                        onChange={(e) => setUsername(e.target.value)} /></label>
                    <label>
                        <input type="text" placeholder="Email" value={email} 
                        onChange={(e) => setEmail(e.target.value)}/></label>
                    <label>
                        <input type="text" placeholder="Password" value={password} 
                        onChange={(e) => setPassword(e.target.value)}/></label>
                    <button className="reg-btn" type="submit" onClick={handleSubmit}>
                        <p>Register</p>
                    </button>
                    </form>
                
            </div>
    );
};

export default Register;