import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Destination from './components/Destination';
import Packages from './components/Packages';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/destination' element={<Destination />}></Route>
          <Route exact path='/packages' element={<Packages />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
