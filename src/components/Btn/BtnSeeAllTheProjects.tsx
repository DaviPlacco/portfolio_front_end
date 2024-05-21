import { Link } from "react-router-dom"

export const SeeTheProjects = () => {
    return(
        <>
        <Link to={"/Projects"} target="_blank" rel="noopener noreffer">
            <button id="SeeProjects" className="w-[250px] h-[50px] rounded-[50px] text-center text-white text-lg font-medium font-['Inter']">
                See all the projects &gt;
            </button>
        </Link>
        </>
    )
}