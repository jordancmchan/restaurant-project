//Gallery.js
import galleryImage1 from "./assets/galleryImage1.jpg";
import galleryImage2 from "./assets/galleryImage2.jpg";
import galleryImage3 from "./assets/galleryImage3.jpg";
import galleryImage4 from "./assets/galleryImage4.jpg";
import galleryImage5 from "./assets/galleryImage5.jpg";


const Gallery = () => {

     function galleryClick (e) {
          
          const galleryImages = document.querySelectorAll(".imgs img");
          galleryImages.forEach((img) => {
               img.style.opacity= "1";
          })

          const currentImage = document.querySelector('#currentImage')
          currentImage.src = e.target.src;
          e.target.style.opacity = '0.4'
     }


  return (
    <section className="galleryContainer">
      <h1>GALLERY</h1>
      <div className="currentImageContainer">
        <img src={galleryImage1} alt="" id="currentImage" />
      </div>
      <div className="imgs">
        <img src={galleryImage1} onClick = {galleryClick} alt="dining table with wine glass" />
        <img src={galleryImage2} onClick = {galleryClick} alt="bar filled with alcohol bottles" />
        <img src={galleryImage3} onClick = {galleryClick} alt="restaurant photo" />
        <img src={galleryImage4} onClick = {galleryClick} alt="restaurant photo from aerial view" />
        <img src={galleryImage5} onClick = {galleryClick} alt="pots filled with food" />
      </div>
    </section>
  );
};

export default Gallery;
