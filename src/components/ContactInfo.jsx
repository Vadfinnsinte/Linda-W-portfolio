import profilePic from "../assets/IMG_0449_linda.jpg";
import cyLogo from "../assets/cy-logo.png";
import reactLogo from "../assets/react-logo.png";
import figmaLogo from "../assets/figma-symbol.png";
import gitbashLogo from "../assets/git-bash-symbol.png";
import githubLogo from "../assets/github-symbol.png";
import JsLogo from "../assets/JS-symbol.png";
import HTMLLogo from "../assets/HTML-symbol.png";
import CSSLogo from "../assets/CSS-symbol.png";
import Language from "./TechLanguage";
const ContactInfo = () => {
  return (
    <>
      <section className="cv-container">
        <div className="CV">
          {/* <h3>CV</h3> */}
          <section>
            <h4>Målsättning</h4>
            <p>
             Jag söker en roll inom utveckling där jag får kombinera frontend med backend och arbeta med moderna lösningar inom systemintegration. Jag trivs i miljöer där problemlösning, samarbete och teknisk utveckling är en naturlig del av vardagen.
            </p>
          </section>
          <section>
            <h4>Egenskaper</h4>
            <ul>
				<li>Lösningsorienterad och analytisk</li>
				<li>Självständig med god samarbetsförmåga</li>
				<li>Snabblärd och teknikintresserad</li>
				<li>Strukturerad och ansvarstagande</li>
            </ul>
          </section>
          <section>
            <h4>Arbetslivserfarenhet</h4>

            <h4>2025-2025 </h4>
            <p>
              LIA Nordlo Connect - Utveckling av hemsida för översikt och inställningar på
              kollektorer. Utvecklat i bl.a. VUE med Vuetify och nuxt. Använding
              av Grafana och docker.{" "}
            </p>
            <h4>2024-2025 </h4>
            <p>
              LIA på Entryze - Utvecklade en hemsida som ska förenkla studier
              för studenter i bl.a. React och Tailwind.{" "}
            </p>
            <h4>2022-2023 </h4>
            <p>
              Kundtjänstmedarbetare på Teleperformance - Svarade på kunders
              frågor och arbetade med reklamationer.{" "}
            </p>
            <h4>2022/2023</h4>
            <p>
              Sommar-vikariat för Kökspersonal på Nytida Mjörnviksholm -
              Planerade, beställde, lagade, och serverade mat till boende och
              personal.{" "}
            </p>
            <h4>2018-2020</h4>
            <p>
              Lokalvårdare på Bernttek AB, Arvika - Städ på företag, privata hem
              och flyttstädning.
            </p>
            <h4>2017-2018</h4>
            <p>
              Erikshjälpen Second Hand, Arvika - Skyltning, sortering,
              prissättning och stod i kassa.
            </p>
          </section>
        </div>
        <div className="padding">
          <img className="profile-pic-cv" src={profilePic} />
          <div className="edu-lang-containers">
            <h4>Jag går att kontaktas på: </h4>
            <a
              href="https://www.linkedin.com/in/linda-westerlund-68340728b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn &#x2197;
            </a>
          </div>
          <section className="edu-lang-containers">
            <h4>Utbildningar:</h4>
            <h4>2025 - pågående</h4>
            <p>Backend-developer inriktning cloud på NBI handelsakadenim</p>
            <h4>2023 – 2025</h4>
            <p>Frontend-developer på NBI handelsakadenim</p>
            <h4>2020 – 2022</h4>
            <p>Yrgos utbildning för manusförfattare</p>
          </section>
          {/* <section className="tech-lang">
            <Language />
          </section> */}
          <section className="edu-lang-containers">
            <h4>Språkkunskaper:</h4>
            <p>- Engelska, flytande i tal och skrift</p>
            <p>- Svenska, modersmål</p>
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
