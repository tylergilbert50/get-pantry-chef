import "./MeetTheTeam.css";

const team = [
  {
    name: "Tyler Gilbert",
    role: "UI/UX Design - Full Stack",
    bio: "Full-stack developer for PantryChef, building the mobile and web applications from the ground up. Responsible for the design and development of the front end, focusing on responsive layouts, state handling, and API-driven functionality. Dedicated to producing efficient, scalable code and creating smooth, user-friendly experiences, with a strong emphasis on quality and precision.",
  },
  {
    name: "Ashton Hull",
    role: "Database Design - Backend",
    bio: "Backend developer for PantryChef, responsible for designing and implementing the majority of the database architecture. Contributed to API development and functionality, with additional support on select front-end features. Focused on building efficient, reliable systems and ensuring smooth data flow across the application.",
  },
  {
    name: "Jacob Lehtola",
    role: "Graphic Design - Front End",
    bio: "I am a developer for PantryChef with a focus on front end and graphic design. My front-end development centered on creating the recipe reader. My back end development focused on core components such as API access, ingredient matching, and request caching. I also designed the project icon, poster, and in-app motion graphics.",
  },
  {
    name: "Braxton Wilson",
    role: "Front End",
    bio: "I am one of the front end programmers for Pantry Chef, where I take the design and make it a reality. I have helped to implement the front end UI for the application in addition to making any quality changes as we see fit. I have a passion for making a design a reality and aspire to be a software programmer. I take pride in being a team player, having strong attention to detail, and a drive to make as high a quality product as possible.",
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
