import './style/App.scss';
import Home from './Home.js'
import History from './History.js';
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
        <div className="navContainer">
          <nav>
            <ul className="sideMenuContainer">
              <li><Link exact to = "/home">Home</Link></li>
              <li><Link exact to = "/menu">Menu</Link></li>
              <li><Link exact to = "/history">History</Link></li>
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
        </div>
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
        path="/history"
        component={History}
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
