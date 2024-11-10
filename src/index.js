import React  from "react";
import ReactDOM from "react-dom/client" ; //18
// import ReactDOM from "react-dom";  //1
import "./index.css";
 


const pizzaData = [                 
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  



//Each component can return only one elmee=nt at a time

function App(){
    // return <h1>Hello React ! </h1><Pizza/>
    return (
      // in JSX we use className instead of class
    <div className="container">
    <h1>Hello React !</h1>
    {/* we nested component pizza here */}
    <Header/>
    <Menu/>
    <Footer/>
    </div>
    ); 
}


function Header() {

// const style = {color : "red" , fontSize: "48px" , textTransform:"uppercase"};
const style = {};

 {/* return <h1 style={{color : "red" , fontSize: "48px" , textTransform:"uppercase"}}> Fast React Pizza Co.</h1> */}
return (
 <header className="header">
<h1 style={style} > Fast React Pizza Co.</h1>
</header> 
);

}

//we can also use the arrow function but its upto us
// const Header = () => {
//   // Function body
// };



//parent for props
function  Menu(){
 const pizzas = pizzaData;
// const pizzas = [];
 const numPizzas = pizzas.length;

 return(
  <div className="menu">
    <h2>Our Menu</h2>


    

    // Conditional rendering
   
   //Ternary opertor also used
 {numPizzas > 0 ? ( 
  <React.Fragment>
  <p> Authentic Italian cuisine. 6 creative dises to choose from. All from
  our stone oven, all organic , all delicious.
</p>
  
  <ul className="pizzas">
 {/* {pizzas && ( <ul className="pizzas"> */}

       {/* {pizzaData.map((pizza) => ( */}
         {pizzas.map((pizza) => (
        // <Pizza name= {pizza.name}  ingredients={pizza.ingredients} photoName={pizza.photoName} />
        // usually we pass in entire Object into more specific component
        //key: we use key
        // key={pizza.name}:
      //  Provides a unique key prop for each Pizza component,
      //  usually required when rendering lists in React. 
      //  React uses this key to keep track of each component instance, enhancing rendering performance.
      //   Here, pizza.name is used as the unique identifier.
        <Pizza pizzaObject = {pizza} key={pizza.name} />
       ))}
        
    </ul>
    </React.Fragment>
 )    :  (<p>Please come back later</p>

 )}

   

    {/* <Pizza 
     name = "Pizza Spinaci"
     ingredients = "Tomato, mozarella, spinach, and ricotta cheese"
     photoName= "pizzas/spinaci.jpg"
    //  price= "10"
    price = {10}
    />

<Pizza 
     name = "Pizza Funghi"
     ingredients = "Tomato, mushrooms"
     photoName= "pizzas/funghi.jpg"
    //  price= "12"   //acts as string
    price= {12}  //acts as number
    /> */}
    
  </div>
 );
}


//child element

// function Pizza(props){
// this was simple props 

// Now we are destructuring props instead of using props


  function Pizza({pizzaObject}){
  // console.log(props);

// if(props.pizzaObject.soldOut) return null;
// now this
// if(pizzaObject.soldOut) return null;

  return (
  <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
  <img src={pizzaObject.photoName} alt={pizzaObject.name}/>
  <div>
  <h2>{pizzaObject.name}</h2>
  <p>{pizzaObject.ingredients}</p>

    {pizzaObject.soldOut ? (
      <span>SOLD OUT</span>
    ): <span>{pizzaObject.price}</span>}
  <span>{pizzaObject.soldOut  ? "Sold out" : pizzaObject.price}</span>
  </div>
  </li>
); 
}


function Footer(){
  
  const hour = new Date().getHours();
  const openHour = 12 ;
  const closeHour = 22 ;
  const isOpen = hour >= openHour  && hour<= closeHour;

  console.log(isOpen);

  // if(hour >= openHour  && hour<= closeHour) alert("We're currently open");
  // else alert("Sorry we're close");

//  if( !isOpen) return <p>CLOSED</p>;

  return (
  <footer className="footer">{isOpen ?  (
   <Order closeHour={closeHour}  openHour={openHour}/>
   ) : <p>We're happy to welcome you</p>}
    </footer>
  );
    {/* {new Date().toLocaleTimeString()}.   //JavaScript logic
    We're currently open */}

    // {isOpen && <p>Open</p>}: This is a conditional rendering. If isOpen is true, the <p>Open</p> element will be displayed within the footer; if isOpen is false, nothing will render in its place.

// return React.createElement('footer',null, "We're currently open" );

}

//destructuring props

function Order({closeHour , openHour}) {
  <div className="order">
  <p>We're open from {openHour} until {closeHour}:00 . Come visit or ordder online.</p>
  <button className="btn">Order</button>
  </div>
}


// 1. React.createElement: This function is used to create a React element. It’s typically used under the hood when JSX is transpiled to JavaScript.
// 2. First Argument ('footer'): This specifies the type of element you want to create. Here, it's a 'footer' HTML element.
// 3.Second Argument (null): This is where you would pass any props (like id, className, styles, or event handlers) to the element. Since there are no props, null is used.
// 4.Third Argument ("We're currently open"): This is the content or children of the element, which is the text displayed inside the footer.


//Components:
// in react we write new components as functions




//React version18
const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);


root.render(<
    React.StrictMode>
    <App/>
    </React.StrictMode>
    );





//React before 18
// React.render(<App/>);