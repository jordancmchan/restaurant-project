//Home.js
import { useState } from 'react';
import Gallery from './Gallery.js'

const Home = () => {
     
     const [showGallery , setShowGallery] = useState(false);

     function onClose(){
          setShowGallery(false)
     }

     return(
          <section className="homeContainer">
                    <div className="mainTitleContainer wrapper">
                         <div className="mainTitle">
                              <div className="mainTitleDes">
                                   <h2>Welcome to Hungry Hippo! </h2>
                                   <p>Inspired by good food and all the restaurants in Toronto</p>
                                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro omnis iusto nobis consequuntur repellendus perspiciatis expedita aliquid delectus velit excepturi rem error quam esse ipsum sapiente, aspernatur eaque atque unde veniam placeat modi. Odit adipisci voluptatum reprehenderit architecto quidem dolore doloribus laborum. Itaque, quidem culpa recusandae in consequatur quasi provident magni eius reprehenderit labore corporis et deserunt, sunt amet eaque!</p>
                                   <a onClick = {() => {setShowGallery(true)}}>Gallery</a>
                              </div>
                         </div>
                    </div>

               {showGallery
               ?<Gallery 
               onClose =  {onClose}
               /> 
               : null 
               }

                    
 


                    
          </section>

     )
}

export default Home; 