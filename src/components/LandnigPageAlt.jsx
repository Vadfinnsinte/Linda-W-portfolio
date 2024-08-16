import field from "../assets/field.jpeg"
// import fieldTwo from "../assets/fieldTwo.jpeg"
import fieldTwo from "../assets/fieldTwoagain.jpg"
import akira from "../assets/akira.jpeg"
import profilePic from "../assets/jag.jpg"

const LandingPageAlt = () => {
    return (
        <>
            {/* <div className="wel-pic">
                <img className="field-pic" src={fieldTwo}/>
                <h1 className="name">Linda Westerlund</h1>
            </div> */}
            <section className="welcome-txt">
            <img className="profile-pic" src={profilePic}/>
 
                <div className="text">
                    <h3> Linda Westerlund - Frontend-utvecklare.</h3>
                    <p>Välkommen till min portfolio. Här kan man hitta projekt jag har jobbat på, mitt CV och lite mer om mig och min utbildning.</p>
                    <p>Lite kort om mig, mitt namn är Linda och jag studerar för närvarande till frontend utvecklare på NBI/handelsakademin. Jag bor utanför Göteborg med min sambo och vår hund.</p>

                </div>
                <div className="LIA-container">
                        <h3>LIA: </h3>
                    <section className="lia-period">
                        <h4>Period 1</h4>
                        <p>2024-11-11</p>
                        <p>2025-01-31 </p>
                     </section>
                    <section className="lia-period">
                        <h4>Period 2</h4>
                        <p>2025-03-17</p>
                        <p>2025-06-06</p>
                     </section>

                </div>
                <section className="classes-container">
                    <h3 className="active-course">Kurser: </h3>
                <div className="active-course">
                     <p><span>Fullstackutveckling </span>- Pågående</p>
                </div>
                <div className="last-child">
                    <p><span>HTML och CSS </span>- Avklarad</p>
                    <p><span>JavaScript grund </span>- Avklarad</p>
                    <p><span> Grafiska verktyg för gränssnittsdesign </span>- Avklarad</p>
                    <p> <span>UX och Usability</span> - Avklarad</p>
                </div>
                <div className="last-child">
                    <p><span> Att arbeta i projekt med agila metoder</span> - Avklarad</p>
                    <p> <span>JavaScript Fördjupning </span>- Avklarad</p>
                    <p> <span>Testning </span>- Avklarad </p>
                    <p> <span>LIA </span>- uppkomande</p>
                    <p><span>Examensarbete </span> - uppkomande</p>
                </div>
                </section>
                </section>
        </>
    )
}

export default LandingPageAlt