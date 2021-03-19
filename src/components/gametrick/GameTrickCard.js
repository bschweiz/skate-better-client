import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { GameTrickContext } from "./GameTrickProvider"
import "./GameTrickCard.css"



export const GameTrickCard = ({ gametrick, props }) => {

    // const { tricks, getTricks } = useContext(TrickContext)
    // // debugger
    // useEffect(() => {
    //     getTricks()
    // }, [])

    // const matchingPlant = plants.find(p => p.id === event.plantId)
    
    // const checkboxControl = (evt) => {
    //     if(evt.target.checked === true){
    //         updateCompleted(parseInt(evt.target.id), {complete: true})
    //     } else {
    //         updateCompleted(parseInt(evt.target.id), {complete: false})
    //     }
    // }
    
    
        return (
            <section className="trick_info">
        
                    <input type="checkbox" key={"skater-make" + gametrick.id} name="checkbox" checked=
                    { gametrick.user_make ? "checked": ""}
                    onChange={evt=>{
                        console.log(evt)
                    }} />
                    <label htmlFor={gametrick.id}>{gametrick.trick.name}</label>
                    <input type="checkbox" key={"opponent-make" + gametrick.id} name="checkbox" checked=
                    { gametrick.opponent_make ? "checked": ""}
                    onChange={evt=>{
                        console.log(evt)
                    }} />
            </section>
        )
    
}
