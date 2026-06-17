import { useState, useEffect, useContext } from "react";
import { useSignup } from "../hooks/useSignup";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const S = () => {
  const { user: u } = useContext(AuthContext);
  const n = useNavigate();
  const [nm, sn] = useState("");
  const [em, se] = useState("");
  const [pw, sp] = useState("");
  const [sw, ssw] = useState(false);
  const [ve, sve] = useState("");
  const { signup: su, error: er, isLoading: il } = useSignup();

  useEffect(() => {
    if (u) {
      n("/");
    }
  }, [u, n]);

  const hs = async (ev) => {
    ev.preventDefault();
    sve("");

    const rx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rx.test(em)) {
      sve("Invalid email format.");
      return;
    }

    if (pw.length < 6) {
      sve("Password must be at least 6 characters long.");
      return;
    }

    if (il) return;
    await su(nm, em, pw);
  };

  return (
      <div className="container">
        <div className="header">
          <h1 className="text">Sign Up</h1>
          <div className="underline"></div>
        </div>

        <form onSubmit={hs} className="inputs">
          <div className="input">
            <input
                onChange={(ev) => sn(ev.target.value)}
                value={nm}
                type="text"
                placeholder="    Username"
                required
                minLength={3}
            />
          </div>

          <div className="input">
            <input
                onChange={(ev) => se(ev.target.value)}
                value={em}
                type="email"
                placeholder="    Email"
                required
            />
          </div>

          <div className="input">
            <input
                onChange={(ev) => sp(ev.target.value)}
                value={pw}
                type={sw ? "text" : "password"}
                placeholder="    Password"
                required
                minLength={6}
            />
            <button
                type="button"
                onClick={() => ssw(!sw)}
                className="show-password"
                aria-label={sw ? "Hide password" : "Show password"}
            >
              {sw ? "🙈" : "👁️"}
            </button>
          </div>

          <button type="submit" className="submit" disabled={il}>
            {il ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {ve && <div className="error">{ve}</div>}
        {er && !ve && <div className="error">{er}</div>}
      </div>
  );
};

export default S;