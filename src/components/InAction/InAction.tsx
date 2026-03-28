import "./InAction.css";
import screenshot from "../../assets/screenshot.png";

export default function InAction() {
  return (
    <section className="in-action">
      <div className="reveal">
        <h2>See it in Action</h2>
        <p>Track your pantry ingredients and discover recipes effortlessly.</p>
        <img
          src={screenshot}
          alt="PantryChef app screenshot"
          className="in-action-screenshot"
        />
      </div>
    </section>
  );
}
