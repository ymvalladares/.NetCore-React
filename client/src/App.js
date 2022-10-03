import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Lista from "./components/List/Lista";
import Nav from "./components/Navbar/Navigation";
import CreateUser from "./components/CreateUser/CreateUser";
import DetailsUser from "./components/List/DetailsUser";
import Provedor from "./components/Context/context";
import About from "./components/About/About";

function App() {
  return (
    <Provedor>
      <Router>
        <div className="main">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/shop" element={<Lista />} />
            <Route path="/shop/:id" element={<DetailsUser />} />
            <Route path="/about" element={<About />} />
            <Route path="/createUser" element={<CreateUser />} />
          </Routes>
        </div>
      </Router>
    </Provedor>
  );
}

const Home = () => {
  return (
    <div>
      <h3 className="texto">Home page</h3>
    </div>
  );
};

export default App;
