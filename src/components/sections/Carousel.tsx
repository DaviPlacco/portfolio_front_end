import slidesData from '../../Data/slidesData.json'
import { Carousel } from '../../components/Carousel/CarouselComponent'

export const CarouselSection = () =>{
    return(
        <section className="py-[130px]">
            <div>
                <Carousel slides={slidesData} />
            </div>
        </section>
    )
}