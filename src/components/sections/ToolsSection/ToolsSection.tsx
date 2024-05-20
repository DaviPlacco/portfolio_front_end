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
    return(
        <>
            <div className="w-full flex justify-center py-[150px]">
                    <div className="w-[1280px] flex">
                        <div className="w-1/3">
                            <img src={ToolsImg} alt="TollsImage" className="w-1/2"/>
                        </div>
                        <div>
                            <h2 className="text-[52px] text-left font-['Oxanium'] text-white font-light pb-[85px]">
                                Tools, Languages, and Frameworks
                            </h2>
                            <div className="flex items-center gap-4 pb-[164px]">
                                <img src={ReactJsImg} alt="Reac Js Image"/>
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-16">
                                    React.js
                                </h4>
                                <img src={TailwindImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-16">
                                    Tailwind
                                </h4>
                                <img src={NodeJsImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-16">
                                    Node.js
                                </h4>
                                <img src={JavaScriptImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-16">
                                    JavaScript
                                </h4>
                            </div>
                            <div className="flex items-center gap-4 pb-[164px]">
                                <img src={ApiImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-28">
                                    API
                                </h4>
                                <img src={CssImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-24">
                                    CSS3
                                </h4>
                                <img src={SassImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-12">
                                    SASS CSS
                                </h4>
                                <img src={LessImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-16">
                                    LESS
                                </h4>
                            </div>
                            <div className="flex items-center gap-4 pb-[164px]">
                                <img src={WordpressImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-8">
                                    Wordpress
                                </h4>
                                <img src={ElementorImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-10">
                                    Elementor
                                </h4>
                                <img src={FigmaImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-20">
                                    Figma
                                </h4>
                                <img src={PhotoshopImg} alt="Reac Js Image" />
                                <h4 className="font-['Oxanium'] text-[22px] text-white font-light pr-16">
                                    Photoshop
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}