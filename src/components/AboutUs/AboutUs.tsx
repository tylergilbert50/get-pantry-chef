import "./AboutUs.css";
import apsuLogo from "../../assets/apsu-logo.png";

export default function AboutUs() {
  return (
    <section className="about-us">
      <div className="reveal">
        <img
          src={apsuLogo}
          alt="Austin Peay State University"
          className="about-us-logo"
        />
        <h2>About Us</h2>
        <p>
          We are a team of students from Austin Peay State University, building
          PantryChef as part of our senior capstone project. As aspiring data
          analysts, software engineers, and product designers, we came together
          with a shared passion for creating technology that solves real-world
          problems. PantryChef represents not only our technical skills, but our
          commitment to innovation, collaboration, and thoughtful design. We are
          proud of what we’ve built and truly believe in our idea.
        </p>
      </div>
    </section>
  );
}
