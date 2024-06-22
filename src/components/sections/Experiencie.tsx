import Imgtwothousandtree from '../../assets/Experiencie/2023img.svg'
import Imgtwothousandone from '../../assets/Experiencie/2021img.svg'
import Imgtwothousandnine from '../../assets/Experiencie/2019img.svg'
import { Divider } from '../Divider/Divider'

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
        <div className="w-full flex items-center justify-center pb-[100px]">
            <div id="timeline" > 
                <div id="timelinecontainerone" className="w-[1280px] flex items-start justify-center gap-20 pb-[296px]">
                    <div className="w-1/3 flex justify-end"><img id="img1" src={Imgtwothousandtree} alt="" className="w-[297px]"/></div>
                    <div className="w-[27px] h-[27px] rounded-full bg-white"></div>
                    <p className="w-1/3 text-left text-white opacity-80 font-['Inter'] text-[16px]"><strong>Front-end & Web Designer</strong> <br></br><br></br>
                    Responsible for creating websites, e-commerce platforms, landing pages, and blogs, focusing on optimal user experience. Delivered projects with optimized SEO, responsiveness, performance, and well-defined UI/UX. Worked with low-code CMS (WordPress) and utilized programming skills (JavaScript, SQL) and libraries (React, Node.js). Proficient in design tools like Figma and Photoshop. <strong><a href="https://vocedigitalpropaganda.com.br" target="_blank" rel="noopner norefferer">( Você Digital Propaganda 2023 )  </a> </strong></p>
                </div>
                <div id="timelinecontainertwo" className="w-[1280px] flex items-start justify-center gap-20 pb-[296px]">
                    <div className="w-1/3 flex justify-end"><img id="img2" src={Imgtwothousandone} alt="" className="w-[297px]"/></div>
                    <div className="w-[27px] h-[27px] rounded-full bg-white"></div>
                    <p className="w-1/3 text-left text-white opacity-80 font-['Inter'] text-[16px]"><strong>Front-end & Web Designer</strong> <br></br><br></br>
                    Front-end Developer and Web Designer, focusing on SEO optimization for better user experience (UX/UI). Developed applications using CMS systems, JavaScript, and frameworks like React, Bootstrap, and Next.js. Managed data in web systems and maintained and updated information in ERP systems (Tiny, Tray, NORD ERP, etc.). <strong><a href="https://eletracempilhadeiras.com.br" target="_blank" rel="noopner norefferer">( Eletrac Empilhadeiras 2021 - 2023 )  </a> </strong></p>
                </div>
                <div id="timelinecontainertr" className="w-[1280px] flex items-start justify-center gap-20">
                    <div className="w-1/3 flex justify-end"><img id="img3" src={Imgtwothousandnine} alt="" className="w-[297px]"/></div>
                    <div className="w-[27px] h-[27px] rounded-full bg-white"></div>
                        <p className="w-1/3 text-left text-white opacity-80 font-['Inter'] text-[16px]"><strong>Web Designer & Designer</strong> <br></br><br></br>I work focused on e-commerce platforms and development in digital marketing! I create profitable strategies and analyze and develop reports based on competitive market analysis. I edit images and videos using professional software. I also edit and maintain websites. <strong><a href="https://www.sanxferramentas.com.br/" target="_blank" rel="noopner norefferer">( Sanx Ferramentas 2019 - 2021 )  </a> </strong></p>
                </div>
            </div>
        </div>
        <div className="pb-16">
        <a id="checkbtn" href="#portfoliocarousel" className="text-[26px] text-left font-['Oxanium']">Check the Portfolio    <span id="chevronright" className="text-[26px] font-medium font-['Oxanium']">&gt;</span></a>
        </div>
        <Divider/>
        </>
    )
}