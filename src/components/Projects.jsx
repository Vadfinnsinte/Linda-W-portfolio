import { NavLink, Outlet } from "react-router-dom"
import pokemonPic from "../assets/Pokemon-pic.png"
import realFantasy from "../assets/RealFantasy.png"
import hangman from "../assets/hangman-second.png"


const Projects = () => {

    return (
        <div className="project-container">
        <section className="sidebar">
          
            <NavLink className="navlink" to="/projekt/pokemon" >Pokémon team manager</NavLink>
            <NavLink className="navlink"> Webbshop-RealFantasy</NavLink>
            <NavLink className="navlink">Hangman</NavLink>
            <NavLink className="navlink">RollingSummer</NavLink>
            <NavLink className="navlink">Spicy Food</NavLink>

 
        </section>
        <div className="overview-projects">
         <section className="preview-card">
            <h4>Pokémon team manager</h4>
            <p>Detta är en app från när vi började jobba med APIn. Vi skulle göra en Pokémon team maneger. Detta var en självständig uppgift. </p>
            <p>Vi skulle kunna söka efter pokémon och lägga till dem i vårt team.</p>
            <img className="preview-pic" src={pokemonPic} />
         </section>
         <section className="preview-card">
            <h4>Webbshop-RealFantasy</h4>
            <p>Detta är ett projekt från  vår  kurs “Grafiska verktyg för gränssnittsdesign” </p>
            <p>Vi fick i uppgift att skapa wireframes och mockup/prototyp för en sida som säljer en vara. Jag valde att sälja riktiga vapen från spel. </p>
            <img className="preview-pic-two"  src={realFantasy} />
         </section>
         <section className="preview-card">
            <h4>Hangman</h4>
            <p>Vi fick ett grupparbete där vi skulle skapa ett ”hänga gubben”-spel. Detta var vårt första projekt med JavaScript där vi skulle använda oss av localStorage. </p>
            <p>Jag jobbade främst på att dynamisk skapa topplistan och med att få localStorage att fungera. Men hade en hand i mycket av koden:</p>
            <img className="preview-pic"  src={hangman} />
         </section>
         <section className="preview-card">
            <h4>RollingSummer</h4>
            <p></p>
            <p></p>
            <img className="preview-pic-two"  src="" />
         </section>
         <section className="preview-card">
            <h4>Spicy Food</h4>
            <p></p>
            <p></p>
            <img className="preview-pic"  src="" />
         </section>
        </div>
        <Outlet/>
        </div>
    )
}

export default Projects