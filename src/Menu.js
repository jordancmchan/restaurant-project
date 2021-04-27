//Menu.js
import kitchen from './assets/kitchen.jpg'

const Menu = () => {
     return(
          <section className ="menuContainer">
               <div className ="kitchenBanner">
                    <img src={kitchen} alt="restaurant kitchen"/>
                    <h1>MENU</h1>
               </div>
               <div className="entireMenuContainer wrapper" >
                    <div className="appetizerSection">
                         <h1>APPETIZER</h1>
                         <div className="app">
                              <h2>Karaage </h2>
                              <p>ingredient • ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                         <div className="app">
                              <h2>Cabbage Salad</h2>
                              <p>ingredient • ingredient • ingredient ingredient • ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                         <div className="app">
                              <h2>Edamame</h2>
                              <p>ingredient • ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                         <div className="app">
                              <h2>Pot Stickers</h2>
                              <p>ingredient • ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                         <div className="app">
                              <h2>Braised Chicken Wings</h2>
                              <p>ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                         
                    </div>
                    <div className="riceSection">
                         <h1>RICE</h1>
                         <div className="rice">
                              <h2>Clay Pot Rice</h2>
                              <ul>
                                   <li>chicken</li>
                                   <li>bbq pork</li>
                                   <li>bbq duck</li>
                              </ul>
                              <p>ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                         <div className="rice">
                              <h2>Unagi Rice</h2>
                              <p>ingredient list</p>
                              <p className="price">$10.00</p>
                         </div>
                         <div className="rice">
                              <h2>Kimchi Fried Rice</h2>
                              <p>ingredient list</p>
                              <p className="price">$10.00</p>
                         </div>
                    </div>
                    <div className="noodleSection">
                         <h1>NOODLES</h1>
                         <div className="noodle">
                              <h2>Kimchi Udon</h2>
                              <p>ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                         <div className="noodle">
                              <h2>Instant Shin Ramen</h2>
                              <p>ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                    </div>
                    <div className="skewerSection">
                         <h1>SKEWERS</h1>
                         <ul>
                              <li>Pork and Scallions</li>
                              <li>Sirlon Steak</li>
                              <li>Pork Belly</li>
                              <li>Chicken Thigh</li>
                              <li>Mushrooms</li>
                              <li>Chicken Gizzards</li>
                         </ul>
                         <p className="price">$3.50 each</p>
                    </div>
                    <div className="drinkSection">
                         <h1>DRINKS & COCKTAILS</h1>
                         <ul>
                              <li>Beer</li>
                              <li>Wine</li>
                              <li>Cocktails</li>
                              <li>Pop</li>
                         </ul>
                         <p className="price">$10.00</p>
                    </div>
                    <div className="dessertSection">
                         <h1>DESSERT</h1>
                         <div className="dessert">
                              <h2>Cake</h2>
                              <p>ingredient • ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                         <div className="dessert">
                              <h2>Cake</h2>
                              <p>ingredient • ingredient</p>
                              <p className="price">$10.00</p>
                         </div>
                    </div>
               </div>
               
          </section>
     )
}

export default Menu
