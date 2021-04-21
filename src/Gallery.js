//Gallery.js
import galleryImage1 from "./assets/galleryImage1.jpg"
import galleryImage2 from "./assets/galleryImage2.jpg"
import galleryImage3 from "./assets/galleryImage3.jpg"
import galleryImage4 from "./assets/galleryImage4.jpg"
import galleryImage5 from "./assets/galleryImage5.jpg"
import galleryImage6 from "./assets/galleryImage6.jpg"
import galleryImage7 from "./assets/galleryImage7.jpg"
import galleryImage8 from "./assets/galleryImage8.jpg"






const Gallery = () => {
     return(
          <section class = "galleryContainer">
               <h1>Gallery</h1>
               <div className="currentImageContainer">
                    <img src={galleryImage1} alt="" id="currentImage"/>
               </div>
               <div className="imgs">
                    <img src={galleryImage1} id="portrait" alt=""/>
                    <img src={galleryImage2} alt=""/>
                    <img src={galleryImage3} alt=""/>
                    <img src={galleryImage4} alt=""/>
                    <img src={galleryImage5} id="portrait" alt=""/>

               </div>
          </section>
     )
}

export default Gallery