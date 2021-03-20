import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TrickContext } from "./TrickProvider"
import "./TrickCard.css"



export const TrickCard = ({ trick, gameId, props }) => {

    const [ trickLandedState, setTrickLandedState ] = useState({
        userMake: 0,
        opponentMake: 0,
    })

    const changeUserMake = (DOMEvent) => {
        const newTrickState = Object.assign({}, trickLandedState)

        newTrickState[DOMEvent.target.name] = DOMEvent.target.value
        setTrickLandedState(newTrickState)
    }

    const changeOpponentMake = (DOMEvent) => {
        const newTrickState = Object.assign({}, trickLandedState)

        newTrickState[DOMEvent.target.name] = DOMEvent.target.value
        setTrickLandedState(newTrickState)
    }
    
    useEffect(() => {
        console.log("trick:", trick, 'gameId: ', gameId, 'trickLandedState: ', trickLandedState)
    }, [trick, trickLandedState])
        return (
            <section className="trick_info">
        
                    <input type="checkbox" key="user-make" id={trick.id} name="userMake" 
                    
                    checked={trickLandedState.userMake ? "checked": ""}
                    onChange={evt=>{
                        console.log(evt)
                    }} 
                        
                    />
                    <label htmlFor={trick.id}>{trick.name}</label>
                    <input type="checkbox" key="opponent-make" id={trick.id} name="opponenteMake" 

                    checked={trickLandedState.opponentMake ? "checked": ""}
                    onChange={evt=>{
                        console.log(evt)
                    }} 

                    />
                    <button 
                    onClick={evt=> {
                        evt.preventDefault()

                        const newGameTrick = {
                            gameId: gameId,
                            trickId: parseInt(trick.id),
                            userMake: trickLandedState.userMake,
                            opponentMake: trickLandedState.opponentMake
                        }
                    }}>next trick</button>
            </section>
        )
    
}
