import "./App.css";
import Navbar from "./components/navbar";
import Heropage from "./components/heropage";
import Wim from "./components/wim";
function App() {
  return (
    <div className="container">
      <Navbar className="nav"/>
      <Heropage className="hero"/>
      <Wim/>
    </div>
  );
}

export default App;
