import slidesData from '../../Data/slidesData.json'
import { Carousel } from '../../components/Carousel/CarouselComponent'
import { SeeTheProjects } from '../Btn/BtnSeeAllTheProjects'

export const CarouselSection = () =>{
    return(
        <section id="portfoliocarousel" className="py-[130px]">
            <div>
                <h2 className="text-white text-[46px] font-medium font-['Oxanium'] pb-[100px]">
                     <span id="chevronleft" className="text-[46px] font-medium font-['Oxanium']">&lt;</span>My Projects<span id="chevronright" className="text-[46px] font-medium font-['Oxanium']">/&gt;</span>
                </h2>     
            </div>
            <div id="slidecarousel">
                <Carousel slides={slidesData} />
            </div>
            <div className="pt-[150px]"> 
                <h4 className="font-['Inter'] font-normal text-[22px] text-white pb-[40px]">
                    To see all projects, click the button below.
                </h4>
                <SeeTheProjects/>
            </div>
        </section>
    )
}