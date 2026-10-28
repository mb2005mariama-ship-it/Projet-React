import InfoPerso from "./composants/InfoPerso.jsx";
import Competences from "./composants/Competences.jsx";
import Experiences from "./composants/Experiences.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Mon CV</h1>

      <InfoPerso />
      <Competences />
      <Experiences />
    </div>
  );
}

export default App;