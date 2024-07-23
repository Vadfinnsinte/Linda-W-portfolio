import { createHashRouter } from "react-router-dom";
import WebbRoot from "./WebbRoot";
import ContactInfo from "../components/ContactInfo";
import Projects from "../components/Projects";
import LandingPage from "../components/LanginPage";
import LandingPageAlt from "../components/LandnigPageAlt";
import PokemonTeam from "../components/PokemonTeam";


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
                element: <Projects />,
                children: [
                    {
                        path: "/projekt/pokemon",
                        element: <PokemonTeam/>
                    }
                ] 
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