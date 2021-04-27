import './style/App.scss';
import Home from './Home.js'
import History from './History.js';
import Menu from './Menu.js';
import Gallery from './Gallery.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Fan from './assets/Fan.png'


function App() {
  return (
    <Router>
    <div className="App">
      <header className="header">
        <img src={Fan} alt="fan"/>
      </header>
      <Home />
      <Menu />
      <History />
    </div>
    </Router>
    
  )
}

export default App;
