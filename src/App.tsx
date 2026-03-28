import Header from "./components/Header/Header";
import InAction from "./components/InAction/InAction";
import Mission from "./components/Mission/Mission";
import AboutUs from "./components/AboutUs/AboutUs";
import MeetTheTeam from "./components/MeetTheTeam/MeetTheTeam";
import Footer from "./components/Footer/Footer";

import "./components/ScrollReveal/ScrollReveal.css";
import useScrollReveal from "./components/ScrollReveal/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <InAction />
      <Mission />
      <AboutUs />
      <MeetTheTeam />
      <Footer />
    </>
  );
}

export default App;
