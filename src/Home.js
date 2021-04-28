//Home.js
import reservationBanner from './assets/reservationBanner.jpg'
import Gallery from './Gallery.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => {
     return(
               <section className="homeContainer">
                    <div className="subContainer">
                         <div className="mainTitleContainer">
                              <h1>The Golden Fan</h1>
                              <img src={reservationBanner} alt=""/>
                         </div>
                    
                         <div className="reservationContainer">
                              <img src={reservationBanner} alt="restaurant photo"/>
                         </div>
                         <div className="galleryTitleContainer">
                              <img src={reservationBanner} alt=""/>
                         </div>
                    </div>
               </section>

     )
}

export default Home; 