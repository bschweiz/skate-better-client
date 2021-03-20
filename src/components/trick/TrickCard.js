import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TrickContext } from "./TrickProvider"
import "./TrickCard.css"



export const TrickCard = ({ trick, gameId, props }) => {

    const [trickLandedState, setTrickLandedState] = useState({
        userMake: 0,
        opponentMake: 0,
    })

    const changeUserMake = (evt) => {
        const newTrickState = Object.assign({}, trickLandedState)
        if (evt.target.checked === true) {
            newTrickState[evt.target.name] = true
        } else {
            newTrickState[evt.target.name] = false
        }
        setTrickLandedState(newTrickState)
    }

    // const changeOpponentMake = (DOMEvent) => {
    //     const newTrickState = Object.assign({}, trickLandedState)

    //     newTrickState[DOMEvent.target.name] = DOMEvent.target.value
    //     setTrickLandedState(newTrickState)
    // }

    // const UsercheckboxControl = (evt) => {
    //     if (evt.target.checked === true) {
    //         setTrickLandedState(parseInt(evt.target.id), { complete: true })
    //     } else {
    //         updateCompleted(parseInt(evt.target.id), { complete: false })
    //     }
    // }

    useEffect(() => {
        console.log("trick:", trick, 'gameId: ', gameId, 'trickLandedState: ', trickLandedState)
    }, [trick, trickLandedState])
    return (
        <section className="trick_info">

            <input type="checkbox" key="user-make" id={trick.id} name="userMake"

                checked={trickLandedState.userMake ? "checked" : ""}
                onChange={evt => {
                    changeUserMake(evt)
                }}

            />
            <label htmlFor={trick.id}>{trick.name}</label>
            <input type="checkbox" key="opponent-make" id={trick.id} name="opponenteMake"

                checked={trickLandedState.opponentMake ? "checked" : ""}
                onChange={evt => {
                    changeUserMake(evt)
                }}

            />
            <button
                onClick={evt => {
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
