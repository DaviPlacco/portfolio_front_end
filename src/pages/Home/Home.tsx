import { Header } from "../../components/Header/Header"
import { HrSpace } from "../../components/sections/Hr"
import { HeroSection } from "../../components/sections/HeroSection"
import { AboutMe } from "../../components/sections/AboutMeSection"
import { Experiencie } from "../../components/sections/Experiencie"
import { CarouselSection } from "../../components/sections/Carousel"
import { SkillsSection } from "../../components/sections/SkillsSection"
import { ContactSection } from "../../components/sections/Contact"
import { Footer } from "../../components/Footer/Footer"



export const Home = () => {

    return(
        <>
        <section>
           <Header/> 
            <HeroSection/>
            <HrSpace/>
            <AboutMe/>
            <Experiencie/>
            <CarouselSection/>
            <SkillsSection/>
            <ContactSection/>
            <Footer/>
        </section>
        </>
    )

}