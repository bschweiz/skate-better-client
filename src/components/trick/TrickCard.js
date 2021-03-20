import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { TrickContext } from "./TrickProvider"
import "./TrickCard.css"



export const TrickCard = ({ trick, gameId, props }) => {
console.log(props)
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
    
    useEffect(() => {
        console.log("trick:", trick, 'gameId: ', gameId)
    }, [trick])
        return (
            <section className="trick_info">
        
                    <input type="checkbox" key="skater-{trick.id}" id={trick.id} name="checkbox" checked=
                    {trick.stance ? "checked": ""}
                    onChange={evt=>{
                        console.log(evt)
                    }} />
                    <label htmlFor={trick.id}>{trick.name}</label>
                    <input type="checkbox" key="opponent-{trick.id}" id={trick.id} name="checkbox" checked=
                    {trick.stance ? "checked": ""}
                    onChange={evt=>{
                        console.log(evt)
                    }} />
                    <button 
                    onClick={evt=> {
                        evt.preventDefault()

                        const newGameTrick = {
                            gameId: gameId,
                            trickId: parseInt(trick.id),


                        }
                    }}>next trick</button>
            </section>
        )
    
}
