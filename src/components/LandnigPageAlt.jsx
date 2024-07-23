import field from "../assets/field.jpeg"
// import fieldTwo from "../assets/fieldTwo.jpeg"
import fieldTwo from "../assets/fieldTwoagain.jpg"
import akira from "../assets/akira.jpeg"
import profilePic from "../assets/imageLinda.png"

const LandingPageAlt = () => {
    return (
        <>
            <div className="wel-pic">
                <img className="field-pic" src={fieldTwo}/>
                <h1 className="name">Linda Westerlund</h1>
            </div>
            <section className="welcome-txt">
            <img className="profile-pic" src={profilePic}/>
                <div>
                    <h3> Välkommen till min sida!</h3>
                    <p>Mitt namn är Linda Westerlund och jag studerar till Frontend-developer på NBI/ Handelsakademin.</p>
                    <p>Här kan du hitta information om mig, min utbildning och projekt som jag jobbat med</p>

                </div>
                </section>
        </>
    )
}

export default LandingPageAlt