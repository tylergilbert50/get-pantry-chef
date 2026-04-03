import "./Footer.css";
import logo from "../../assets/pantry-chef-logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="PantryChef logo" className="footer-logo" />
      <h3>PantryChef</h3>
      <p>&copy; 2026 PantryChef. All rights reserved.</p>
    </footer>
  );
}
