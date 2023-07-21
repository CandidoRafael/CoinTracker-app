/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { userLogin } from "../../auth/userLogin";
import { projectAuth } from "../../firebase/firebase-config";

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(projectAuth.currentUser);
  }, []);

  const from = location.state?.from?.pathname || "dashboard/overview";

  const { error, login } = userLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loginEmail.length < 0) {
      return;
    }
    await login(loginEmail, loginPassword);
    if (!error) {
      navigate(from, { replace: true });
      setLoginEmail("");
      setLoginPassword("");
      return;
    } else {
      setErrorMessage("Email ou senha invalidas, vc já possui uma conta?");
    }
  };

  return (
    <>
      <h2>Login to your account</h2>
      <form action="" onSubmit={handleLogin}>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Email..."
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        {error && <p>{errorMessage}</p>}
        <button>Login</button>
      </form>
      <p>Dont have a account ? </p>
      <Link to="/register">
        <button>Sign Up</button>
      </Link>
    </>
  );
};
