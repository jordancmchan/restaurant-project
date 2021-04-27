//Home.js
import reservationBanner from './assets/reservationBanner.jpg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => {
     return(
          <Router>
               <section className="homeContainer">
                    <div className="subContainer">
                         <div className="reservationContainer">
                              <h1>RESERVATION</h1>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, minima? Perspiciatis perferendis natus consectetur placeat enim. Nostrum nihil quo laborum, eveniet aut, obcaecati labore, nesciunt aliquid natus libero nisi mollitia.</p>
                              <img src={reservationBanner} alt=""/>
                         </div>
                    </div>
               </section>
          </Router>
     )
}

export default Home; 