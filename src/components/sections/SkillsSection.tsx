import SkillsImg from '../../assets/Skillssection/SKILLSIMG.png'
import { Divider } from '../Divider/Divider'
import CodeIcon from '../../assets/Skillssection/SkillsIcons/codeicon.svg'
import WordpressIcon from '../../assets/Skillssection/SkillsIcons/wordpressiconpng.png'
import DesignIcon from '../../assets/Skillssection/SkillsIcons/designicon.svg'
import { ToolsSection } from './ToolsSection/ToolsSection'

export const SkillsSection = () =>{
    return(
        <>
            <section className="w-full pt-[100px]">
                <div className="w-full flex justify-center">
                    <div className="w-[1280px] flex justify-center pb-[96px]">
                        <div>
                            <img src={SkillsImg} alt="Skills Image" className="pointer-events-none select-none"/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-[1280px] flex-col">
                        <h3 id="myskills" className="text-[26px] text-left font-['Oxanium']">
                            MY SKILLS 
                        </h3>
                        <h2 className="text-[56px] text-left font-['Oxanium'] text-white font-light pb-[85px]">
                            How can I contribute to you?
                        </h2>
                        <Divider/>
                    </div>
                </div>
                <div className="w-full flex justify-center pt-[100px]">
                    <div className="w-[1280px] flex">
                        <div className="flex text-left gap-16"> 
                            <div className="flex-col">
                                <img src={CodeIcon} alt="" className="pb-8"/>
                                <h3 className="text-white text-[36px] font-['Oxanium'] pb-4">
                                    Front-end
                                </h3>
                                <p className="text-white opacity-50 w-[360px] font-['Inter']">
                                    I am a Software Engineering student at Unicesumar Brazil, studying at a campus in Switzerland (Geneva). I am in my second year and have already completed 2 years
                                </p>
                            </div>
                            <div className="flex-col">
                                <img src={WordpressIcon} alt="" className="pb-4"/>
                                <h3 className="text-white text-[36px] font-['Oxanium'] pb-4">
                                    Web Designer
                                </h3>
                                <p className="text-white opacity-50 w-[360px] font-['Inter']">
                                    I am a Software Engineering student at Unicesumar Brazil, studying at a campus in Switzerland (Geneva). I am in my second year and have already completed 2 years
                                </p>
                            </div>
                            <div className="flex-col">
                                <img src={DesignIcon} alt="" className="pb-4"/>
                                <h3 className="text-white text-[36px] font-['Oxanium'] pb-4">
                                    Design
                                </h3>
                                <p className="text-white opacity-50 w-[360px] font-['Inter']">
                                    I am a Software Engineering student at Unicesumar Brazil, studying at a campus in Switzerland (Geneva). I am in my second year and have already completed 2 years
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