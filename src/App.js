import './style/App.scss';
import Home from './Home.js'
import History from './History.js';
import Menu from './Menu.js';
import ContactModal from './ContactModal.js'
import Gallery from './Gallery.js'


import { 
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from "@fortawesome/free-solid-svg-icons";

function App() {

  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav className="navContainer">

            <li><Link to = "/" > <h1><FontAwesomeIcon icon={faHippo}/></h1></Link></li>
            <li><Link to = "/menu" >Menu</Link></li>
            <li><Link to = "/history">About</Link></li>
            {/* <li><Link to = "/gallery">Gallery</Link></li> */}
            <li><Link to = "/contact">Contact</Link></li>
          </nav>
        </header>

        <Route exact path ="/" component={Home}></Route>
        <Route path ="/menu" component={Menu}></Route>
        <Route path ="/history" component={History}></Route>
        <Route path ="/contact" component={ContactModal}></Route>
        {/* <Route path ="/gallery" component={Gallery}></Route> */}

      </div>
      
    </Router>
    

  )
}

export default App;
