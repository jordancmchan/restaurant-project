//Home.js
import reservationBanner from './assets/reservationBanner.jpg'
import galleryTitle from './assets/galleryTitle.jpg'
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
     return(
               <section className="homeContainer">
                         <div className="mainTitleContainer">
                              <div className="mainTitle wrapper">
                                   <h1>Hungry J</h1>
                                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis aliquid rerum velit possimus facilis architecto nemo ullam! Est alias, rem soluta quia quos iure eius, non voluptate ut at repudiandae?</p>
                              </div>
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