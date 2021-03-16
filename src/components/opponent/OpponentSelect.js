import React, { useContext, useRef } from 'react'
import { OpponentContext } from "./OpponentProvider"

export const OpponentSelect = (props) => {

    const { addOpponent, getAllOpponents } = useContext(OpponentContext)

    useEffect(() => {
        getAllOpponents()
    }, [])



    const chosenOpponent = useRef(null)
    const newOpponentName = useRef(null)
    let goofy = false
    
    const constructNewOpponent
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
                <input type="text" ref={goofy} required autoFocus placeholder="stance" />
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