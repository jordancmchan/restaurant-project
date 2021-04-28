//Home.js
import reservationBanner from './assets/reservationBanner.jpg'
import galleryTitle from './assets/galleryTitle.jpg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Home = () => {
     return(
               <section className="homeContainer">
                         <div className="mainTitleContainer">
                              <h1>The Golden Fan</h1>
                              {/* <img src={reservationBanner} alt=""/> */}
                         </div>
                         <div className="contactGalleryContainer">
                              <div className="reservationContainer">
                                   <h1>RESERVATION</h1>
                                   <img src={reservationBanner} alt="restaurant photo"/>
                                   <div className="shadow"></div>
                              </div>
                              <div className="galleryTitleContainer">
                                   <h1>GALLERY</h1>
                                   <img src={galleryTitle} alt=""/>
                                   <div className="shadow"></div>
                              </div>
                         </div>
               </section>

     )
}

export default Home; 