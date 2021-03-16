import React, { useContext, useRef } from 'react'
import { OpponentContext } from "./OpponentProvider"

export const OpponentSelect = (props) => {

    const chosenOpponent = useRef(null)
    const newOpponentName = useRef(null)
    const newOpponentStance = useRef(null)
    
    console.log("opponent select read")

    return (
        <form className="opponentSelect">
            <h2 className="opponentSelect__title">Previous Opponents:</h2>
            <fieldset>
                <input type="text" ref={chosenOpponent} required autoFocus placeholder="old homies" />
            </fieldset>

            <fieldset>
                <input type="text" ref={newOpponentName} required autoFocus placeholder="enter name" />
            </fieldset>

            <fieldset>
                <input type="text" ref={newOpponentStance} required autoFocus placeholder="stance" />
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                }}
                className="btn btn-primary">
                Save details, start SKATING
        </button>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                }}
                className="btn btn-primary">
                Enter details later, just start SKATING
        </button>
        </form>
    )
}