import "./Slideshow.css";
import {useState} from "react";

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../../pages/alternatives/images", false, /\.(png|jpe?g|svg$|webp)/)
    );

    // Names in the same order as the image files (alphabetical)
    const names = [
        "Collectibles & Art",
        "Commodities",
        "Digital Assets",
        "Hedge Funds",
        "Infrastructure",
        "Private Credit",
        "Private Equity",
        "Real Estate"
    ];

    const slideForward = () => {
        setSlideIndex(slideIndex === images.length - 1 ? 0 : slideIndex + 1);
    };

    const slideBackward = () => {
        setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1);
    };

    return (
        <div className="slideshow">
            <img src={images[slideIndex]} alt={names[slideIndex]} />
            <button className="arrow prev-arrow" aria-label="Previous slide" onClick={slideBackward}>&lsaquo;</button>
            <button className="arrow next-arrow" aria-label="Next slide" onClick={slideForward}>&rsaquo;</button>
            <div className="slide-caption">
                <span>{names[slideIndex]}</span>
                <span className="slide-count">{slideIndex + 1} / {images.length}</span>
            </div>
        </div>
    );
};

export default Slideshow;
