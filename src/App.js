import './style/App.scss';
import Home from './Home.js'
import About from './About.js';
import Menu from './Menu.js';
import Gallery from './Gallery.js';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="header">
        <h1> My Restaurant</h1>
        <nav>
          <ul className="sideMenuContainer">
            <li><Link exact to = "/home">Home</Link></li>
            <li><Link exact to = "/menu">Menu</Link></li>
            <li><Link exact to = "/about">About</Link></li>
            <li><Link exact to = "/gallery">Gallery</Link></li>
            <li><Link exact to = "/contact&reservation">Contact & Reservations</Link></li>
          </ul>
        </nav>
        <nav>
        <ul className="socialContainer">
            <li>INSTAGRAM LINK</li>
            <li>FACEBOOK LINK</li>
          </ul>
        </nav>
      </header>
      <Route
        path="/home"
        component={Home}
      />

      <Route
        path="/menu"
        component={Menu}
      />
      
      <Route
        path="/about"
        component={About}
      />

      <Route
        path="/gallery"
        component={Gallery}
      />

      <Route
        path="/contact&reservation"
        component={Contact}
      />
      
      <footer className="footer">
      </footer>
    </div>
    </Router>
  )
}

export default App;
