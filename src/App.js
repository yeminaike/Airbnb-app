
import './App.css';
 import Navbar from './Components/Navbar';
 import Hero from './Components/Hero';
 import Card from './Components/Card';
// import PropsLearning from './Components/PropsLearning';
import Contact from './Components/Contact';
// import images from "./Images/Swimming-athlete.png"
// import phone  from "./Images/Phone.png"
// import email from "./Images/email.png";
//  import Djokovic from "./Images/djokovic.png";
//  import athelete from "./Images/Swimming-athlete.png"

 import Data from "./Data"
 console.log(Data)
 

function App() {
  const example = Data.map((item)=>{
return [item.location, item.coverImg]
  })
  console.log(example)
  const cards = Data.map(item => {
    return(
      <Card 
      key ={item.id}
      {...item}
      //  or
      item = {item}

      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={6}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
  />
      
    )

  }
    )
  return (
    <div className="App">


     <Navbar/>
     <Hero/>
     {/* <PropsLearning/> */}
     <section className="cards-list">
     {cards}
     </section>
     
    </div>

    
  );
}



export default App;
