import { HeroSection } from "../../ProjectsComponents/sections/HeroSection/HeroSection"
import { FlipWordsSection } from "../../ProjectsComponents/sections/FlipWordsSection/FlipWordsSection"
import { FrontEndSection } from "../../ProjectsComponents/sections/FrontEndSection/FrontEndSection"
import { WebDesignerSection } from "../../ProjectsComponents/sections/WebDesignerSection/WebDesignerSection"
import { DesignerSection } from "../../ProjectsComponents/sections/DesignerSection/DesignerSection"
import { Footer } from "../../components/Footer/Footer"
import { useEffect } from "react"

export const Projects = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
        <section className="pb-[100px]">
        <HeroSection/>
        <FrontEndSection/>
        <WebDesignerSection/>
        <DesignerSection/>
        <FlipWordsSection/>
        </section> 
        <Footer/>
        </>
    )
}