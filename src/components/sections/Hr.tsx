import Hrone from '../../assets/Hr-space/hrone.png'
import HrTwo from '../../assets/Hr-space/hrtwo.png'

export const HrSpace = () => {
    return(
        <>
        <div id="hrcontainer">
            <img id="hrone" src={Hrone} alt="Hr-Space" className="select-none"/>
            <img id="hrtwo" src={HrTwo} alt="Hr-Space" className="select-none"/>
        </div>    
        </>
    )
}