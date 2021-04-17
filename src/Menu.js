//Menu.js
import kitchen from './assets/kitchen.jpg'

const Menu = () => {
     return(
          <section className ="menuContainer">
               <div className ="kitchenBanner">
                    <img src={kitchen} alt="restaurant kitchen"/>
               </div>
               <div className="entireMenuContainer">
                    <div className="appetizerSection">
                         <h1>Appetizer</h1>
                         <div className="app">
                              <h2>Karaage </h2>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                         <div className="app">
                              <h2>Cabbage Salad</h2>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                         <div className="app">
                              <h2>Edamame</h2>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                         <div className="app">
                              <h2>Pot Stickers</h2>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                         <div className="app">
                              <h2>Braised Chicken Wings</h2>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                         
                    </div>
                    <div className="riceSection">
                         <h1>Rice</h1>
                         <div className="rice">
                              <h2>Clay Pot Rice</h2>
                              <ul>
                                   <li>chicken</li>
                                   <li>bbq pork</li>
                                   <li>bbq duck</li>
                              </ul>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                         <div className="rice">
                              <h2>Unagi Rice</h2>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                         <div className="rice">
                              <h2>Kimchi Fried Rice</h2>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                    </div>
                    <div className="noodleSection">
                         <h1>Noodles</h1>
                         <div className="noodle">
                              <h2>Kimchi Udon</h2>
                              <p>ingredient list</p>
                              <p>$10.00</p>
                         </div>
                         <div className="noodle">
                              <h2>Instant Shin Ramen</h2>
                              <p>ingredient list</p>
                         </div>
                         <p>$10.00</p>
                    </div>
                    <div className="skewerSection">
                         <h1>Skewers</h1>
                         <ul>
                              <li>Pork and Scallions</li>
                              <li>Sirlon Steak</li>
                              <li>Pork Intestines</li>
                              <li>Chicken Thigh</li>
                              <li>Mushrooms</li>
                              <li>Chicken Gizzards</li>
                         </ul>
                         <p>$3.50 each</p>
                    </div>
                    <div className="drinkSection">
                         <h1>Drinks & Cocktails</h1>
                         <ul>
                              <li>Beer</li>
                              <li>Wine</li>
                              <li>Cocktails</li>
                              <li>Pop</li>
                         </ul>
                         <p>$10.00</p>
                    </div>
                    <div className="dessertSection">
                         <h1>Dessert</h1>
                         <div className="dessert">
                              <h2>Cake</h2>
                              <p>ingredient list</p>
                         </div>
                         <div className="dessert">
                              <h2>Cake</h2>
                              <p>ingredient list</p>
                         </div>
                    </div>
               </div>
               
          </section>
     )
}

export default Menu