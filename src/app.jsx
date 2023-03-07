import NavBar from "./component/navbar"
import Hero from "./component/hero"
import Card from "./component/cards"
import Data from "./data/data"




function App() {
    const individual_data = Data.map(single_data => 
        {return<Card 
          key={single_data.id}
          item = {single_data}
          />})

    return (
        <div>        
            <NavBar />
            <Hero />
            <section className="cards-list">
                {individual_data}
            </section>
        </div>

    )
}

export default App