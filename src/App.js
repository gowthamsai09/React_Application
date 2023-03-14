import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homes from "./Components/Homes";
import About from "./Components/About";
import Browse from "./Components/Browse";
import Contact from "./Components/Contact";
import Create from "./Components/Create";

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
          <Route exact path="/create" element={<Create />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
