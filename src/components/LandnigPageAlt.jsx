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
        <img className="profile-pic" src={profilePic} />

        <div className="text">
          <h3> Linda Westerlund - Frontend-utvecklare.</h3>
          <p>
            Välkommen till min portfolio. Här kan man hitta projekt jag har
            jobbat på, mitt CV och lite mer om mig.
          </p>
          <p>
            Jag är precis färdig med min utbildning är nu en junior
            frontend-utvecklare med lite erfarenhet av fullstackutveckling.
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
          <div className="flex">
            <p>
              Lite kort om mig, mitt namn är Linda och jag bor utanför Göteborg
              med min sambo och vår hund. Jag har under mina år bott på olika
              ställen i vårt långa land.
              <br />
              <br />
              Jag är född i Skellefteå och flyttade till Göteborg när jag var 17
              år. Sedan dess har jag även bott ett år i Oskarshamn och 4 år i
              Arvika.
              <br />
              <br />
              Att flytta hemifrån så ung har gjort mig bra på att lösa problem,
              har lärt mig att ta ansvar för mig själv och gjort så att jag har
              lätt för förändringar. Detta är något jag också tagit med mig i
              mina yrkesroller.
              <br />
              <br />
              Min fritid spenderar jag med vänner, spelar spel i alla former och
              ute i naturen med min hund.
            </p>
            <img className="akira-pic" src={akira} />
          </div>
        </div>
        <div className="LIA-container">
          <Language />
        </div>
      </section>
    </>
  );
};

export default LandingPageAlt;
