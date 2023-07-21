import "./styles.css";
import imageHome from "../../assets/imageHome.jpg";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <main className="main-container">
      <section className="section-content">
        <h1>Control your finances with ease</h1>
        <p>
          CoinTrackr is your ultimate financial companion. Take charge of your
          money and effortlessly track your expenses, set budgets, and achieve
          your financial goals.
        </p>
        <Link to="/register">Register</Link>
      </section>
      <section className="section-img">
        <img src={imageHome} alt="logo home" />
      </section>
    </main>
  );
};
