//Home.js
import reservationBanner from './assets/reservationBanner.jpg'

const Home = () => {
     return(
          
          <section className="homeContainer">
               <div className="subContainer">
                    <div className="reservationContainer">
                         <h2>RESERVATION</h2>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, minima? Perspiciatis perferendis natus consectetur placeat enim. Nostrum nihil quo laborum, eveniet aut, obcaecati labore, nesciunt aliquid natus libero nisi mollitia.</p>
                         <img src={reservationBanner} alt=""/>

                    </div>
               </div>
          </section>
     )
}

export default Home; 