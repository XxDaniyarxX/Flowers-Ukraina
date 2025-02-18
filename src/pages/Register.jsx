import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./styles/register.scss";

function Register() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
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
        localStorage.setItem("user", JSON.stringify(formData));
        navigate("/login");
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <FaUser className="icon" />
                    <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                </div>

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

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
