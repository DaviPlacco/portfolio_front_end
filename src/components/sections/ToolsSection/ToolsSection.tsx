import ToolsImg from '../../../assets/Skillssection/TOOLSIMG.png'
import ReactJsImg from '../../../assets/Skillssection/ToolsIcons/reacticon.svg'
import TailwindImg from '../../../assets/Skillssection/ToolsIcons/tailwindicon.svg'
import NodeJsImg from '../../../assets/Skillssection/ToolsIcons/nodeicon.svg'
import JavaScriptImg from '../../../assets/Skillssection/ToolsIcons/javascripticon.svg'
import ApiImg from '../../../assets/Skillssection/ToolsIcons/apiicon.svg'
import CssImg from '../../../assets/Skillssection/ToolsIcons/css3icon.svg'
import SassImg from '../../../assets/Skillssection/ToolsIcons/sassicon.svg'
import LessImg from '../../../assets/Skillssection/ToolsIcons/lessicon.svg'
import WordpressImg from '../../../assets/Skillssection/ToolsIcons/wordpressicon.svg'
import ElementorImg from '../../../assets/Skillssection/ToolsIcons/elementoricon.svg'
import FigmaImg from '../../../assets/Skillssection/ToolsIcons/figmaicon.svg'
import PhotoshopImg from '../../../assets/Skillssection/ToolsIcons/photoshopicon.svg'


export const ToolsSection = () => {

// Function to update years of experience automatic
    
    const YearCurrently = new Date().getFullYear();

    const experiencie = [
        {React: YearCurrently - 2022},
        {Tailwind: YearCurrently - 2023},
        {Node: YearCurrently - 2023},
        {Javascript: YearCurrently - 2021},
        {API: YearCurrently - 2023},
        {CSS: YearCurrently - 2020},
        {SASS: YearCurrently - 2021},
        {LESS: YearCurrently - 2021},
        {Wordpress: YearCurrently - 2019},
        {Elementor: YearCurrently - 2019},
        {Figma: YearCurrently - 2022},
        {Photoshop: YearCurrently - 2020}
    ]

    return(
        <>
            <div className="w-full flex justify-center py-[150px]">
                    <div className="w-[1280px] flex">
                        <div className="w-1/3">
                            <img id="toolsimage" src={ToolsImg} alt="TollsImage" className="w-1/2 pointer-events-none select-none"/>
                        </div>
                        <div>
                            <h2 id="toolsH2" className="text-[52px] text-left font-['Oxanium'] text-white font-light pb-[85px]">
                                Tools, Languages, and Frameworks
                            </h2>
                            <div id="reactcontainer" className="flex items-center gap-4 pb-[164px]">
                                <img id="reacticon" src={ReactJsImg} alt="React Js Image"/>
                                <h4 id="reacttext" aria-label={experiencie[0].React + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-16">
                                React.js
                                </h4>
                                <img id="tailwindicon" src={TailwindImg} alt="Reac Js Image" />
                                <h4 id="tailwindtext" aria-label={experiencie[1].Tailwind + " year of experiencie."} className="font-['Oxanium'] text-[22px] text-white font-light mr-16">
                                    Tailwind
                                </h4>
                                <img id="nodeicon" src={NodeJsImg} alt="Reac Js Image" />
                                <h4 id="nodetext" aria-label={experiencie[2].Node + " year of experiencie."} className="font-['Oxanium'] text-[22px] text-white font-light mr-16">
                                    Node.js
                                </h4>
                                <img id="javascripticon" src={JavaScriptImg} alt="Reac Js Image" />
                                <h4 id="javascripttext" aria-label={experiencie[3].Javascript + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-16">
                                    JavaScript
                                </h4>
                            </div>
                            <div id="apicontainer" className="flex items-center gap-4 pb-[164px]">
                                <img id="apiicon" src={ApiImg} alt="Reac Js Image" />
                                <h4 id="apitext" aria-label={experiencie[4].API + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-28">
                                    API
                                </h4>
                                <img id="cssicon" src={CssImg} alt="Reac Js Image" />
                                <h4 id="csstext" aria-label={experiencie[5].CSS + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-24">
                                    CSS3
                                </h4>
                                <img id="sassicon" src={SassImg} alt="Reac Js Image" />
                                <h4 id="sasstext" aria-label={experiencie[6].SASS + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-12">
                                    SASS CSS
                                </h4>
                                <img id="lessicon" src={LessImg} alt="Reac Js Image" />
                                <h4 id="lesstext" aria-label={experiencie[7].LESS + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-16">
                                    LESS
                                </h4>
                            </div>
                            <div id="wordpresscontainer" className="flex items-center gap-4 pb-[164px]">
                                <img id="wordpressicon" src={WordpressImg} alt="Reac Js Image" />
                                <h4 id="wordpresstext" aria-label={experiencie[8].Wordpress + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-8">
                                    Wordpress
                                </h4>
                                <img id="elementoricon" src={ElementorImg} alt="Reac Js Image" />
                                <h4 id="elementortext" aria-label={experiencie[9].Elementor + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-10">
                                    Elementor
                                </h4>
                                <img id="figmaicon" src={FigmaImg} alt="Reac Js Image" />
                                <h4 id="figmatext" aria-label={experiencie[10].Figma + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-20">
                                    Figma
                                </h4>
                                <img id="photoshopicon" src={PhotoshopImg} alt="Reac Js Image" />
                                <h4 id="photoshoptext" aria-label={experiencie[11].Photoshop + " years of experiencie"} className="font-['Oxanium'] text-[22px] text-white font-light mr-16">
                                    Photoshop
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}