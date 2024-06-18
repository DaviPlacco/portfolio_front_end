import frontend_db from "../../../Data/ProjectsPageData/webdesigner.json"
import WebIcon from "../../../assets/Skillssection/SkillsIcons/wordpressiconpng.png"

export const WebDesignerSection = () => {
    return(
        <>
        <section id="WebDesignerSection">       
            <div className="flex-col w-full bg-black py-16"> 
            <div className="w-full flex justify-center pb-8 text-left">
                <div className="flex w-[1280px] align-middle pb-8 justify-end">
                    <img id="WebDesignerIcon" src={WebIcon} alt="Code Icon" className="pr-4" />
                    <h3 id="WebDesignerH3" className="flex font-['Oxanium'] font-normal text-white text-[36px]">
                        Web Designer
                    </h3>
                </div>
            </div>
            <div id="WebDesignerContainer" className="flex justify-center pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[1280px]">
                {frontend_db.map((project) => (
                    <div key={project.id} className="min-w-[400px] text-left text-white text-opacity-80">
                      <a target="_blank" rel="noopener noreffer" href={project.link}>
                      <img id="ImageWebDesigner" src={project.image} alt={project.alt} className="w-[400px] rounded-[5px]"/>
                      </a>
                        <h4 className="font-['Inter'] text-[22px] font-semibold py-2">{project.title}</h4>
                        <p className="pb-4 text-[16px] ">{project.text}</p>
                    </div>  
                    ))} 
                </div>    
            </div>
        </div>          
        </section>
        </>
    )
}  