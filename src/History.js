//History.js 
import historypage from './assets/history-page.jpg'

const History = () => {
     return(
          <section className="historyContainer">
               <h1>"People who love to eat are always the best people."<span>-Julia Child</span></h1>
               <div className="missionContainer wrapper">
                    <div className="storyContainer">
                         <h2>The Golden Fan</h2>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloribus cupiditate laboriosam quo expedita fugit eaque beatae unde dolor vel. Quam, quibusdam alias consequuntur voluptatum nemo rem nesciunt iusto repellendus doloribus quas? Eaque eum rem distinctio, eius aspernatur ipsum quisquam sapiente, quibusdam, dolorem harum necessitatibus libero assumenda doloribus! Dolorum facere repudiandae enim corporis magnam pariatur laudantium sed quidem distinctio vel quod corrupti sapiente aliquid quaerat nam perferendis, sit quae cum. Nobis architecto excepturi quo voluptate ea aliquam non at dicta, laudantium id, unde odio. Aliquam ex veritatis cumque accusamus corrupti.</p>
                         <p><span>- THE CHEF</span></p>
                    </div>
                    <div className="restaurantBanner">
                         <img src={historypage} alt="restaurant stock photo"/>
                    </div>
               </div>
          </section>
     )
}

export default History