import profilePic from "../assets/IMG_0449_linda.jpg"
import cyLogo from "../assets/cy-logo.png"
import reactLogo from "../assets/react-logo.png"
import figmaLogo from "../assets/figma-symbol.png"
import gitbashLogo from "../assets/git-bash-symbol.png"
import githubLogo from "../assets/github-symbol.png"
import JsLogo from "../assets/JS-symbol.png"
import HTMLLogo from "../assets/HTML-symbol.png"
import CSSLogo from "../assets/CSS-symbol.png"
const ContactInfo = () =>  {

    return (
        <>
        <section className="cv-container">
            <div className="CV" >
                {/* <h3>CV</h3> */}
                <section>
                    <h4>Målsättning</h4>
                    <p>För närvarande studerar jag till Frontend-developer på NBI/Handelsakademin där jag bygger kunskapen jag behöver för min framtida karriär</p>
                    <p>Jag är klar min LIA för period 1 där jag jobbat tillsammans med en annan student med att utveckla en hemsida som med hjälp av AI hjälper studenter att studera.</p>
                </section>
                <section>
                    <h4>LIA period:</h4>
                    <p className="centered-text">Period 2: 2025-03-17 till 2025-06-06</p>
                </section>
                <section>
                    <h4>Egenskaper</h4>
                    <p>Jag har erfarenhet inom många olika yrken vilket har gjort mig flexibel. Som person strävar jag efter att göra mitt bästa och kontinuerligt förbättra mig själv. Jag är bra på att lösa problem och på att improvisera, är inte rädd att fråga om hjälp när det behövs.</p>
                </section>
                <section>
                    <h4>Arbetslivserfarenhet</h4>

                    <h4>2022-2023 </h4>
                    <p>LIA på Entryze  -
Utveckling av hemsida för studenter i bl.a. React och Tailwind. </p>
                    <h4>2022-2023 </h4>
                    <p>Kundtjänstmedarbetare på Teleperformance -
Svarade på kunders frågor och arbetade med reklamationer. </p>
                    <h4>2022/2023</h4>
                    <p>Sommar-vikariat för Kökspersonal på Nytida Mjörnviksholm.</p>
                    <h4>2018-2020</h4>
                    <p>Lokalvårdare på Bernttek AB, Arvika -
Städ på företag, privata hem och flyttstädning.</p>
                    <h4>2017-2018</h4>
                    <p>Erikshjälpen Second Hand, Arvika -
Skyltning, sortering, prissättning och stod i kassa.</p>
                </section>
            </div>
            <div>
            <img className="profile-pic-cv" src={profilePic} />
                <div className="edu-lang-containers">
                <h4>Jag går att kontaktas på: </h4>
                    <a href="https://www.linkedin.com/in/linda-westerlund-68340728b/" target="_blank" rel="noopener noreferrer">LinkedIn &#x2197;</a>

                </div>
                <section className="edu-lang-containers">
                    <h4>Utbildningar:</h4>
                    <h4>2023 – 2025</h4>
                    <p>Frontend-developer på NBI handelsakadenim</p>
                    <h4>2020 – 2022</h4>
                    <p>Yrgos utbildning för manusförfattare</p>
                </section>
                <ul className="edu-lang-containers">
                    <h4>Språkkunskaper:</h4>
                    <li>Engelska, goda kunskaper i tal och skrift</li>
                    <li>Svenska, modersmål</li>
                </ul>
                <section className="tech-lang">
                    <img className="logos" src={CSSLogo}/>
                    <img className="logos" src={HTMLLogo}/>
                    <img className="logos" src={JsLogo}/>
                    <img className="logos" src={gitbashLogo}/>
                    <img className="logos" src={reactLogo}/>
                    <img className="logos" src={cyLogo}/>
                    <img className="logos" src={githubLogo}/>
                    <img className="logos" src={figmaLogo}/>

                </section>
            </div>
        </section>
        </>
    )
}

export default ContactInfo