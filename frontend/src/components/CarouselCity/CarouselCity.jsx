import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselCity = (props) => {
    const { images, texts, width } = props;

    return (
        <Carousel width = { width } autoPlay = {true} infiniteLoop = {true} centerMode = {true} centerSlidePercentage = {80}>
                {images.map((imageSrc, index) => (
                    <div key={index}>
                        <img src={imageSrc} alt={`Image ${index + 1}`} />
                        <p className="legend">{texts[index]}</p>
                    </div>
                ))} 
        </Carousel>
    )
}

export default CarouselCity;