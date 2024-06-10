import { FlipWordsDemo } from "../../components/AceternityUi/flip-words-component"
import { Link } from "react-router-dom"
import { HeroSection } from "../../ProjectsComponents/sections/HeroSection/HeroSection"
import { FrontEndSection } from "../../ProjectsComponents/sections/FrontEndSection/FrontEndSection"
import { WebDesignerSection } from "../../ProjectsComponents/sections/WebDesignerSection/WebDesignerSection"
import { DesignerSection } from "../../ProjectsComponents/sections/DesignerSection/DesignerSection"
import { Footer } from "../../components/Footer/Footer"

export const Projects = () => {
    return(
        <>
        <section className="pb-[100px]">
        <HeroSection/>
        <FrontEndSection/>
        <WebDesignerSection/>
        <DesignerSection/>
        <div className="h-screen">
            <FlipWordsDemo/>
        </div>
        <Link to={"/"} className="text-white bg-white bg-opacity-10 border-[1.5px] font-['Inter'] font-medium rounded-full decoration-1 py-4 px-8 transition-all duration-300 hover:bg-white hover:text-black">Back to the main page</Link>
        </section> 
        <Footer/>
        </>
    )
}