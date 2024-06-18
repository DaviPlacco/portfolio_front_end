import ArrowIcon from "../../../assets/GlobalAssets/ARROW.png"


export const HeroSection = () => {
    return(
        <>
            <div id="HeroSectionProjects" className="h-screen justify-center items-center text-center flex">
                <div>
                    <h2 id="SeeAllH2" className="text-white font-['Oxanium'] text-[56px] pb-4 h-full">
                    <span>S</span><span>e</span><span>e</span> <span>a</span><span>l</span><span>l</span> <span>p</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span>
                    </h2>
                    <p id="CheckOutText" className="text-white text-opacity-70 font-['Inter'] text-[18px]">
                        Check out all the details of each project
                    </p>
                    <div className="flex justify-center items-center pt-16">
                    <a href="#FrontEndIcon">
                        <img id="ArrowDown" src={ArrowIcon} alt="Arronw Down" className="justfy-center items-center w-[50px] select-none"/>
                    </a>
                    </div>
                </div>    
            </div>
        </>
    )
}