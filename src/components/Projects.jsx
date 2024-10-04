import { NavLink, Outlet } from "react-router-dom"
import pokemonPic from "../assets/Pokemon-pic.png"
import realFantasy from "../assets/RealFantasy.png"
import hangman from "../assets/hangman-second.png"
import rollingSummer from "../assets/Rollingsummer.jpg"
import spicyFood from "../assets/spicyFood.jpg"
import candyCatch from "../assets/CandyCatch.jpg"

const Projects = () => {

    return (
        <div className="project-container">
        {/* <section className="sidebar">
          
            <NavLink className="navlink" to="/projekt/pokemon" >Pokémon team manager</NavLink>
            <NavLink className="navlink"> Webbshop-RealFantasy</NavLink>
            <NavLink className="navlink">Hangman</NavLink>
            <NavLink className="navlink">RollingSummer</NavLink>
            <NavLink className="navlink">Spicy Food</NavLink>

 
        </section> */}
        <div className="overview-projects">
         <section className="preview-card">
            <h4>Pokémon team manager</h4>
            <p>Detta är en app från när vi började jobba med APIn. Vi skulle göra en Pokémon team manager. Detta var en självständig uppgift. </p>
            <p>Vi skulle kunna söka efter pokémon och lägga till dem i vårt team.</p>
            <a href="https://github.com/Vadfinnsinte/JS-pokemon-team-manager" target="_blank" rel="noopener noreferrer">Länk till github-repo &#x2197; </a>
            <a className="right" href="https://vadfinnsinte.github.io/JS-pokemon-team-manager/" target="_blank" rel="noopener noreferrer">Länk till publicerad sida &#x2197;</a>
            <img className="preview-pic" src={pokemonPic} />
         </section>
         <section className="preview-card">
            <h4>Webbshop-RealFantasy</h4>
            <p>Detta är ett projekt från  vår  kurs “Grafiska verktyg för gränssnittsdesign” </p>
            <p>Vi fick i uppgift att skapa wireframes och mockup/prototyp för en sida som säljer en vara. Jag valde att sälja riktiga vapen från spel. </p>
            <a href="https://www.figma.com/design/f2rogoEczyAr063Mp5KFu8/Webbshop-Linda-W?node-id=34-353&m=dev&t=eZqWZH5CgzJoGjkO-1" target="_blank"  rel="noopener noreferrer">Länk till devmode i figma &#x2197;</a>
            <a className="right" href="https://www.figma.com/proto/f2rogoEczyAr063Mp5KFu8/Webbshop-Linda-W?node-id=34-353&t=eZqWZH5CgzJoGjkO-1" target="_blank">Länk till prototyp &#x2197;</a>
            <img className="preview-pic-two"  src={realFantasy} />
         </section>
         <section className="preview-card">
            <h4>Hangman</h4>
            <p>Vi fick ett grupparbete där vi skulle skapa ett ”hänga gubben”-spel. Detta var vårt första projekt med JavaScript där vi skulle använda oss av localStorage. </p>
            <p>Jag jobbade främst på att dynamisk skapa topplistan och med att få localStorage att fungera. Men hade en hand i mycket av koden:</p>
            <a href="https://github.com/FredrikKii/GrupparbeteJavascript" target="_blank" rel="noopener noreferrer">Länk till github-repo &#x2197;</a>
            <a className="right" href="https://fredrikkii.github.io/GrupparbeteJavascript/" target="_blank" rel="noopener noreferrer">Länk till publicerad sida &#x2197;</a>
            <img className="preview-pic"  src={hangman} />
         </section>
         <section className="preview-card">
            <h4>Spicy Food</h4>
            <p>Detta är ett grupparbete där vi skulle skapa en hemsida för en restaurang, man skulle kunna lägga till, ta bort och uppdatera maträtterna. när man var inloggad.</p>
            <p>Vi par-programmerade i stort sätt hela tiden på detta projectet, så har jag inte skrivit koden så har jag varit med på sidan av.</p>
            <a href="https://github.com/FredrikKii/GrupparbeteJavascript" target="_blank" rel="noopener noreferrer" >Länk till github-repo &#x2197;</a>
            <a className="right" href="https://ha-fed23-js-2.github.io/Spicy-stars/" target="_blank" rel="noopener noreferrer">Länk till publicerad sida &#x2197;</a>
            <img className="preview-pic-two"  src={spicyFood} />
         </section>
         <section className="preview-card">
            <h4>RollingSummer</h4>
            <p>Detta var ett enskilt projekt där jag med hjälp av firebase skulle skapa en webbshop för sommarleksaker.</p>
            <p>Detta projektet flöt på väldigt bra och jag hade inte så många problem med koden, förutom när jag fastnade i en loop och blev blockad från firebase i 24h. </p>
            <a href="https://github.com/Vadfinnsinte/WebbShop-RollingSummer" target="_blank" rel="noopener noreferrer" >Länk till github-repo &#x2197;</a>
            <a className="right" href="https://vadfinnsinte.github.io/WebbShop-RollingSummer/" target="_blank" rel="noopener noreferrer">Länk till publicerad sida &#x2197;</a>
            <img className="preview-pic"  src={rollingSummer} />
         </section>
         <section className="preview-card">
            <h4>CandyCatch</h4>
            <p>Detta är ett projekt som jag lekt lite med på sidan av skolan. Ville testa och se om jag kunde få ihop ett litet spel men kunskaperna jag hade mot slutet av mitt första år.</p>
            <p>Har tyvärr inte haft så mycket tid över till detta projekt och hitboxen är tyvärr lite off. Men jag hade kul!( Går endast spela med tangentbord just nu.) </p>
            <a href="https://github.com/Vadfinnsinte/CandyCatch" target="_blank" rel="noopener noreferrer" >Länk till github-repo &#x2197;</a>
            <a className="right" href="https://vadfinnsinte.github.io/CandyCatch/" target="_blank" rel="noopener noreferrer">Länk till publicerad sida &#x2197;</a>
            <img className="preview-pic-two"  src={candyCatch} />
         </section>
        </div>
        <Outlet/>
        </div>
    )
}

export default Projects