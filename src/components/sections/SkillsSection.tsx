import SkillsImg from '../../assets/Skillssection/SKILLSIMG.png'
import { Divider } from '../Divider/Divider'
import CodeIcon from '../../assets/Skillssection/SkillsIcons/codeicon.svg'
import WordpressIcon from '../../assets/Skillssection/SkillsIcons/wordpressiconpng.png'
import DesignIcon from '../../assets/Skillssection/SkillsIcons/designicon.svg'
import { ToolsSection } from './ToolsSection/ToolsSection'

export const SkillsSection = () =>{
    return(
        <>
            <section className="w-full pt-[50px]">
                <div className="w-full flex justify-center">
                    <div className="w-[1280px] flex justify-center pb-[96px]">
                        <div>
                            <img id="skillsimage" src={SkillsImg} alt="Skills Image" className="pointer-events-none select-none"/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-[1280px] flex-col">
                        <h3 id="myskills" className="text-[26px] text-left font-['Oxanium']">
                            MY SKILLS 
                        </h3>
                        <h2 id="contibuteH2" className="text-[56px] text-left font-['Oxanium'] text-white font-light pb-[85px]">
                            How can I contribute to you?
                        </h2>
                        <Divider/>
                    </div>
                </div>
                <div className="w-full flex justify-center pt-[100px]">
                    <div className="w-[1280px] flex">
                        <div className="flex text-left gap-16"> 
                            <div id="frontendcontainer" className="flex-col">
                                <img src={CodeIcon} alt="Code Icon" className="pb-8"/>
                                <h3 className="text-white text-[36px] font-['Oxanium'] pb-4">
                                    Front-end
                                </h3>
                                <p className="text-white opacity-50 w-[360px] font-['Inter']">
                                As a Front-end Developer, I use technologies like React, Tailwind, and TypeScript to build dynamic and responsive user interfaces. My work ensures that applications are intuitive, high-performing, and scalable, providing users with a seamless experience.
                                </p>
                            </div>
                            <div id="webdesignercontainer" className="flex-col">
                                <img src={WordpressIcon} alt="Wordpress Icon" className="pb-4"/>
                                <h3 className="text-white text-[36px] font-['Oxanium'] pb-4">
                                    Web Designer
                                </h3>
                                <p className="text-white opacity-50 w-[360px] font-['Inter']">
                                As a Web Designer, I specialize in creating visually appealing and functional websites using WordPress and Elementor. I focus on SEO optimization to enhance search engine performance, increasing the visibility and reach of your website.
                                </p>
                            </div>
                            <div id="designercontainer" className="flex-col">
                                <img src={DesignIcon} alt="Design Icon" className="pb-4"/>
                                <h3 className="text-white text-[36px] font-['Oxanium'] pb-4">
                                    Design
                                </h3>
                                <p className="text-white opacity-50 w-[360px] font-['Inter']">
                                As a Designer, I leverage tools like Photoshop and Figma to craft compelling visual materials and prototypes. My design skills help translate ideas into visually appealing projects that effectively communicate your brand’s message
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ToolsSection/>
                <Divider/>
            </section>    
        </>
    )
}