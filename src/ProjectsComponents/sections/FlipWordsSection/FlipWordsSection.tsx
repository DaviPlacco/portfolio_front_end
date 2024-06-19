import { Link } from "react-router-dom"
import { FlipWordsDemo } from "../../../components/AceternityUi/flip-words-component"


export const FlipWordsSection = () => {
    return (
        <>
            <div id="FlipWordsContainer">
                <div className="h-screen">
                    <FlipWordsDemo/>
                </div>
                <Link to={"/portfolio_front_end"} className="text-white bg-white bg-opacity-10 border-[1.5px] font-['Inter'] font-medium rounded-full decoration-1 py-4 px-8 transition-all duration-300 hover:bg-white hover:text-black">Back to the main page</Link>
            </div>
        </>
    )
}