import { TabsDemo } from "../../components/tabsComponent"
import { FlipWordsDemo } from "../../components/flip-words-component"

export const Projects = () => {
    return(
        <>
        <section>
        <div className="h-screen">
            <FlipWordsDemo/>
        </div>
        <div>
            <TabsDemo/>
        </div>   
        </section> 
        </>
    )
}