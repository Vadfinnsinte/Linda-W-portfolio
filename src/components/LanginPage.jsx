import profilePic from "../assets/imageLinda.png"
import field from "../assets/field.jpeg"
import akira from "../assets/akira.jpeg"

const LandingPage = () => {
    
    return (
      
        <>
       
            {/* <h1 className="linda-westerlund-h">Linda Westerlund</h1> */}
            {/* <div className="wel-pic">
                <img className="field-pic" src={field}/>
                </div>
             */}
             
             <div className="welcome-container">
                <img className="profile-pic" src={profilePic}/>
                <section className="welcome-txt">
                    <h3> Välkommen till min sida!</h3>
                    <p>Mitt namn är Linda Westerlund och jag studerar till Frontend-developer på NBI/ Handelsakademin.</p>
                    <p>Här kan du hitta information om mig, min utbildning och projekt som jag jobbat med</p>
                </section>
                <section className="lia-container">
                    <h4 className="lia-head">LIA </h4>
                    <div className="period-container">
                        <h4>Period 1</h4>
                        <p>2024-11-11 </p>
                        <p> - </p>
                        <p>2025-01-31 </p>
                    </div>
                    <div className="period-container">
                        <h4>Period 2</h4>
                        <p>2025-03-17</p>
                        <p> - </p>
                        <p>2025-06-06</p>
                    </div>
                </section>
                
            </div>
        </>

      
    )
    
}

export default LandingPage