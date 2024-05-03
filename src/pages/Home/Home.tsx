import { Header } from "../../components/Header/Header"
import { HrSpace } from "../../components/sections/Hr"
import { HeroSection } from "../../components/sections/HeroSection"
import { AboutMe } from "../../components/sections/AboutMeSection"
import { Experiencie } from "../../components/sections/Experiencie"
import { SkillsSection } from "../../components/sections/SkillsSection"



export const Home = () => {

    return(
        <>
           <Header/> 
            <HeroSection/>
            <HrSpace/>
            <AboutMe/>
            <Experiencie/>
            <SkillsSection/>
        </>
    )

}