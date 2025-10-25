import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLogin } from "../hooks/useLogin";
import "../styles/login.css";

const Login = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    await login(email, password);
    if (user) navigate("/");
  };

  return (
      <div className="container">
        <div className="header">
          <h1 className="text">Login</h1>
          <div className="underline"></div>
        </div>

        <form onSubmit={handleSubmit} className="inputs">
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
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button type="submit" className="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {error && <div className="error">{error}</div>}
      </div>
  );
};

export default Login;