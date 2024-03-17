import { useState } from "react"
import Card from "./Card/Card"
import { array } from "./Card/data"
import ReproductionSection from "./ReproductionsSection"


export default function Reproductions () {
    const [btn, setBtn] = useState('France')


    return (
        <>
        <ReproductionSection active={btn} onChange={(current) => setBtn(current)}/>
        
        {btn == 'France' && (
            <div className="Cards">
                <Card {...array[0]}/>
                <Card {...array[1]}/>
                <Card {...array[2]}/>
                <Card {...array[3]}/>
                <Card {...array[4]}/>
                <Card {...array[5]}/>
            </div>
        )}

        {btn == 'Germany' && (
            <div className="Cards">
                <Card {...array[6]}/>
                <Card {...array[7]}/>
                <Card {...array[8]}/>
                <Card {...array[9]}/>
                <Card {...array[10]}/>
                <Card {...array[11]}/>
            </div>
        )}  

        {btn == 'England' && (
            <div className="Cards">
                <Card {...array[12]}/>
                <Card {...array[13]}/>
                <Card {...array[14]}/>
                <Card {...array[15]}/>
                <Card {...array[16]}/>
                <Card {...array[17]}/>
            </div>
        )} 
        </>
    )
}