//Home.js
import reservationBanner from './assets/reservationBanner.jpg'
import galleryTitle from './assets/galleryTitle.jpg'
import titleImage from './assets/titleImage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import ContactModal from './ContactModal.js';
import Gallery from './Gallery.js'

const Home = () => {
     const [showContact , setshowContact] = useState(false);
     const [showGallery, setshowGallery] = useState(false);

     const handleContactClick = () => {
          setshowContact(true);
     }
     
     const handleGalleryClick = () => {
          setshowGallery(true);
     }

     return(
               <section className="homeContainer">
                         <div className="mainTitleContainer wrapper">
                              <div className="titleImageContainer ">
                                   <img src={titleImage} alt=""/>
                              </div>
                              <div className="mainTitle">
                                   <div className="mainTitleDes">
                                        <h1>the Hungry Hippo <FontAwesomeIcon icon={faHippo}/></h1>
                                        <p>Welcome to Hungry Hippo! Inspired by eating good and all the restaurants in Toronto</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro omnis iusto nobis consequuntur repellendus perspiciatis expedita aliquid delectus velit excepturi rem error quam esse ipsum sapiente, aspernatur eaque atque unde veniam placeat modi. Odit adipisci voluptatum reprehenderit architecto quidem dolore doloribus laborum. Itaque, quidem culpa recusandae in consequatur quasi provident magni eius reprehenderit labore corporis et deserunt, sunt amet eaque!</p>
                                   </div>
                                   <div className="contactGalleryContainer" >
                                        <div className="reservationContainer">
                                             <h1>CONTACT & HOURS</h1>
                                             <img src={reservationBanner} alt="restaurant table with wine glasses and dinner plates"/>
                                             <div className="shadow" onClick={handleContactClick}></div>
                                        </div>
                                        <div className="galleryTitleContainer">
                                             <h1>GALLERY</h1>
                                             <img src={galleryTitle} alt="a pair of hands kneading dough"/>
                                             <div className="shadow" onClick = {handleGalleryClick}></div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {showContact === true
                         ? <ContactModal 
                         onClose={()=>setshowContact(false)}
                         />
                         : null
                         }

                         {showGallery === true
                         ?<Gallery 
                         onClose={()=>setshowGallery(false)}
                         />
                         : null
                         }
               </section>

     )
}

export default Home; 