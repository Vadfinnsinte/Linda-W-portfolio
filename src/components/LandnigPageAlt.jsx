import field from "../assets/field.jpeg";
// import fieldTwo from "../assets/fieldTwo.jpeg"
import fieldTwo from "../assets/fieldTwoagain.jpg";
import akira from "../assets/akira.jpeg";
import profilePic from "../assets/jag.jpg";
import Language from "./TechLanguage.jsx";

const LandingPageAlt = () => {
  return (
    <>
      <section className="welcome-txt">
		   <div className="LIA-container">
          <Language />
        </div>
       

        <div className="text">
          <div>
            <h3> Linda Westerlund - Fullstack-utvecklare.</h3>
            <p>
              Välkommen till min portfolio. Här kan man hitta projekt jag har
              jobbat på, mitt CV och lite mer om mig.
            </p>
            <p>
              Jag är en junior
              frontend-utvecklare med erfarenhet av fullstackutveckling.
              Medan jag letar efter ett jobb så har jag valt att fortsätta
              utvecklas och studerar nu backend utveckling med inriktning Cloud.
              <br />
              <br />
              Jag vet att jag har mycket kvar att lära mig och att man speciellt
              inom utveckling aldrig lär sig allt. Den ständigt omväxlande
              tekniken och kulturen inom utveckling är något som jag finner
              otroligt givande och engagerande.
              <br />
              <br />
              Jag har lärt mig mycket på kort tid och utveckling är något jag
              tagit mig till och har blivit något jag älskar!
            </p>
			<div>
			<h3>Letar ni efter en utvecklare? </h3>
			<p>Kontakta mig på Mail eller LinkedIn så tar vi en kaffe.</p>
			<p> lindawesterlund94@gmail.com </p>
			  <a
              href="https://www.linkedin.com/in/linda-westerlund-68340728b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn &#x2197;
            </a>
			
			</div>
          </div>

          
        </div>
     
      </section>
    </>
  );
};

export default LandingPageAlt;
