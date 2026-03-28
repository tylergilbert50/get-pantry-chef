import "./MeetTheTeam.css";

const team = [
  {
    name: "Tyler Gilbert",
    role: "UI/UX Design - Full Stack",
    bio: "I am a UI/UX designer and full-stack developer for PantryChef, where I led the concept and vision behind the project. I designed the user experience and interface for both the mobile app and website, and contributed across the project as a whole, but with a stronger focus on front-end development. I’m passionate about creating intuitive, user-centered products and aspire to become a front-end developer or product designer. I take pride in my leadership abilities, attention to detail, and commitment to delivering polished, high-quality work.",
  },
  {
    name: "Ashton Hull",
    role: "Database Design - Backend",
    bio: "Bio Here",
  },
  {
    name: "Jacob Lehtola",
    role: "Graphic Design - Front End",
    bio: "Bio Here",
  },
  {
    name: "Braxton Wilson",
    role: "Front End",
    bio: "Bio Here",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="meet-the-team">
      <div className="reveal">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-name">{member.name}</div>
              <div className="team-name-underline" />
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
