import { useState, useContext } from "react";
import { useSignup } from "../hooks/useSignup";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Signup = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    await signup(name, email, password);
    if (user) navigate("/");
  };

  return (
      <div className="container">
        <div className="header">
          <h1 className="text">Sign Up</h1>
          <div className="underline"></div>
        </div>

        <form onSubmit={handleSubmit} className="inputs">
          <div className="input">
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Username"
                required
                minLength={3}
            />
          </div>

          <div className="input">
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
            />
          </div>

          <div className="input">
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                minLength={6}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password"
                aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button type="submit" className="submit" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {error && <div className="error">{error}</div>}
      </div>
  );
};

export default Signup;