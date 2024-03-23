import { Carousel } from "bootstrap"
import { Component } from "react";


export default class Slider extends Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img src="src/assets/cards/a1.jpeg" alt="" className="d-block w-100"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="src/assets/cards/a2.jpeg" alt="" className="d-block w-100"/>
                </Carousel.Item>
            </Carousel>
        )
    }
}