import AboutImage from '../../assets/Aboutsection/AboutImage.png'
import MeImage from '../../assets/Aboutsection/MeImage.png'
import { BtnExperiencie } from '../Btn/BtnExperiencie'

export const AboutMe = () => {
    return(
        <div id="aboutcontainer" className="w-full flex items-center justify-center pb-28">
            <div className="pt-28 h-screen w-[1280px] flex items-center justify-center">
                <section id="aboutsectionone" className="w-1/2 flex flex-col items-start">
                    <h2 id="aboutmeH2" className="text-white text-[46px] font-medium font-['Oxanium']">
                     <span id="chevronleft" className="text-[46px] font-medium font-['Oxanium']">&lt;</span>About me<span id="chevronright" className="text-[46px] font-medium font-['Oxanium']">/&gt;</span>
                    </h2>
                    <p id="iamText" className="text-left py-9 opacity-60"><span className="text-white text-[22px] font-light font-['Inter']">I am a </span>
                    <span className="text-white text-[22px] font-semibold font-['Inter']">Software Engineering</span>
                    <span className="text-white text-[22px] font-light font-['Inter']"> student at Unicesumar Brazil, studying at a campus in Switzerland (Geneva). I am in my second year and have already completed 2 years of Information Technology Management at Jundiai (FATEC) before transferring to the current course.</span>
                    </p>
                    <BtnExperiencie/>
                    <img id="meImage" src={MeImage} alt="Me Image" className="w-1/2 pointer-events-none select-none"/>
                </section>
                <section className="w-1/2 flex flex-col">
                    <img id="aboutImage" src={AboutImage} alt="abouimage" draggable="false" className="pointer-events-none select-none"/>
                </section>
             </div>
            </div>
    )
}

