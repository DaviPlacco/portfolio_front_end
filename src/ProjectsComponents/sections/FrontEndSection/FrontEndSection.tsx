import frontend_db from "../../../Data/ProjectsPageData/frontend.json"
import CodeIcon from "../../../assets/Skillssection/SkillsIcons/codeicon.svg"

export const FrontEndSection = () => {
    return(
        <>
        <section id="FrontEndSection">            
            <div className="flex-col w-full bg-white py-16"> 
            <div className="w-full flex justify-center pb-8 text-left">
                <div className="flex w-[1280px] align-middle pb-8">
                    <img id="FrontEndIcon" src={CodeIcon} alt="Code Icon" className="pr-4" />
                    <h3 id="FrontEndH3" className="flex font-['Oxanium'] font-normal text-black text-[36px]">
                        Front-end
                    </h3>
                </div>
            </div>
            <div id="FrontEndContainer" className="flex justify-center pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[1280px]">
                {frontend_db.map((project) => (
                    <div key={project.id} className="min-w-[400px] text-left">
                      <a target="_blank" rel="noopener noreffer" href={project.link}>  
                      <img id="ImageFrontEnd" src={project.image} alt={project.alt} className="w-[400px] rounded-[5px]"/>
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