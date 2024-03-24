import { useState } from "react"
import Card from "./Card"
import { array } from "./data"



export default function Slider ({ slides, numPrev, numNext }) {
    const [currentIndex, setCurrentIndex] = useState(numPrev);

    const styleForSlider = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    const styleForBtn = {
        height: '40px',
        width: '80px',
        border: '1px solid rgb(89, 141, 102)',
        color: 'rgb(89, 141, 102)',
        background: 'white',
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
        <div style={styleForSlider}>
            <button style={styleForBtn} onClick={goPrev}>prev</button>
            <div style={{display: 'flex',width: '180px', overflow: 'hidden'}}> 
                <Card {...array[currentIndex]}/>
            </div>
            <button style={styleForBtn} onClick={goNext}>next</button>
        </div>
    )
}