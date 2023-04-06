import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "../src/Components/Home/Homes";
import About from "./Components/About";
import Browse from "./Components/Browse";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homes />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/browse" element={<Browse />}></Route>
          <Route exact path="/contact us" element={<Contact />}></Route>
          <Route exact path="/pricing" element={<Pricing />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
