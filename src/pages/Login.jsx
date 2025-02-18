import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import "./styles/login.scss";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));
        
        if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/profile");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <FaEnvelope className="icon" />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                </div>

                <div className="input-group">
                    <FaLock className="icon" />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        placeholder="Password" 
                        onChange={handleChange} 
                        required 
                    />
                    <span className="toggle-password" onClick={togglePassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
