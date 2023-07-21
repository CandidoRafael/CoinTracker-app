import "./styles.css";
import logo from "../../assets/logoNova.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navBar-container">
      <div className="navBar-img">
        <img src={logo} alt="logo app" />
      </div>
      <ul className="navBar-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
        <li>
          <Link to="/register" className="signUp-btn">
            SignIn
          </Link>
        </li>
        <li>
          <Link to="/dashboard/overview">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};
