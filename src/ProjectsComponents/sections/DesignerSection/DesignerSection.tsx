import frontend_db from "../../../Data/ProjectsPageData/designer.json"
import DesignerIcon from "../../../assets/Skillssection/SkillsIcons/designicon.svg"

export const DesignerSection = () => {
    return(
        <>
        <div>            
            <div className="flex-col w-full bg-white py-16 mb-16"> 
            <div className="w-full flex justify-center pb-8 text-left">
                <div className="flex w-[1280px] align-middle pb-8">
                    <img src={DesignerIcon} alt="Code Icon" className="pr-4" />
                    <h3 className="flex font-['Oxanium'] font-normal text-black text-[36px]">
                        Designer
                    </h3>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[1280px]">
                {frontend_db.map((project) => (
                    <div key={project.id} className="min-w-[400px] text-left">
                      <img id="ImageFrontEnd" src={project.image} alt={project.alt} className="w-[400px] rounded-[5px]"/>
                        <h4 className="font-['Inter'] text-[22px] font-semibold py-2">{project.title}</h4>
                        <p className="pb-4 text-[16px] ">{project.text}</p>
                    </div>  
                    ))} 
                </div>    
            </div>
        </div>          
        </div>
        </>
    )
}  