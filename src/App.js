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
            <ul className="sideMenuContainer">
              <li>HOME</li>
              <li>MENU</li>
              <li>HISTORY</li>
              <li>GALLERY</li>
              <li>CONTACT & RESERVATIONS</li>
              <li>INSTAGRAM LINK</li>
              <li>FACEBOOK LINK</li>
            </ul>
        </div>
      </header>
      <Menu />
      <Gallery />
      <History />
      <Contact />
      <Route
        path="/home"
        component={Home}
      />
{/*     
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
      /> */}
    </div>
    </Router>
  )
}

export default App;
