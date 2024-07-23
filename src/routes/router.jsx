import { createHashRouter } from "react-router-dom";
import WebbRoot from "./WebbRoot";
import ContactInfo from "../components/ContactInfo";
import Projects from "../components/Projects";
import LandingPage from "../components/LanginPage";
import LandingPageAlt from "../components/LandnigPageAlt";


const router = createHashRouter([
    {
        path: "/",
        element: <WebbRoot/>, 
        children: [
            {
                path: "/cv",
                element: <ContactInfo />
            },
            {
                path: "/projekt",
                element: <Projects /> 
            },
            {
                path: "/",
                // element: <LandingPage/>
                element: <LandingPageAlt/>
            }
        ]
    }
])
export {router}