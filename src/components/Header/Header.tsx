import "./Header.css";
import logo from "../../assets/pantry-chef-logo.svg";
import appStore from "../../assets/app-store.svg";
import googlePlay from "../../assets/google-play.svg";

export default function Header() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={logo} alt="PantryChef logo" className="logo" />

        <h1>PantryChef</h1>

        <p>Cook what you own. Save what you earn.</p>

        <div className="store-buttons">
          <img src={appStore} alt="App Store" />
          <img src={googlePlay} alt="Google Play" />
        </div>
      </div>

      <div className="wave">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C360,120 720,40 1440,100 L1440,120 L0,120 Z"
            fill="#f5f5f0"
          />
        </svg>
      </div>
    </section>
  );
}
