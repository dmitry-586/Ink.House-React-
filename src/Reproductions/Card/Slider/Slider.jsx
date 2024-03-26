import { useState } from "react"
import Card from "../Card"
import { array } from "../data"



export default function Slider ({ slides, numPrev, numNext }) {
    const [currentIndex, setCurrentIndex] = useState(numPrev);

    const styleForBtn = {
        border: '1px solid transparent',
        color: 'rgb(89, 141, 102)',
        background: 'transparent',
        margin: '0 10px'
    }

    const goPrev = () => {
        const isFirstSlide = currentIndex === numPrev;
        const newIndex = isFirstSlide ? currentIndex + 5 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goNext = () => {
        const isLastSlide = currentIndex === numNext;
        const newIndex = isLastSlide ? currentIndex - 5 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    return (
        <div className="styleForSlider">
            <button className="styleForBtn" onClick={goPrev}><img src="src/assets/Slider/icon-left.png" alt="" height={'50px'}/></button>
            <div> 
                <Card {...array[currentIndex]}/>
            </div>
            <button className="styleForBtn" onClick={goNext}><img src="src/assets/Slider/icon-right.png" alt="" height={'50px'}/></button>
        </div>
    )
}