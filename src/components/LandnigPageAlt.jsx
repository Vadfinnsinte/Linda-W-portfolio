import field from "../assets/field.jpeg";
// import fieldTwo from "../assets/fieldTwo.jpeg"
import fieldTwo from "../assets/fieldTwoagain.jpg";
import akira from "../assets/akira.jpeg";
import profilePic from "../assets/jag.jpg";

const LandingPageAlt = () => {
  return (
    <>
      {/* <div className="wel-pic">
                <img className="field-pic" src={fieldTwo}/>
                <h1 className="name">Linda Westerlund</h1>
            </div> */}
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
            Jag vet att jag har mycket kvar att lära mig och att man speciellt inom utveckling aldrig lär sig allt. Den ständigt omväxlande tekniken och kulturen inom utveckling är något som jag finner otroligt givande och engagerande. 
            <br />
            <br />
            Jag har lärt mig mycket på kort tid och utveckling är något
            jag tagit mig till och har blivit något jag älskar!
          </p>
          <div className="flex">
            <p>
              Lite kort om mig, mitt namn är Linda och jag bor utanför Göteborg med
              min sambo och vår hund. Jag har under mina år bott på olika
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
		<section className="classes-container">
		  <h3 className="active-course">Skills: </h3>

		  <div>
			<p>
			  <span>HTML </span>
			</p>
			<p>
			  <span> CSS </span>
			</p>
			<p>
			  <span>JavaScript </span>
			</p>
			<p>
			  <span>React </span>
			</p>
			<p>
			  <span>React Native</span>
			</p>
			<p>
			  <span> Vue </span>
			</p>
					<p>
			  <span>Node.js</span>
			</p>
			<p>
			  <span>Azure DevOps </span>
			</p>
			<p>
			  <span>GIT </span>
			</p>
		  </div>
		  <div>
			<p>
			  <span>Tailwind CSS </span>
			</p>
			<p>
			  <span>Zustand </span>
			</p>
			<p>
			  <span>Vuetify </span>
			</p>
			<p>
			  <span>Figma </span>
			</p>
			<p>
			  <span>Express</span>
			</p>

			<p>
			  <span> MongoDB</span>
			</p>
			<p>
			  <span>Jest</span>
			</p>
			<p>
			  <span>Cypress</span>
			</p>
			<p>
			  <span>Docker</span>
			</p>
		  </div>
		  <div>
			
	
		  </div>
		</section>
        </div>
          {/* <h3>Utbildningar: </h3>
          <section className="lia-period">
            <h4>Frontend Utvecklare</h4>
            <p>Juni 2025</p>
            <p>Augusti 2023</p>
          </section>
          <section className="lia-period">
            <h4>Manusförfattare</h4>
            <p>Augusti 2020</p>
            <p>Maj 2022</p>
          </section> */}
      </section>
    </>
  );
};

export default LandingPageAlt;
