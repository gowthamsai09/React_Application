import Navbar from './Components/Home';
import { BrowserRouter as Router, Routes
,Route } from 'react-router-dom';

import Home from './Components/Home';
function App() {
  return (
    <div >
     {/* <Navbar /> */}
     <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
