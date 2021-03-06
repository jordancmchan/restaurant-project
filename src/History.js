//History.js 
import historypage from './assets/history-page.jpg'
import galleryImage7 from './assets/galleryImage7.jpg'
import galleryImage2 from './assets/galleryImage2.jpg'


const History = () => {
     return(
          <section className="historyContainer">
               <div className="historyImage">
                    <img src={galleryImage2} alt="lots of colorful bottles on bar counter"/>
               </div>
               <h1>The Hungry Hippo</h1>
               <div className="missionContainer wrapper ">
                    <div className="storyContainer">
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloribus cupiditate laboriosam quo expedita fugit eaque beatae unde dolor vel. Quam, quibusdam alias consequuntur voluptatum nemo rem nesciunt iusto repellendus doloribus quas? Eaque eum rem distinctio, eius aspernatur ipsum quisquam sapiente, quibusdam, dolorem harum necessitatibus libero assumenda doloribus! Dolorum facere repudiandae enim corporis magnam pariatur laudantium sed quidem distinctio vel quod corrupti sapiente aliquid quaerat nam perferendis, sit quae cum. Nobis architecto excepturi quo voluptate ea aliquam non at dicta, laudantium id, unde odio. Aliquam ex veritatis cumque accusamus corrupti.</p>
                         <p><span>- THE CHEF</span></p>
                    </div>
                    <div className="restaurantBanner">
                         <img src={historypage} className="firstImage"alt="restaurant"/>
                    </div>
               </div>
               <div className="valuesContainer wrapper">
                    <div className="storyContainer">
                         <h2>I love to eat</h2>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloribus cupiditate laboriosam quo expedita fugit eaque beatae unde dolor vel. Quam, quibusdam alias consequuntur voluptatum nemo rem nesciunt iusto repellendus doloribus quas? Eaque eum rem distinctio, eius aspernatur ipsum quisquam sapiente, quibusdam, dolorem harum necessitatibus libero assumenda doloribus! Dolorum facere repudiandae enim corporis magnam pariatur laudantium sed quidem distinctio vel quod corrupti sapiente aliquid quaerat nam perferendis, sit quae cum. Nobis architecto excepturi quo voluptate ea aliquam non at dicta, laudantium id, unde odio. Aliquam ex veritatis cumque accusamus corrupti.</p>
                    </div>
                    <div className="restaurantBanner">
                         <img src={galleryImage7} className= "secondImage"alt="restaurant"/>
                    </div>
               </div>
          </section>
     )
}

export default History