import HeroImage from '../../assets/Herosection/heroimage.png'


export const HeroSection = () => {
    return(
        <div className="w-full flex items-center justify-center pb-28">
            <div id="herocontainer" className="pt-28 h-screen w-[1280px] flex items-center justify-center ">
                <section className="w-1/2 sm:w-full flex flex-col items-start">
                    <h3 id="iam" className="text-[26px] font-light font-['Oxanium']">
                        HI I`M 
                    </h3>
                    <h1 id="daviplacco" className="text-white text-[100px] font-light font-['Oxanium']">
                    <span>D</span><span>a</span><span>v</span><span>i</span> <span>B.</span> <span>P</span><span>l</span><span>a</span><span>c</span><span>c</span><span>o</span>
                    </h1>
                    <h3 id="frontend" className="text-[26px] font-light font-['Oxanium']">
                        Front-end Developer
                    </h3>
                    <h3 id="webdesigner" className="pt-6 text-[26px] font-light font-['Oxanium']">
                        Web Designer
                    </h3>
                </section>
                <section id="codeimage" className="w-1/2 sm:w-full flex flex-col items-end">
                    <img src={HeroImage} alt="heroimage" draggable="false" className="h-[1100px] pointer-events-none select-none"/>
                </section>
             </div>
            </div>
    )
}