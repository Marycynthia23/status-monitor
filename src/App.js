import { Header } from "./components/Header/Header";
import { Status } from "./components/Status/Status";
import "./App.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Status />
      <Footer />
    </div>
  );
}

export default App;
