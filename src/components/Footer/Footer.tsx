import DevSymbolImg from '../../assets/FooterIcons/Devsymbol.svg'
import LinkedinImg from '../../assets/FooterIcons/linkedinicon.svg'
import GitHubImg from '../../assets/FooterIcons/githubicon.svg'
import BehanceImg from '../../assets/FooterIcons/behanceicon.svg'
import InstagramImg from '../../assets/FooterIcons/instagramicon.svg'
import WhatsappImg from '../../assets/FooterIcons/whatsappicon.svg'
import Circle from '../../assets/FooterIcons/CIRCLE.png'

export const Footer = () => {

    const currentYear = new Date().getFullYear();    

    return(
        <>
        <section id="footersection" className="relative w-full h-[180px] flex justify-center border-t-2 border-slate-900">
            <div>
            <img id="circleimg" src={Circle} alt="" />
            </div>
            <div className="w-[1280px] flex items-center">
                <div className="w-1/3">
                    <h4 className="font-['Inter'] text-left text-[18px] font-light text-white opacity-50">
                        © {currentYear} Davi Placco. All rights reserved.
                    </h4>
                </div>
                <div className="w-1/3 flex justify-center items-center"> 
                    <img src={DevSymbolImg} alt="Dev Symbol Image" className=""/>
                </div>
                <div className="w-1/3 flex gap-6 justify-end">
                    <h5 className="font-['Inter'] text-left text-[18px] font-light text-white opacity-50">
                        Social:
                    </h5>
                    <div id="socialcontainer" className="flex gap-6">
                        <a href="https://www.linkedin.com/in/davi-placco-9b943217a/" target="_blank" rel="noopener norefferer"><img src={LinkedinImg} alt="Linkedin Image" id="Linkedin" /></a>
                        <a href="https://github.com/DaviPlacco" target="_blank" rel="noopener norefferer"><img src={GitHubImg} alt="Git Hub Image" id="GitHub"/></a>
                        <a href="https://www.behance.net/davibplacco" target="_blank" rel="noopener norefferer"><img src={BehanceImg} alt="Behance Image" id="Behance" /></a>
                        <a href="https://www.instagram.com/davi_placco/" target="_blank" rel="noopener norefferer"><img src={InstagramImg} alt="Instagram Image" id="Instagram" /></a>
                        <a href="https://wa.me/351910728668?text=Hi%2C+I+came+across+your+portfolio+and+really+liked+what+I+saw.+I+would+like+to+have+more+information+about+your+work%21" target="_blank" rel="noopener norefferer"><img src={WhatsappImg} alt="Whatsapp Image" id="Whatsapp" /></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}