import Imgtwothousandtree from '../../assets/Experiencie/2023img.svg'
import Imgtwothousandone from '../../assets/Experiencie/2021img.svg'
import Imgtwothousandnine from '../../assets/Experiencie/2019img.svg'

export const Experiencie = () => {
    return(
        <>
        <div id="experiencie" className="flex items-center justify-center pb-[130px]">
            <h3 className="text-white text-[56px] font-medium font-['Oxanium']">
                <span id="left-curly-brace" className="text-[56px] font-medium font-['Oxanium']">
                &#123;
                </span>
                    EXPERIENCIE
                <span id="right-curly-brace"className="text-[56px] font-medium font-['Oxanium']">
                &#125;
                </span>
            </h3>
        </div>
        <div className="w-full flex items-center justify-center">
            <div id="timeline" > 
                <div id="timelinecontainerone" className="w-[1280px] flex items-start justify-center gap-20 pb-[296px]">
                    <div className="w-1/3 flex justify-end"><img id="img1" src={Imgtwothousandtree} alt="" className="w-[297px]"/></div>
                    <div className="w-[27px] h-[27px] rounded-full bg-white"></div>
                    <p className="w-1/3 text-left text-white opacity-80 font-['Inter'] text-[16px]">I am a <strong>Software Engineering</strong> student at Unicesumar Brazil, studying at a campus in Switzerland (Geneva). I am in my second year and have already completed 2 years of Information Technology Management at Jundiai (FATEC) before transferring to the current course.</p>
                </div>
                <div id="timelinecontainertwo" className="w-[1280px] flex items-start justify-center gap-20 pb-[296px]">
                    <div className="w-1/3 flex justify-end"><img id="img2" src={Imgtwothousandone} alt="" className="w-[297px]"/></div>
                    <div className="w-[27px] h-[27px] rounded-full bg-white"></div>
                    <p className="w-1/3 text-left text-white opacity-80 font-['Inter'] text-[16px]">I am a <strong>Software Engineering</strong> student at Unicesumar Brazil, studying at a campus in Switzerland (Geneva). I am in my second year and have already completed 2 years of Information Technology Management at Jundiai (FATEC) before transferring to the current course.</p>
                </div>
                <div id="timelinecontainertr" className="w-[1280px] flex items-start justify-center gap-20">
                    <div className="w-1/3 flex justify-end"><img id="img3" src={Imgtwothousandnine} alt="" className="w-[297px]"/></div>
                    <div className="w-[27px] h-[27px] rounded-full bg-white"></div>
                    <div className="flex-col w-1/3 h-full text-left">
                        <p className="text-left text-white opacity-80 font-['Inter'] text-[16px] pb-[58px]">I am a <strong>Software Engineering</strong> student at Unicesumar Brazil, studying at a campus in Switzerland (Geneva). I am in my second year and have already completed 2 years of Information Technology Management at Jundiai (FATEC) before transferring to the current course.</p>
                        <a id="checktheportfoliobtn" href="#" className="text-[26px] text-left font-['Oxanium']">Check the Portfolio</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex items-center justify-center py-[150px]"> 
            <div id="divisor"></div>
        </div>
        </>
    )
}